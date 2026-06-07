import "react-native-url-polyfill/auto";

import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseConfigFromEnv, type SupabaseRuntimeConfig } from "@lookism/data";

const secureAuthStorage = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key)
};

let client: SupabaseClient | null = null;

function extraValue(key: string): string | undefined {
  const extra = Constants.expoConfig?.extra as Record<string, unknown> | undefined;
  const value = extra?.[key];
  return typeof value === "string" && value.trim() ? value : undefined;
}

export function getMobileSupabaseConfig(): SupabaseRuntimeConfig | null {
  return getSupabaseConfigFromEnv({
    ...(process.env as Record<string, string | undefined>),
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL ?? extraValue("supabaseUrl"),
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? extraValue("supabaseAnonKey")
  });
}

export function getMobileCoachApiUrl() {
  return process.env.EXPO_PUBLIC_COACH_API_URL ?? extraValue("coachApiUrl") ?? "https://lookism-vercel.vercel.app/api/coach";
}

export function getMobileSupabaseClient(): SupabaseClient | null {
  const config = getMobileSupabaseConfig();
  if (!config) return null;
  if (!client) {
    client = createClient(config.url, config.anonKey, {
      auth: {
        storage: secureAuthStorage,
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false
      }
    });
  }
  return client;
}

export function cloudConfigMessage() {
  return getMobileSupabaseConfig()
    ? "Supabase cloud sync is configured."
    : "Set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY before building the APK for cloud login.";
}
