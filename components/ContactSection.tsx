import Section from "./Section";
import { profile } from "@/lib/resume";

export default function ContactSection() {
  return (
    <Section id="contact" eyebrow="07 — contact" title="Get in touch">
      <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-elev)]/60 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-lg text-[color:var(--color-fg)]">
            Open to research collaborations, internships, and roles in ML / distributed systems.
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)] mono">
            best reached over email — i reply within a day or two.
          </p>
        </div>
        <div className="flex flex-col gap-2 mono text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[color:var(--color-accent)] text-[color:var(--color-bg)] hover:opacity-90 transition-opacity"
          >
            ↳ {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            ☎ {profile.phone}
          </a>
        </div>
      </div>
    </Section>
  );
}
