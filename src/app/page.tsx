import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
      {/* Hero */}
      <h1 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight max-w-3xl">
        A student group at the University of Toronto focused on mitigating
        catastrophic risks from advanced AI.
      </h1>

      {/* Why we exist */}
      <p className="mt-8 text-muted-foreground leading-relaxed max-w-3xl">
        AI systems are getting more capable fast. Making sure they&apos;re safe
        and aligned with human values is urgent — and brutally
        talent-constrained. We run programs to help talented UofT students
        build skills and have impact in AI safety research.
      </p>

      {/* Programs */}
      <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 rounded-xl overflow-hidden border">
        <Link href="/program" className="bg-card p-6 hover:bg-card/80 transition-colors group">
          <h3 className="text-sm font-semibold mb-1 group-hover:text-taisi-red transition-colors">
            Summer Intensive
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Free, selective weekend program. Research skills, portfolio pieces,
            researcher access.
          </p>
          <span className="text-xs text-taisi-red mt-2 inline-block">
            Learn more &rarr;
          </span>
        </Link>
        <Link href="/program#fellowships" className="bg-card p-6 hover:bg-card/80 transition-colors group">
          <h3 className="text-sm font-semibold mb-1 group-hover:text-taisi-blue transition-colors">
            Intro Fellowships
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            8-week reading groups in alignment and governance during the school
            year.
          </p>
          <span className="text-xs text-taisi-blue mt-2 inline-block">
            Learn more &rarr;
          </span>
        </Link>
      </div>

      {/* Network + Contact */}
      <div className="mt-10 text-sm text-muted-foreground leading-relaxed space-y-3">
        <p>
          Funded by Kairos, which backs AI safety groups at Oxford, Harvard, MIT,
          and Cornell. Partnered with Trajectory Labs, an AI safety research hub
          in Toronto.
        </p>
        <p>
          <a
            href="mailto:hello@taisi.ca"
            className="text-taisi-blue hover:underline"
          >
            hello@taisi.ca
          </a>
        </p>
      </div>
    </main>
  );
}
