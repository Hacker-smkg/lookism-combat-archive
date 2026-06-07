import { useRouter } from "expo-router";
import { BodyText, Chip, DisplayText, Panel, SystemButton, SystemScroll } from "../components/system-view";
import { useMobileSystemStore } from "../lib/mobile-store";

export default function AwakeningScreen() {
  const router = useRouter();
  const { acceptAwakening, cloudStatus, guestMode } = useMobileSystemStore((state) => state);

  function accept() {
    acceptAwakening();
    router.push("/diagnosis");
  }

  return (
    <SystemScroll>
      <Panel title="System Awakening" tone="purple">
        <DisplayText size={38}>Accept?</DisplayText>
        <BodyText>The System has selected you. Your rank will rise only through XP, clean quests, diagnosis benchmarks, and safe progressive training.</BodyText>
        <Chip tone={guestMode ? "red" : "green"}>{guestMode ? "Guest · Device Only" : cloudStatus}</Chip>
      </Panel>

      <Panel title="Safety Contract" tone="red">
        <BodyText muted>Lookism ranks, UI, Path, and mastery labels are fictional motivation. Pain, dizziness, injury limits, and medical concerns override every quest.</BodyText>
        <BodyText muted>Penalty mode is recovery debt only: mobility, sleep, and easier work. No harmful punishment loops.</BodyText>
      </Panel>

      <Panel title="Initial Directives" tone="blue">
        <BodyText>1. Run diagnosis with your real data.</BodyText>
        <BodyText>2. Apply the journey.</BodyText>
        <BodyText>3. Clear today’s quests without breaking form.</BodyText>
        <SystemButton tone="purple" onPress={accept}>Accept System</SystemButton>
      </Panel>
    </SystemScroll>
  );
}
