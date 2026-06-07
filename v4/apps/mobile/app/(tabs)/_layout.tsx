import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#030304" },
        headerTintColor: "#f6f6f7",
        headerTitleStyle: { fontFamily: "monospace" },
        tabBarStyle: { backgroundColor: "#030304", borderTopColor: "rgba(255,255,255,0.14)" },
        tabBarActiveTintColor: "#2368ff",
        tabBarInactiveTintColor: "rgba(246,246,247,0.45)",
        tabBarLabelStyle: { letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "monospace", fontSize: 10 }
      }}
    >
      <Tabs.Screen name="system" options={{ title: "System" }} />
      <Tabs.Screen name="train" options={{ title: "Train" }} />
      <Tabs.Screen name="reports" options={{ title: "Reports" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
