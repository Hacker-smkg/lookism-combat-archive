import type { ReactNode } from "react";

export function SystemPanel({ title, tone = "", children }: { title: string; tone?: "blue" | "red" | "green" | "purple" | ""; children: ReactNode }) {
  return (
    <section className={`panel ${tone}`}>
      <div className="eyebrow">{title}</div>
      {children}
    </section>
  );
}
