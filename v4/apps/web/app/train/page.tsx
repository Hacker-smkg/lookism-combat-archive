import Link from "next/link";
import { TRAINING_PROGRAMS } from "@lookism/core";
import { SystemPanel } from "../../components/system-panel";

export default function TrainPage() {
  return (
    <main className="page">
      <SystemPanel title="Training Hub / 훈련" tone="green">
        <h1 className="headline">Train</h1>
        <p className="subhead">Martial arts, mastery fields, and fighter-type routes share one six-level progression model.</p>
        <div className="grid two">
          {TRAINING_PROGRAMS.map((program) => (
            <article className="program" key={program.id}>
              <div>
                <strong>{program.title}</strong>
                <p className="muted">{program.subtitle}</p>
                <small>{program.type.toUpperCase()} · {program.linkedFighters.join(", ")}</small>
              </div>
              <Link className="ghost-action" href={`/train?program=${program.id}`}>Open</Link>
            </article>
          ))}
        </div>
      </SystemPanel>
    </main>
  );
}
