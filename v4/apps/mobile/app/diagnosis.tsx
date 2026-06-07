import { profileInputSchema } from "@lookism/data";
import { useRouter } from "expo-router";
import { useState } from "react";
import { BodyText, Chip, DisplayText, Field, Panel, StatMeter, SystemButton, SystemScroll, mobileColors } from "../components/system-view";
import { useMobileSystemStore } from "../lib/mobile-store";

type Draft = Record<string, string>;

const physicalFields = [
  ["age", "Age"],
  ["heightCm", "Height (cm)"],
  ["weightKg", "Weight (kg)"],
  ["bodyFatPct", "Body Fat %"],
  ["trainingAgeMonths", "Training Age (months)"],
  ["daysPerWeek", "Days / week"],
  ["sessionMinutes", "Session minutes"]
] as const;

const strengthFields = [
  ["benchKg", "Bench Press (kg)"],
  ["squatKg", "Back Squat (kg)"],
  ["deadliftKg", "Deadlift (kg)"],
  ["overheadPressKg", "Overhead Press (kg)"],
  ["maxPullups", "Max Pull-ups"],
  ["maxPushups", "Max Push-ups"],
  ["plankSeconds", "Plank (sec)"],
  ["mileMinutes", "Mile Time (min)"],
  ["fiveKMinutes", "5K Time (min)"]
] as const;

const textFields = [
  ["goal", "Goal"],
  ["equipment", "Equipment"],
  ["injuryLimits", "Injury Limits"],
  ["martialExperience", "Martial-Art Experience"]
] as const;

function initialDraft(profile: Record<string, unknown>): Draft {
  const keys = [...physicalFields, ...strengthFields, ...textFields].map(([key]) => key);
  return keys.reduce<Draft>((acc, key) => {
    const value = profile[key];
    acc[key] = value === undefined || value === null ? "" : String(value);
    return acc;
  }, {});
}

export default function DiagnosisScreen() {
  const router = useRouter();
  const { profile, analysis, runDiagnosis } = useMobileSystemStore((state) => state);
  const [draft, setDraft] = useState<Draft>(() => initialDraft(profile as Record<string, unknown>));
  const [errors, setErrors] = useState<Record<string, string>>({});

  function setValue(key: string, value: string) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function submit() {
    const parsed = profileInputSchema.safeParse(draft);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      Object.entries(parsed.error.flatten().fieldErrors).forEach(([key, value]) => {
        if (value?.[0]) nextErrors[key] = value[0];
      });
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    runDiagnosis(parsed.data);
    router.replace("/system");
  }

  return (
    <SystemScroll>
      <Panel title="System Diagnosis" tone="blue">
        <DisplayText size={38}>Scan</DisplayText>
        <BodyText muted>Enter honest numbers. The offline engine classifies your starting category, blockers, mastery priority, fighter type, and recommended training route.</BodyText>
        {analysis ? <Chip tone="gold">{analysis.currentCategory} · {analysis.overall}/100</Chip> : null}
      </Panel>

      <Panel title="Physical Details" tone="purple">
        {physicalFields.map(([key, label]) => (
          <Field key={key} label={label} value={draft[key]} onChangeText={(value) => setValue(key, value)} keyboardType="numeric" error={errors[key]} />
        ))}
      </Panel>

      <Panel title="Strength PRs + Benchmarks" tone="red">
        {strengthFields.map(([key, label]) => (
          <Field key={key} label={label} value={draft[key]} onChangeText={(value) => setValue(key, value)} keyboardType="numeric" error={errors[key]} />
        ))}
      </Panel>

      <Panel title="Goal + Limits" tone="green">
        {textFields.map(([key, label]) => (
          <Field key={key} label={label} value={draft[key]} onChangeText={(value) => setValue(key, value)} multiline={key === "injuryLimits" || key === "martialExperience"} error={errors[key]} />
        ))}
        <SystemButton tone="blue" onPress={submit}>Run Diagnosis</SystemButton>
      </Panel>

      {analysis ? (
        <Panel title="Latest Result" tone="gold">
          <DisplayText color={mobileColors.gold} size={30}>{analysis.currentCategory}</DisplayText>
          <BodyText muted>Next climb: {analysis.nextCategory}</BodyText>
          {Object.entries(analysis.stats).map(([key, value]) => <StatMeter key={key} label={key} value={value} color={mobileColors.gold} />)}
        </Panel>
      ) : null}
    </SystemScroll>
  );
}
