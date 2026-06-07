import type { ReactNode } from "react";
import type { KeyboardTypeOptions } from "react-native";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

export const mobileColors = {
  bg: "#030304",
  panel: "rgba(7, 7, 8, 0.86)",
  panelStrong: "rgba(9, 11, 16, 0.96)",
  border: "rgba(255, 255, 255, 0.14)",
  borderStrong: "rgba(255, 255, 255, 0.25)",
  text: "#f6f6f7",
  muted: "rgba(246, 246, 247, 0.66)",
  dim: "rgba(246, 246, 247, 0.38)",
  blue: "#2368ff",
  red: "#ff333d",
  green: "#19c566",
  purple: "#8d4dff",
  gold: "#f0a42f"
};

export const toneColors = {
  blue: mobileColors.blue,
  red: mobileColors.red,
  green: mobileColors.green,
  purple: mobileColors.purple,
  gold: mobileColors.gold,
  neutral: mobileColors.borderStrong
};

type Tone = keyof typeof toneColors;

export function SystemScroll({ children }: { children: ReactNode }) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, backgroundColor: mobileColors.bg }}
      contentContainerStyle={{ padding: 18, gap: 14, paddingBottom: 128 }}
    >
      {children}
    </ScrollView>
  );
}

export function Panel({ title, tone = "neutral", children }: { title: string; tone?: Tone; children: ReactNode }) {
  const color = toneColors[tone];
  return (
    <View
      style={{
        borderColor: color,
        borderWidth: 1,
        backgroundColor: mobileColors.panel,
        padding: 16,
        gap: 12,
        borderRadius: 2,
        borderCurve: "continuous"
      }}
    >
      <Text selectable style={{ color: mobileColors.dim, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontFamily: "monospace" }}>{title}</Text>
      {children}
    </View>
  );
}

export function DisplayText({ children, color = mobileColors.text, size = 44 }: { children: ReactNode; color?: string; size?: number }) {
  return (
    <Text selectable style={{ color, fontSize: size, letterSpacing: 8, lineHeight: size + 6, textTransform: "uppercase", fontWeight: "300", fontFamily: "monospace" }}>
      {children}
    </Text>
  );
}

export function BodyText({ children, muted = false, tone }: { children: ReactNode; muted?: boolean; tone?: Tone }) {
  return (
    <Text selectable style={{ color: tone ? toneColors[tone] : muted ? mobileColors.muted : mobileColors.text, fontSize: 15, lineHeight: 24 }}>
      {children}
    </Text>
  );
}

export function SystemButton({ children, onPress, tone = "blue", disabled = false }: { children: ReactNode; onPress?: () => void; tone?: Tone; disabled?: boolean }) {
  const color = toneColors[tone];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      hitSlop={8}
      style={({ pressed }) => ({
        borderColor: color,
        borderWidth: 1,
        backgroundColor: pressed ? `${color}2b` : "rgba(255,255,255,0.035)",
        padding: 16,
        minHeight: 54,
        justifyContent: "center",
        opacity: disabled ? 0.45 : 1
      })}
    >
      <Text style={{ color, textAlign: "center", letterSpacing: 3, textTransform: "uppercase", fontFamily: "monospace", fontSize: 13 }}>
        {children}
      </Text>
    </Pressable>
  );
}

export function Field({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  multiline = false,
  secureTextEntry = false,
  error
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  secureTextEntry?: boolean;
  error?: string;
}) {
  return (
    <View style={{ gap: 7 }}>
      <Text selectable style={{ color: mobileColors.dim, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", fontFamily: "monospace" }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={mobileColors.dim}
        keyboardType={keyboardType}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        style={{
          color: mobileColors.text,
          borderColor: error ? mobileColors.red : mobileColors.border,
          borderWidth: 1,
          padding: 12,
          minHeight: multiline ? 88 : 48,
          backgroundColor: "rgba(0,0,0,0.32)",
          textAlignVertical: multiline ? "top" : "center",
          fontSize: 15
        }}
      />
      {error ? <BodyText tone="red">{error}</BodyText> : null}
    </View>
  );
}

export function StatMeter({ label, value, color = mobileColors.blue }: { label: string; value: number; color?: string }) {
  const safeValue = Math.max(0, Math.min(100, Math.round(value || 0)));
  return (
    <View style={{ borderColor: `${color}99`, borderWidth: 1, padding: 12, gap: 8, backgroundColor: `${color}12` }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 12 }}>
        <Text selectable style={{ color, letterSpacing: 3, textTransform: "uppercase", fontFamily: "monospace" }}>{label}</Text>
        <Text selectable style={{ color, fontVariant: ["tabular-nums"], fontSize: 18, fontWeight: "700" }}>{safeValue}</Text>
      </View>
      <View style={{ height: 6, backgroundColor: "rgba(255,255,255,0.09)" }}>
        <View style={{ height: 6, width: `${safeValue}%`, backgroundColor: color }} />
      </View>
    </View>
  );
}

export function Chip({ children, tone = "neutral" }: { children: ReactNode; tone?: Tone }) {
  const color = toneColors[tone];
  return (
    <View style={{ borderColor: color, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, alignSelf: "flex-start", backgroundColor: `${color}18` }}>
      <Text selectable style={{ color, letterSpacing: 2, textTransform: "uppercase", fontFamily: "monospace", fontSize: 11 }}>{children}</Text>
    </View>
  );
}

export function Divider() {
  return <View style={{ height: 1, backgroundColor: mobileColors.border }} />;
}
