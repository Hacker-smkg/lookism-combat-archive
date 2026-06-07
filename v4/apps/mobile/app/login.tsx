import { useRouter } from "expo-router";
import { useState } from "react";
import { BodyText, Chip, DisplayText, Field, Panel, SystemButton, SystemScroll } from "../components/system-view";
import { useMobileSystemStore } from "../lib/mobile-store";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { cloudStatus, cloudMessage, continueAsGuest, signIn, signUp, analysis, userEmail } = useMobileSystemStore((state) => state);

  const routeAfterAuth = () => {
    const next = useMobileSystemStore.getState().analysis ? "/system" : "/awakening";
    router.replace(next);
  };

  async function handleSignIn() {
    await signIn(email.trim(), password);
    if (useMobileSystemStore.getState().userId) routeAfterAuth();
  }

  async function handleSignUp() {
    await signUp(email.trim(), password);
    if (useMobileSystemStore.getState().userId) routeAfterAuth();
  }

  function handleGuest() {
    continueAsGuest();
    router.push(analysis ? "/system" : "/awakening");
  }

  return (
    <SystemScroll>
      <Panel title="PTJ Universe · 외모지상주의" tone="blue">
        <DisplayText>Selected</DisplayText>
        <BodyText muted>The System can run locally as guest mode, or sync XP, diagnosis, quests, and reports through Supabase cloud login.</BodyText>
        <Chip tone={cloudStatus === "error" ? "red" : userEmail ? "green" : "blue"}>{userEmail ?? cloudStatus}</Chip>
      </Panel>

      <Panel title="Cloud Login" tone="purple">
        <Field label="Email" value={email} onChangeText={setEmail} placeholder="you@example.com" keyboardType="email-address" />
        <Field label="Password" value={password} onChangeText={setPassword} placeholder="8+ characters" secureTextEntry />
        <SystemButton tone="blue" onPress={handleSignIn}>Sign In</SystemButton>
        <SystemButton tone="purple" onPress={handleSignUp}>Create Account</SystemButton>
        <BodyText muted>{cloudMessage}</BodyText>
      </Panel>

      <Panel title="Local Save" tone="red">
        <BodyText muted>Guest progress stays on this device only. You can sign in later and sync the same System state.</BodyText>
        <SystemButton tone="red" onPress={handleGuest}>Continue As Guest</SystemButton>
      </Panel>
    </SystemScroll>
  );
}
