import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { BodyText, DisplayText, Panel, SystemScroll, mobileColors } from "../../components/system-view";
import { useMobileSystemStore } from "../../lib/mobile-store";

export default function ProfileTab() {
  const { profile, analysis, progress } = useMobileSystemStore((state) => state);
  return (
    <SystemScroll>
      <Panel title="Profile">
        <DisplayText>File</DisplayText>
        <BodyText muted>Guest state is stored locally with Expo SQLite localStorage polyfill. Secure session values use SecureStore in the auth adapter phase.</BodyText>
        <BodyText>Lv {progress.level} · {analysis?.currentCategory ?? "No diagnosis"}</BodyText>
        <BodyText muted>{JSON.stringify(profile)}</BodyText>
        <Link href="/chat" asChild>
          <Pressable style={{ borderColor: mobileColors.purple, borderWidth: 1, padding: 14 }}>
            <Text selectable style={{ color: mobileColors.text, textAlign: "center" }}>OPEN SYSTEM ASSISTANT</Text>
          </Pressable>
        </Link>
      </Panel>
    </SystemScroll>
  );
}
