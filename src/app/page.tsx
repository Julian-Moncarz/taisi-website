import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="pb-24 sm:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-taisi-blue/5 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-taisi-red/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-40 md:pb-32">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-taisi-red" />
            <span className="font-mono text-xs tracking-widest uppercase text-taisi-red">
              Applications close April 5th
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-4xl leading-[0.95]">
            Break into AI safety
            <br />
            <span className="text-taisi-blue">research</span> this summer
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A free, selective weekend intensive for Toronto undergrads.
            Build portfolio pieces, learn from researchers, and break into
            one of the fastest-growing fields in AI.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-6">
            <Button
              asChild
              size="lg"
              className="bg-taisi-red hover:bg-taisi-red/90 text-white text-base px-10 py-6 rounded-full"
            >
              <a href="https://airtable.com/appVfG77MoQbG3bgi/pagW6YDWqH4GG76kw/form" target="_blank" rel="noopener noreferrer">Apply Now</a>
            </Button>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span>4 weekends · Free · Limited spots</span>
              <span>Apply early — spots fill as applications are reviewed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* What you get */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-taisi-blue" />
          <span className="font-mono text-xs tracking-widest uppercase text-taisi-blue">
            What you get
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-16 max-w-2xl">
          Four weekends that change your trajectory
        </h2>

        <div className="grid gap-px bg-border sm:grid-cols-2 rounded-2xl overflow-hidden border">
          {[
            {
              title: "Research skills",
              desc: "Hands-on workshops where you build real AI safety evaluations and research artifacts.",
              accent: "taisi-red",
            },
            {
              title: "Portfolio pieces",
              desc: "Walk away with real projects on your GitHub and published write-ups. Tangible, legible proof you can do this work.",
              accent: "taisi-blue",
            },
            {
              title: "Network",
              desc: "AI safety researchers join for lunch every session.",
              accent: "taisi-red",
            },
            {
              title: "A path forward",
              desc: "Strong participants may continue with research mentors for the rest of the summer.",
              accent: "taisi-blue",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card p-8 md:p-10 group hover:bg-taisi-warm/50 transition-colors"
            >
              <div className={`h-1 w-8 bg-${item.accent} mb-6 rounded-full`} />
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-taisi-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-taisi-red" />
            <span className="font-mono text-xs tracking-widest uppercase text-taisi-red">
              How it works
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-16 max-w-2xl">
            One day a week.<br />Four weeks.
          </h2>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Morning",
                desc: "AI safety fundamentals — threat models, alignment, governance. Understand the field.",
              },
              {
                label: "Lunch",
                desc: "Catered. AI safety researchers join to share their work and connect with you.",
              },
              {
                label: "Afternoon",
                desc: "Technical workshops — build evaluations, learn tools, produce artifacts you keep.",
              },
              {
                label: "Done",
                desc: "Go home with new skills and something to show for it. Repeat next weekend.",
              },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-lg font-semibold mb-3">
                  {item.label}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div>
              <span className="text-white/40 block mb-1">Where</span>
              <span>Trajectory Labs, Toronto</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">Cost</span>
              <span>Free — food &amp; API credits included</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">When</span>
              <span>Summer 2026, weekends</span>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-taisi-blue" />
            <span className="font-mono text-xs tracking-widest uppercase text-taisi-blue">
              Our network
            </span>
            <div className="h-px w-8 bg-taisi-blue" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">
            Backed by the organizations shaping AI safety
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            TAISI is part of the Kairos-funded network of AI safety
            groups at leading universities worldwide — including Oxford,
            Harvard, MIT, and Cornell. Our programs are hosted at
            Trajectory Labs, a dedicated AI safety research hub in
            Toronto.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-taisi-red" />
              <span className="font-mono text-xs tracking-widest uppercase text-taisi-red">
                FAQ
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">
              Questions you probably have
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If your question isn&apos;t here, reach out at{" "}
              <a
                href="mailto:hello@taisi.ca"
                className="text-taisi-blue hover:underline"
              >
                hello@taisi.ca
              </a>
            </p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="what-is-ais">
              <AccordionTrigger className="text-left">
                What is AI safety?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                AI safety is the field focused on making sure advanced AI
                systems are reliable and aligned with human values.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="prereqs">
              <AccordionTrigger className="text-left">
                Do I need to know about AI safety?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. Morning sessions cover the fundamentals. This program is an
                on-ramp — if you can code, you&apos;re ready.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="commitments">
              <AccordionTrigger className="text-left">
                I have an internship / other commitments
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The program runs weekends only — one day per week for four
                weeks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cost">
              <AccordionTrigger className="text-left">
                Is this free?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We cover food, the venue, and API credits. No cost to
                participate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="selective">
              <AccordionTrigger className="text-left">
                How selective is this?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Spots are limited and applications are reviewed on a rolling
                basis. The application takes about 5 minutes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="apply-reqs">
              <AccordionTrigger className="text-left">
                What do I need to apply?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Be a Toronto-area undergrad who can code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="not-undergrad">
              <AccordionTrigger className="text-left">
                Can I apply if I&apos;m not an undergrad?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We welcome applications from anyone in the Toronto area
                with programming experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="relative overflow-hidden bg-taisi-dark text-white">
        <div className="absolute top-[-30%] right-[-20%] w-[600px] h-[600px] rounded-full bg-taisi-red/10 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[500px] h-[500px] rounded-full bg-taisi-blue/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight mb-6">
            Ready to start?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Limited spots. Applications reviewed on a rolling basis.
            Closes April 5th.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-taisi-red hover:bg-taisi-red/90 text-white text-base px-12 py-6 rounded-full"
          >
            <a href="https://airtable.com/appVfG77MoQbG3bgi/pagW6YDWqH4GG76kw/form" target="_blank" rel="noopener noreferrer">
              Apply Now →
            </a>
          </Button>
          <p className="mt-6 text-sm text-white/40">
            2-minute application · Spots fill as applications are reviewed
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <span>© 2026 Toronto AI Safety Initiative</span>
        <div className="flex gap-6">
          <a href="/program" className="hover:text-foreground transition-colors">Programs</a>
          <a href="/about" className="hover:text-foreground transition-colors">About</a>
          <a href="mailto:hello@taisi.ca" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </footer>
    </main>
  );
}
