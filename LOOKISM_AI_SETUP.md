# Lookism Gemini AI Setup

The app works without Gemini through the offline System Diagnosis. Gemini is optional for a richer coaching paragraph.

## Safe Setup

1. Rotate any API key that was pasted into chat or a public place.
2. Create a fresh Google AI Studio key with the narrowest restrictions available for your project.
3. Put the fresh key in `.env.local`:

```bash
GEMINI_API_KEY=your_fresh_restricted_key
GEMINI_MODEL=gemini-1.5-flash
GEMINI_PROXY_PORT=8787
```

4. Start the proxy from this project folder:

```bash
rtk node gemini-local-proxy.js
```

5. In the app Profile page, keep Proxy Endpoint as:

```text
http://127.0.0.1:8787/coach
```

## Why Proxy

Browser API keys are visible to users and browser tools. The local proxy keeps the key outside `lookism-combat-archive.js`, outside `localStorage`, and outside the static HTML bundle.

## Vercel Deployment

The deployed app uses `/api/coach`, which reads `GEMINI_API_KEY` from Vercel environment variables. Add a fresh rotated key in the Vercel project settings:

```text
GEMINI_API_KEY=your_fresh_restricted_key
GEMINI_MODEL=gemini-1.5-flash
```

Do not paste a key into the browser field for production use.

## Health Check

```bash
rtk curl http://127.0.0.1:8787/health
```

Expected shape:

```json
{"ok":true,"model":"gemini-1.5-flash","hasKey":true}
```
