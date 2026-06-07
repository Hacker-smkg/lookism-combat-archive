import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useMobileSystemStore } from "../lib/mobile-store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 1000 * 60 * 2 },
    mutations: { retry: 0 }
  }
});

export default function RootLayout() {
  const initializeCloudSession = useMobileSystemStore((state) => state.initializeCloudSession);

  useEffect(() => {
    void initializeCloudSession();
  }, [initializeCloudSession]);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#030304" },
          headerTintColor: "#f6f6f7",
          headerTitleStyle: { fontFamily: "monospace" },
          contentStyle: { backgroundColor: "#030304" }
        }}
      >
        <Stack.Screen name="index" options={{ title: "Lookism System" }} />
        <Stack.Screen name="login" options={{ title: "Login / Guest" }} />
        <Stack.Screen name="awakening" options={{ title: "System Awakening" }} />
        <Stack.Screen name="diagnosis" options={{ title: "Diagnosis" }} />
        <Stack.Screen name="chat" options={{ title: "System Assistant" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="training/[programId]" options={{ title: "Training Detail" }} />
      </Stack>
    </QueryClientProvider>
  );
}
