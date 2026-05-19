import { profile } from "@/lib/resume";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[color:var(--color-border)]"
    >
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="mono text-sm text-[color:var(--color-accent)] mb-5">
          $ whoami
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-[color:var(--color-fg)]">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[color:var(--color-muted)] max-w-2xl">
          {profile.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-fg)]/80">
          {profile.blurb}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 mono text-sm px-4 py-2 rounded-md bg-[color:var(--color-accent)] text-[color:var(--color-bg)] hover:opacity-90 transition-opacity"
          >
            ↳ {profile.email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mono text-sm px-4 py-2 rounded-md border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            linkedin ↗
          </a>
          <a
            href={profile.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mono text-sm px-4 py-2 rounded-md border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            scholar ↗
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mono text-sm px-4 py-2 rounded-md border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            github ↗
          </a>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 mono text-xs text-[color:var(--color-muted)]">
          <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--color-accent)] animate-pulse" />
          based in {profile.location}
        </div>
      </div>
    </section>
  );
}
