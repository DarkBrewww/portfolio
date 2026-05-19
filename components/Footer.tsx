import { profile } from "@/lib/resume";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-[color:var(--color-muted)]">
        <p className="mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="mono">
          built with <span className="text-[color:var(--color-accent)]">next.js</span> &middot;{" "}
          <span className="text-[color:var(--color-accent)]">tailwind</span>
        </p>
      </div>
    </footer>
  );
}
