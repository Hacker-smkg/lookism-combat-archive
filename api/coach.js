const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const FALLBACK_MODELS = [
  MODEL,
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite"
].filter((model, index, list) => model && list.indexOf(model) === index);
const MAX_PROMPT_LENGTH = 12000;
const ALLOWED_SUGGESTIONS = new Set([
  "promotion_review",
  "recovery_plan",
  "quest_focus",
  "boss_test_ready",
  "diet_basics",
  "motivation"
]);

function sendJson(response, status, payload) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.status(status).json(payload);
}

function safePrompt(payload) {
  const prompt = String(payload.prompt || "").trim();
  if (prompt) return prompt.slice(0, MAX_PROMPT_LENGTH);
  return [
    "You are a safe fitness coach for a Lookism-inspired training app.",
    "Use fictional labels only as motivational framing. Do not claim powers, UI, path, or mastery are real abilities.",
    "Give practical training guidance under 140 words.",
    JSON.stringify({ profile: payload.profile || {}, analysis: payload.analysis || {} }).slice(0, 8000)
  ].join("\n");
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages.slice(-10).map((message) => ({
    role: message.role === "assistant" ? "assistant" : "user",
    content: String(message.content || message.text || "").slice(0, 1200)
  })).filter((message) => message.content.trim());
}

function safeChatPrompt(payload) {
  const context = {
    profile: payload.profile || {},
    analysis: payload.analysis || null,
    progress: payload.progress || {},
    journey: payload.journey || null,
    recentQuestState: Array.isArray(payload.recentQuestState) ? payload.recentQuestState.slice(0, 16) : [],
    promotionReview: payload.promotionReview || {}
  };
  return [
    "You are the System Assistant for a Lookism-inspired fitness app.",
    "Read the user's profile, diagnosis, XP, rank, stats, quests, and journey. Give concise coaching in a confident but safe tone.",
    "You can help with: condition summary, Lookism-style training route, martial-art focus, mastery/fighter-type guidance, diet basics, sleep, recovery, potential growth, motivation, and next-rank checklist.",
    "Important: do not directly promote the user. Rank changes are deterministic through XP, quests, boss tests, and app rules. If promotion is asked, explain the promotionReview data.",
    "Safety: fictional UI/path/mastery labels are motivation only. Do not claim powers are real. No harmful punishment, crash dieting, medical diagnosis, or full-contact fight advice. Injuries or pain require qualified professional guidance.",
    "Return JSON only with this shape: {\"text\":\"brief assistant reply under 180 words\",\"suggestions\":[\"promotion_review\",\"quest_focus\"]}. Use only allowed suggestions.",
    `Allowed suggestions: ${[...ALLOWED_SUGGESTIONS].join(", ")}`,
    `Context: ${JSON.stringify(context).slice(0, 9000)}`,
    `Conversation: ${JSON.stringify(sanitizeMessages(payload.messages)).slice(0, 2600)}`
  ].join("\n");
}

function parseCoachResponse(rawText) {
  const raw = String(rawText || "").trim();
  const jsonCandidate = raw.match(/\{[\s\S]*\}/)?.[0] || "";
  try {
    const parsed = JSON.parse(jsonCandidate);
    const text = String(parsed.text || "").trim() || raw;
    const suggestions = Array.isArray(parsed.suggestions)
      ? parsed.suggestions.filter((item) => ALLOWED_SUGGESTIONS.has(item)).slice(0, 3)
      : [];
    return { text, suggestions };
  } catch {
    const cleaned = raw
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();
    const partialText = cleaned.match(/"text"\s*:\s*"((?:\\.|[^"\\])*)/)?.[1]
      ?.replace(/\\"/g, "\"")
      .replace(/\\n/g, "\n")
      .replace(/\\u([0-9a-f]{4})/gi, (_match, code) => String.fromCharCode(parseInt(code, 16)))
      .trim();
    return {
      text: partialText || cleaned || "I read your System, but the model returned no coaching text.",
      suggestions: ["quest_focus", "promotion_review"]
    };
  }
}

async function generateWithModel(model, apiKey, prompt, options = {}) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const geminiResponse = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: options.systemInstruction || "Safe, practical fitness coaching only. Fictional manhwa concepts are motivational labels, not medical, combat, or safety guarantees." }]
      },
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: options.temperature ?? 0.55,
        maxOutputTokens: options.maxOutputTokens || 420
      }
    })
  });

  const data = await geminiResponse.json().catch(() => ({}));
  if (!geminiResponse.ok) {
    throw new Error(data.error?.message || `Gemini ${model} returned HTTP ${geminiResponse.status}`);
  }

  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join(" ").trim();
  return {
    text: text || "Gemini returned no coaching text.",
    model
  };
}

async function callGemini(prompt, options = {}) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured on the deployment.");
  }

  let lastError;
  for (const model of FALLBACK_MODELS) {
    try {
      return await generateWithModel(model, apiKey, prompt, options);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("Gemini returned no coaching text.");
}

module.exports = async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    response.status(204).end();
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Use POST /api/coach." });
    return;
  }

  try {
    const payload = request.body || {};
    if (payload.mode === "chat" || Array.isArray(payload.messages)) {
      const result = await callGemini(safeChatPrompt(payload), {
        maxOutputTokens: 720,
        temperature: 0.62,
        systemInstruction: "You are a safe Lookism-inspired System Assistant. Stay practical, concise, motivational, and never directly mutate rank, XP, or medical decisions."
      });
      sendJson(response, 200, { ...parseCoachResponse(result.text), model: result.model, source: "vercel-api-coach" });
      return;
    }
    const result = await callGemini(safePrompt(payload));
    sendJson(response, 200, { text: result.text, model: result.model, source: "vercel-api-coach" });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
};
