import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { BodyText, DisplayText, Panel, SystemScroll, mobileColors } from "../components/system-view";
import { useMobileSystemStore } from "../lib/mobile-store";

export default function DiagnosisScreen() {
  const runDiagnosis = useMobileSystemStore((state) => state.runDiagnosis);
  const analysis = useMobileSystemStore((state) => state.analysis);
  return (
    <SystemScroll>
      <Panel title="Diagnosis MVP">
        <DisplayText>Scan</DisplayText>
        <BodyText muted>Expo MVP uses a fast starter diagnosis. Full multi-field form comes next using the shared Zod schema.</BodyText>
        <Pressable onPress={() => runDiagnosis({ age: 25, heightCm: 175, weightKg: 90, daysPerWeek: 3, maxPushups: 20, mileMinutes: 12 })} style={{ borderColor: mobileColors.blue, borderWidth: 1, padding: 14 }}>
          <Text selectable style={{ color: mobileColors.text, textAlign: "center", letterSpacing: 2 }}>RUN STARTER DIAGNOSIS</Text>
        </Pressable>
        {analysis ? <BodyText>{analysis.currentCategory} → {analysis.nextCategory} · {analysis.overall}/100</BodyText> : null}
        <Link href="/system" asChild>
          <Pressable style={{ borderColor: mobileColors.border, borderWidth: 1, padding: 14 }}>
            <Text selectable style={{ color: mobileColors.text, textAlign: "center", letterSpacing: 2 }}>OPEN DASHBOARD</Text>
          </Pressable>
        </Link>
      </Panel>
    </SystemScroll>
  );
}
