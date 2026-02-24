import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="pb-24 sm:pb-0">
      <section className="relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-taisi-red/5 blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:pt-32 relative">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-taisi-red" />
            <span className="font-mono text-xs tracking-widest uppercase text-taisi-red">
              About
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight">
            About TAISI
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Toronto AI Safety Initiative is a student group at the University of
            Toronto focused on mitigating catastrophic risks from advanced AI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-16">
          <div>
            <h2 className="font-serif text-2xl mb-6">What we do</h2>
            <p className="text-muted-foreground leading-relaxed">
              We run programs that help technical students break into AI safety
              research. Our current focus is the{" "}
              <a
                href="/program"
                className="text-taisi-blue hover:underline"
              >
                Summer 2026 Intensive
              </a>{" "}
              — a free, selective weekend program where participants build real
              research skills and portfolio pieces.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We&apos;ve also run introductory fellowships in both technical AI
              safety and AI governance at the University of Toronto.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-6">Our network</h2>
            <p className="text-muted-foreground leading-relaxed">
              TAISI is funded by Kairos, which supports AI safety groups at
              leading universities including Oxford, Harvard, MIT, and Cornell.
              Our programs are hosted at Trajectory Labs, a dedicated AI
              safety research hub in Toronto.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-6">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions? Reach us at{" "}
              <a
                href="mailto:hello@taisi.ca"
                className="text-taisi-blue hover:underline"
              >
                hello@taisi.ca
              </a>
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-taisi-dark text-white p-10 md:p-12">
            <div className="absolute bottom-[-50%] left-[-30%] w-[400px] h-[400px] rounded-full bg-taisi-blue/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-serif text-2xl md:text-3xl mb-3">
                Applications are open
              </h2>
              <p className="text-sm text-white/60 mb-6">
                Summer 2026 Intensive. Limited spots. Closes April 5th.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-taisi-red hover:bg-taisi-red/90 text-white rounded-full px-8"
              >
                <a href="/#apply">Apply Now →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-6 py-8 text-center text-xs text-muted-foreground">
        © 2026 Toronto AI Safety Initiative
      </footer>
    </main>
  );
}
