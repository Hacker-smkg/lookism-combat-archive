"use client";

import Link from "next/link";
import { SystemPanel } from "../../components/system-panel";
import { useSystemStore } from "../../lib/system-store";

export default function AwakeningPage() {
  const accepted = useSystemStore((state) => state.awakeningAccepted);
  const accept = useSystemStore((state) => state.acceptAwakening);

  return (
    <main className="page">
      <SystemPanel title="System Awakening / 각성" tone="purple">
        <h1 className="headline">Do You Accept?</h1>
        <p className="subhead">
          The System rewards realistic training: consistency, recovery, clean technique, and honest logs. Lookism ranks are fictional framing;
          progress is decided by XP, quests, benchmarks, and deterministic promotion rules.
        </p>
        <div className="grid three">
          <div className="panel"><strong>Condition</strong><p className="muted">Train progressively. No harmful punishment loops.</p></div>
          <div className="panel"><strong>Consent</strong><p className="muted">Respect injury limits and seek qualified help when needed.</p></div>
          <div className="panel"><strong>Proof</strong><p className="muted">Only logged quests and boss tests move rank readiness.</p></div>
        </div>
        <div className="actions">
          <Link className="action" href="/diagnosis" onClick={accept}>{accepted ? "Accepted" : "Accept System"}</Link>
          <Link className="ghost-action" href="/diagnosis">Start Diagnosis</Link>
        </div>
      </SystemPanel>
    </main>
  );
}
