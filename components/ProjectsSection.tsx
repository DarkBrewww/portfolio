import Section from "./Section";
import { projects } from "@/lib/resume";

export default function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="04 — projects" title="Selected Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-elev)]/60 p-6 hover:border-[color:var(--color-accent)]/40 transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-semibold text-[color:var(--color-fg)] group-hover:text-[color:var(--color-accent)] transition-colors">
                {p.title}
              </h3>
              <span className="mono text-[11px] text-[color:var(--color-muted)] whitespace-nowrap">
                {p.period}
              </span>
            </div>
            <p className="text-sm text-[color:var(--color-muted)] italic">{p.subtitle}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-[color:var(--color-fg)]/90 flex-1">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[color:var(--color-accent)] mt-1.5 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="mono text-[11px] px-2 py-0.5 rounded bg-[color:var(--color-accent-soft)]/40 text-[color:var(--color-accent)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
