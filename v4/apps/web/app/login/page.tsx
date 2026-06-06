"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SystemPanel } from "../../components/system-panel";
import { useSystemStore } from "../../lib/system-store";

export default function LoginPage() {
  const router = useRouter();
  const continueAsGuest = useSystemStore((state) => state.continueAsGuest);
  const importV3 = useSystemStore((state) => state.importV3);
  const v3Imported = useSystemStore((state) => state.v3Imported);
  const enterGuestMode = () => {
    continueAsGuest();
    router.push("/awakening");
  };

  return (
    <main className="page hero">
      <section>
        <h1 className="headline">System Selected You</h1>
        <p className="subhead">
          V4 starts with a cleaner route: login or guest, awakening, diagnosis, dashboard, training, reports, and profile.
          Guest mode stays local. Cloud sync uses the existing Supabase tables only after sign-in and confirmation.
        </p>
        <div className="actions">
          <button className="action" onClick={enterGuestMode}>Continue as Guest</button>
          <button className="ghost-action" onClick={importV3}>{v3Imported ? "V3 Imported" : "Import V3 Local Save"}</button>
          <Link className="ghost-action" href="/awakening">Enter Awakening</Link>
        </div>
      </section>
      <SystemPanel title="Cloud Save / 저장" tone="blue">
        <div className="metric">V4</div>
        <p className="muted">Supabase remains the single backend. No Cloudflare, R2, or extra database is required for this MVP.</p>
        <p>Login UI and Supabase auth wiring are staged here; the full auth session UX is implemented through the shared data adapters.</p>
      </SystemPanel>
    </main>
  );
}
