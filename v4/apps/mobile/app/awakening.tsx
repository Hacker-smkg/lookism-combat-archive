import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { BodyText, DisplayText, Panel, SystemScroll, mobileColors } from "../components/system-view";
import { useMobileSystemStore } from "../lib/mobile-store";

export default function AwakeningScreen() {
  const accept = useMobileSystemStore((state) => state.acceptAwakening);
  return (
    <SystemScroll>
      <Panel title="System Awakening">
        <DisplayText>Accept?</DisplayText>
        <BodyText muted>Progressive training only. Ranks are fictional motivation; promotion follows XP, quests, stats, and boss tests.</BodyText>
        <Link href="/diagnosis" asChild>
          <Pressable onPress={accept} style={{ borderColor: mobileColors.purple, borderWidth: 1, padding: 14 }}>
            <Text selectable style={{ color: mobileColors.text, textAlign: "center", letterSpacing: 2 }}>ACCEPT SYSTEM</Text>
          </Pressable>
        </Link>
      </Panel>
    </SystemScroll>
  );
}
