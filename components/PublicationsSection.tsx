import Section from "./Section";
import { publications } from "@/lib/resume";

export default function PublicationsSection() {
  return (
    <Section id="publications" eyebrow="05 — publications" title="Publications">
      <ol className="space-y-5">
        {publications.map((p, i) => (
          <li
            key={i}
            className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-elev)]/40 p-5 hover:border-[color:var(--color-accent)]/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="mono text-xs text-[color:var(--color-accent)] pt-0.5">
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <div className="flex-1">
                <p className="text-[color:var(--color-fg)] leading-snug font-medium">
                  {p.title}
                </p>
                <p className="text-sm text-[color:var(--color-muted)] mt-1">
                  {p.authors} · <span className="mono text-[color:var(--color-accent)]">{p.year}</span>
                </p>
                <p className="text-sm text-[color:var(--color-muted)] italic mt-0.5">
                  {p.venue}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
