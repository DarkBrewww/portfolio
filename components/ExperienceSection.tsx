import Section from "./Section";
import { experience } from "@/lib/resume";

export default function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="03 — experience" title="Experience">
      <ol className="relative border-l border-[color:var(--color-border)] ml-2 space-y-10">
        {experience.map((x) => (
          <li key={x.company} className="pl-6 relative">
            <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-[color:var(--color-accent)] ring-4 ring-[color:var(--color-bg)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[color:var(--color-fg)]">
                {x.role}{" "}
                <span className="text-[color:var(--color-muted)] font-normal">
                  @ {x.company}
                </span>
              </h3>
              <span className="mono text-xs text-[color:var(--color-accent)]">{x.period}</span>
            </div>
            <p className="text-sm text-[color:var(--color-muted)] mt-0.5">{x.location}</p>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-fg)]/90">
              {x.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[color:var(--color-accent)] mt-1.5 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
