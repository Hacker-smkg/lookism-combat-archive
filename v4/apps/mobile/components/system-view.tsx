import type { ReactNode } from "react";
import { ScrollView, Text, View } from "react-native";

export const mobileColors = {
  bg: "#030507",
  panel: "rgba(12, 18, 31, 0.92)",
  border: "rgba(148, 163, 184, 0.28)",
  text: "#f8fafc",
  muted: "#94a3b8",
  blue: "#3478ff",
  red: "#ff4545",
  green: "#6ee787",
  purple: "#a855f7"
};

export function SystemScroll({ children }: { children: ReactNode }) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1, backgroundColor: mobileColors.bg }}
      contentContainerStyle={{ padding: 18, gap: 14 }}
    >
      {children}
    </ScrollView>
  );
}

export function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={{ borderColor: mobileColors.border, borderWidth: 1, backgroundColor: mobileColors.panel, padding: 16, gap: 10, borderRadius: 12, borderCurve: "continuous" }}>
      <Text selectable style={{ color: mobileColors.muted, fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>{title}</Text>
      {children}
    </View>
  );
}

export function DisplayText({ children, color = mobileColors.text }: { children: ReactNode; color?: string }) {
  return <Text selectable style={{ color, fontSize: 38, letterSpacing: 8, textTransform: "uppercase", fontWeight: "300" }}>{children}</Text>;
}

export function BodyText({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return <Text selectable style={{ color: muted ? mobileColors.muted : mobileColors.text, fontSize: 15, lineHeight: 24 }}>{children}</Text>;
}
