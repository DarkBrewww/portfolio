import Section from "./Section";
import { education } from "@/lib/resume";

export default function EducationSection() {
  return (
    <Section id="education" eyebrow="02 — education" title="Education">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <article
            key={e.school}
            className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-elev)]/60 p-6 hover:border-[color:var(--color-accent)]/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-[color:var(--color-fg)]">{e.school}</h3>
                <p className="text-sm text-[color:var(--color-muted)] mt-0.5">{e.location}</p>
              </div>
              <span className="mono text-xs text-[color:var(--color-accent)] whitespace-nowrap">
                {e.period}
              </span>
            </div>
            <p className="mt-3 text-sm text-[color:var(--color-fg)]/90">{e.degree}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {e.coursework.map((c) => (
                <span
                  key={c}
                  className="mono text-[11px] px-2 py-0.5 rounded border border-[color:var(--color-border)] text-[color:var(--color-muted)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
