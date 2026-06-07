module.exports = ({ config }) => ({
  ...config,
  extra: {
    ...(config.extra ?? {}),
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL ?? "",
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "",
    coachApiUrl: process.env.EXPO_PUBLIC_COACH_API_URL ?? "https://lookism-vercel.vercel.app/api/coach"
  }
});
