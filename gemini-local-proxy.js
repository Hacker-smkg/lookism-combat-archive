const fs = require("fs");
const http = require("http");
const path = require("path");

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const FALLBACK_MODELS = [
  MODEL,
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite"
].filter((model, index, list) => model && list.indexOf(model) === index);
const PORT = Number(process.env.GEMINI_PROXY_PORT || 8787);
const MAX_BODY_BYTES = 1024 * 1024;
const ALLOWED_SUGGESTIONS = new Set([
  "promotion_review",
  "recovery_plan",
  "quest_focus",
  "boss_test_ready",
  "diet_basics",
  "motivation"
]);

function loadEnvFile(fileName) {
  const filePath = path.join(process.cwd(), fileName);
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body) > MAX_BODY_BYTES) {
        reject(new Error("Request body too large."));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function safePrompt(payload) {
  const prompt = String(payload.prompt || "").trim();
  if (prompt) return prompt.slice(0, 12000);
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
    "You can help with condition summary, training route, martial-art focus, mastery guidance, diet basics, sleep, recovery, motivation, and next-rank checklist.",
    "Do not directly promote the user. Rank changes are deterministic through XP, quests, boss tests, and app rules.",
    "Safety: fictional UI/path/mastery labels are motivation only. No harmful punishment, crash dieting, medical diagnosis, or full-contact fight advice.",
    "Return JSON only: {\"text\":\"brief assistant reply under 180 words\",\"suggestions\":[\"promotion_review\",\"quest_focus\"]}.",
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
    return {
      text: raw || "I read your System, but the model returned no coaching text.",
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
  if (!apiKey) throw new Error("GEMINI_API_KEY is not configured.");

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

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.url === "/health" && request.method === "GET") {
    sendJson(response, 200, { ok: true, model: MODEL, hasKey: Boolean(process.env.GEMINI_API_KEY) });
    return;
  }

  if (request.url !== "/coach" || request.method !== "POST") {
    sendJson(response, 404, { error: "Use POST /coach or GET /health." });
    return;
  }

  try {
    const payload = JSON.parse((await readBody(request)) || "{}");
    if (payload.mode === "chat" || Array.isArray(payload.messages)) {
      const result = await callGemini(safeChatPrompt(payload), {
        maxOutputTokens: 720,
        temperature: 0.62,
        systemInstruction: "You are a safe Lookism-inspired System Assistant. Stay practical, concise, motivational, and never directly mutate rank, XP, or medical decisions."
      });
      sendJson(response, 200, { ...parseCoachResponse(result.text), model: result.model, source: "local-gemini-proxy" });
      return;
    }
    const result = await callGemini(safePrompt(payload));
    sendJson(response, 200, { text: result.text, model: result.model, source: "local-gemini-proxy" });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Gemini local proxy listening on http://127.0.0.1:${PORT}`);
});
