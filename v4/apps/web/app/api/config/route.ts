import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    supabaseUrl: process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    hasGemini: Boolean(process.env.GEMINI_API_KEY),
    source: "v4-next-runtime-config"
  }, {
    headers: { "Cache-Control": "no-store" }
  });
}
