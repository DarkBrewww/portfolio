import Link from "next/link";
import { profile } from "@/lib/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="mono text-sm text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)] transition-colors">
          <span className="text-[color:var(--color-accent)]">~/</span>
          {profile.name.toLowerCase().replace(" ", "-")}
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-[color:var(--color-muted)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[color:var(--color-fg)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center mono text-xs px-3 py-1.5 rounded-md border border-[color:var(--color-accent)]/30 text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/10 transition-colors"
        >
          get in touch →
        </a>
      </div>
    </header>
  );
}
