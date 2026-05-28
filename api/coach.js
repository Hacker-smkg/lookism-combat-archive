const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const MAX_PROMPT_LENGTH = 12000;

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

async function callGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured on the deployment.");
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const geminiResponse = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: "Safe, practical fitness coaching only. Fictional manhwa concepts are motivational labels, not medical, combat, or safety guarantees." }]
      },
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.55,
        maxOutputTokens: 420
      }
    })
  });

  const data = await geminiResponse.json().catch(() => ({}));
  if (!geminiResponse.ok) {
    throw new Error(data.error?.message || `Gemini returned HTTP ${geminiResponse.status}`);
  }

  return data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join(" ").trim() || "Gemini returned no coaching text.";
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
    const text = await callGemini(safePrompt(request.body || {}));
    sendJson(response, 200, { text, model: MODEL, source: "vercel-api-coach" });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
};
