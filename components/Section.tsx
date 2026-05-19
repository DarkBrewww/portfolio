import { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="mono text-xs text-[color:var(--color-accent)]">{eyebrow}</span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--color-fg)]">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[color:var(--color-border)]" />
      </div>
      {children}
    </section>
  );
}
