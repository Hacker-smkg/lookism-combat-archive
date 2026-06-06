import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: "#030507" }, headerTintColor: "#f8fafc", tabBarStyle: { backgroundColor: "#030507", borderTopColor: "rgba(148,163,184,0.24)" }, tabBarActiveTintColor: "#3478ff" }}>
      <Tabs.Screen name="system" options={{ title: "System" }} />
      <Tabs.Screen name="train" options={{ title: "Train" }} />
      <Tabs.Screen name="reports" options={{ title: "Reports" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
