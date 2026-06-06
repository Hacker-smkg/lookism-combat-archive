import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { BodyText, DisplayText, Panel, SystemScroll, mobileColors } from "../components/system-view";

export default function LoginScreen() {
  return (
    <SystemScroll>
      <Panel title="Lookism V4">
        <DisplayText>Selected</DisplayText>
        <BodyText muted>Continue as guest for device-only progress, or sign in later for Supabase cloud sync.</BodyText>
        <Link href="/awakening" asChild>
          <Pressable style={{ borderColor: mobileColors.blue, borderWidth: 1, padding: 14, marginTop: 8 }}>
            <Text selectable style={{ color: mobileColors.text, textAlign: "center", letterSpacing: 2 }}>CONTINUE</Text>
          </Pressable>
        </Link>
      </Panel>
    </SystemScroll>
  );
}
