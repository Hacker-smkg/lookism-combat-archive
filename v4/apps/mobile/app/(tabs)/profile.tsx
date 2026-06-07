import { Link } from "expo-router";
import { BodyText, Chip, DisplayText, Panel, SystemButton, SystemScroll } from "../../components/system-view";
import { useMobileSystemStore } from "../../lib/mobile-store";

export default function ProfileTab() {
  const {
    profile,
    analysis,
    progress,
    cloudStatus,
    cloudMessage,
    userEmail,
    guestMode,
    syncToCloud,
    restoreCloudState,
    signOut
  } = useMobileSystemStore((state) => state);

  return (
    <SystemScroll>
      <Panel title="Account File" tone="blue">
        <DisplayText size={38}>File</DisplayText>
        <BodyText>Lv {progress.level} · {analysis?.currentCategory ?? "No diagnosis"}</BodyText>
        <Chip tone={cloudStatus === "error" ? "red" : cloudStatus === "signed-in" ? "green" : guestMode ? "red" : "blue"}>{userEmail ?? cloudStatus}</Chip>
        <BodyText muted>{cloudMessage}</BodyText>
      </Panel>

      <Panel title="Cloud Save" tone="purple">
        {userEmail ? (
          <>
            <SystemButton tone="green" onPress={() => void syncToCloud()}>Sync To Cloud</SystemButton>
            <SystemButton tone="blue" onPress={() => void restoreCloudState()}>Restore Cloud Save</SystemButton>
            <SystemButton tone="red" onPress={() => void signOut()}>Sign Out</SystemButton>
          </>
        ) : (
          <>
            <BodyText muted>Sign in to sync progress across devices. Guest mode remains usable without cloud.</BodyText>
            <Link href="/login" asChild>
              <SystemButton tone="blue">Open Login</SystemButton>
            </Link>
          </>
        )}
      </Panel>

      <Panel title="Diagnosis Snapshot" tone="gold">
        <BodyText muted>{JSON.stringify(profile, null, 2)}</BodyText>
        <BodyText>{analysis ? `${analysis.recommendedMastery} · ${analysis.recommendedFighterType} · ${analysis.recommendedArt}` : "Run diagnosis to unlock recommended path."}</BodyText>
        <Link href="/diagnosis" asChild>
          <SystemButton tone="purple">Update Diagnosis</SystemButton>
        </Link>
      </Panel>

      <Panel title="System Assistant" tone="green">
        <BodyText muted>Ask for condition, today’s quest, recovery, diet basics, motivation, or next-rank blockers.</BodyText>
        <Link href="/chat" asChild>
          <SystemButton tone="green">Open Assistant</SystemButton>
        </Link>
      </Panel>
    </SystemScroll>
  );
}
