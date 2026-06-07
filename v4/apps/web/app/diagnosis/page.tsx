"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileInputSchema, type ProfileInputModel } from "@lookism/data";
import { SystemPanel } from "../../components/system-panel";
import { useSystemStore } from "../../lib/system-store";

export default function DiagnosisPage() {
  const runDiagnosis = useSystemStore((state) => state.runDiagnosis);
  const analysis = useSystemStore((state) => state.analysis);
  const form = useForm<ProfileInputModel>({
    resolver: zodResolver(profileInputSchema as never),
    defaultValues: { daysPerWeek: 3, sessionMinutes: 45, goal: "general" }
  });

  return (
    <main className="page">
      <SystemPanel title="Diagnosis Wizard / 진단" tone="blue">
        <form onSubmit={form.handleSubmit((values) => runDiagnosis(values))}>
          <div className="form-grid">
            {[
              ["age", "Age"],
              ["heightCm", "Height (cm)"],
              ["weightKg", "Weight (kg)"],
              ["bodyFatPct", "Body fat %"],
              ["trainingAgeMonths", "Training age months"],
              ["daysPerWeek", "Days / week"],
              ["sessionMinutes", "Session minutes"],
              ["benchKg", "Bench kg"],
              ["squatKg", "Squat kg"],
              ["deadliftKg", "Deadlift kg"],
              ["maxPullups", "Max pull-ups"],
              ["maxPushups", "Max push-ups"],
              ["plankSeconds", "Plank seconds"],
              ["mileMinutes", "Mile minutes"],
              ["fiveKMinutes", "5K minutes"]
            ].map(([key, label]) => (
              <div className="field" key={key}>
                <label htmlFor={key}>{label}</label>
                <input id={key} type="number" step="any" {...form.register(key as keyof ProfileInputModel)} />
              </div>
            ))}
            <div className="field">
              <label htmlFor="goal">Goal</label>
              <input id="goal" {...form.register("goal")} />
            </div>
            <div className="field">
              <label htmlFor="equipment">Equipment</label>
              <input id="equipment" {...form.register("equipment")} />
            </div>
            <div className="field">
              <label htmlFor="injuryLimits">Injury limits</label>
              <input id="injuryLimits" {...form.register("injuryLimits")} />
            </div>
          </div>
          <div className="actions">
            <button className="action" type="submit">Analyze Offline</button>
            <Link className="ghost-action" href="/system">Open Dashboard</Link>
          </div>
        </form>
      </SystemPanel>
      {analysis ? (
        <section className="panel green" style={{ marginTop: "1rem" }}>
          <div className="eyebrow">Result</div>
          <h2>{analysis.currentCategory} → {analysis.nextCategory}</h2>
          <p className="muted">Score {analysis.overall}/100 · {analysis.recommendedMastery} · {analysis.recommendedFighterType} · {analysis.recommendedArt}</p>
          <p>{analysis.blockers.join(" · ")}</p>
        </section>
      ) : null}
    </main>
  );
}
