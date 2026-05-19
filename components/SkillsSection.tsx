import Section from "./Section";
import { skills } from "@/lib/resume";

export default function SkillsSection() {
  return (
    <Section id="skills" eyebrow="06 — skills" title="Toolbelt">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div
            key={g.label}
            className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-elev)]/40 p-5"
          >
            <p className="mono text-xs text-[color:var(--color-accent)] mb-3">
              {g.label.toLowerCase()}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded border border-[color:var(--color-border)] text-[color:var(--color-fg)]/90 hover:border-[color:var(--color-accent)]/40 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
