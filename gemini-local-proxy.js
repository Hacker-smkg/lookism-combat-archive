const fs = require("fs");
const http = require("http");
const path = require("path");

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const PORT = Number(process.env.GEMINI_PROXY_PORT || 8787);
const MAX_BODY_BYTES = 1024 * 1024;

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

async function callGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not configured.");
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
    const text = await callGemini(safePrompt(payload));
    sendJson(response, 200, { text, model: MODEL, source: "local-gemini-proxy" });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Gemini local proxy listening on http://127.0.0.1:${PORT}`);
});
