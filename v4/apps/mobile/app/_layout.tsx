import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "#030507" }, headerTintColor: "#f8fafc", contentStyle: { backgroundColor: "#030507" } }}>
      <Stack.Screen name="index" options={{ title: "Lookism System" }} />
      <Stack.Screen name="login" options={{ title: "Login / Guest" }} />
      <Stack.Screen name="awakening" options={{ title: "System Awakening" }} />
      <Stack.Screen name="diagnosis" options={{ title: "Diagnosis" }} />
      <Stack.Screen name="chat" options={{ title: "System Assistant" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="training/[programId]" options={{ title: "Training Detail" }} />
    </Stack>
  );
}
