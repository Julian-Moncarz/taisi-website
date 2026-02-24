import { Button } from "@/components/ui/button";

export default function Program() {
  return (
    <main className="pb-24 sm:pb-0">
      <section className="relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-taisi-blue/5 blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:pt-32 relative">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-taisi-blue" />
            <span className="font-mono text-xs tracking-widest uppercase text-taisi-blue">
              Summer 2026
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight">
            Summer Intensive
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            4 weekends. Real AI safety research skills. Portfolio pieces you can
            show employers and grad programs. Free.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-16">
          <div>
            <h2 className="font-serif text-2xl mb-6">Program structure</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              One full day per weekend for four consecutive weeks. Each day:
            </p>
            <div className="space-y-6 border-l-2 border-taisi-blue/20 pl-8">
              {[
                {
                  time: "Morning",
                  desc: "AI safety fundamentals — threat models, alignment approaches, governance. You'll understand the field and why it matters.",
                },
                {
                  time: "Lunch",
                  desc: "Catered. AI safety researchers join to share their work, answer questions, and connect with participants.",
                },
                {
                  time: "Afternoon",
                  desc: "Hands-on technical workshops. Build AI evaluations, analyze research directions, learn tools used in real AIS research. Every session produces an artifact you keep.",
                },
              ].map((item) => (
                <div key={item.time}>
                  <span className="font-mono text-xs text-taisi-blue tracking-wider uppercase">
                    {item.time}
                  </span>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-6">
              What you might work on
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Topics may include: building AI evaluations with Inspect,
              analyzing whether a research direction is impactful, understanding
              alignment approaches, and producing write-ups that demonstrate
              research competence. The curriculum gives you skills
              immediately legible to AIS research organizations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-6">Who it&apos;s for</h2>
            <p className="text-muted-foreground leading-relaxed">
              Technical undergrads in the Toronto area. CS, math, stats, econ,
              engineering — any quantitative background. You don&apos;t
              need to know what AI safety is yet. If you can code, you&apos;re
              ready.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-6">Logistics</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "When", value: "Summer 2026, one weekend day per week for 4 weeks" },
                { label: "Where", value: "Trajectory Labs — AI safety research hub, Toronto" },
                { label: "Cost", value: "Free. Food and API credits covered." },
                { label: "Commitment", value: "4 full days. Designed for students with internships." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border bg-card p-5">
                  <span className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                    {item.label}
                  </span>
                  <p className="text-sm font-medium mt-2">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-taisi-dark text-white p-10 md:p-12">
            <div className="absolute top-[-50%] right-[-30%] w-[400px] h-[400px] rounded-full bg-taisi-red/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-serif text-2xl md:text-3xl mb-3">
                Ready to apply?
              </h2>
              <p className="text-sm text-white/60 mb-6">
                Limited spots. Applications close April 5th.
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
