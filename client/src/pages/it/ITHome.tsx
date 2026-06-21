import { Link } from "wouter";
import { ArrowRight, Volume2, Cloud, Cpu, Puzzle } from "lucide-react";
import { ITLayout } from "@/components/it/ITLayout";

const LINES = [
  { icon: Cloud, title: "Software & Cloud", href: "/software", path: "/software",
    desc: "Microsoft 365, security, and backup — set up and managed for you." },
  { icon: Volume2, title: "Commercial Pro Audio", href: "/audio", path: "/audio",
    desc: "Speakers, mixers, and amps for sanctuaries, venues, and gyms — designed and installed." },
  { icon: Cpu, title: "Custom & AI Builds", href: "/builds", path: "/builds",
    desc: "Turnkey gaming, AI, and workstation builds — spec'd, assembled, and warrantied." },
  { icon: Puzzle, title: "Hard-to-Find Parts", href: "/parts", path: "/parts",
    desc: "Specialist components and accessories the big retailers don't stock." },
];

const STEPS = [
  { n: "1", t: "Tell us your need", d: "A quick form — your space, size, and goal." },
  { n: "2", t: "Get an honest quote", d: "Clear options — good / better / best — real pricing." },
  { n: "3", t: "We source & build", d: "Shipped from authorized channels; builds tested first." },
  { n: "4", t: "Set up & supported", d: "Install and ongoing support so it keeps working." },
];

export default function ITHome() {
  return (
    <ITLayout>
      {/* Hero */}
      <section className="it-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Sourced, set up &amp; supported by pros</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-5">
              Business technology, handled by pros.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Commercial sound systems, business software &amp; cloud, and the specialist gear big-box stores don't carry —
              chosen for your needs, installed right, and backed by a real person you can call.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quote" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                Get a free quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/nonprofits" className="border border-border text-foreground font-semibold px-6 py-3 rounded-xl hover:border-primary hover:text-primary transition-colors">
                Nonprofit solutions
              </Link>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">What people ask us for</p>
            {[
              ["Sanctuary sound system", "Audio + install"],
              ["Microsoft 365 + backup", "Set up & managed"],
              ["AI / workstation build", "Spec'd & warrantied"],
              ["Security & backup", "One bill, one contact"],
            ].map(([a, b], i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <span className="font-semibold">{a}</span>
                <span className="text-sm text-muted-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <div className="bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap gap-x-8 gap-y-2 justify-center text-sm text-muted-foreground">
          <span><b className="text-foreground">Authorized</b> distribution channel</span>
          <span><b className="text-foreground">Drop-shipped</b> from 4 US warehouses</span>
          <span><b className="text-foreground">Install &amp; setup</b> available</span>
          <span><b className="text-foreground">Nonprofit</b> &amp; public-sector pricing</span>
        </div>
      </div>

      {/* Lines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">What we do</p>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold mb-3">One trusted source for the tech you'd rather not figure out alone.</h2>
          <p className="text-muted-foreground text-lg">Big-ticket, specialist things — quoted clearly, set up properly, supported after.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LINES.map((l) => (
            <Link key={l.title} href={l.href} className="trade-card bg-card border border-border rounded-2xl p-6 block">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border grid place-items-center mb-4">
                <l.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-mono text-accent mb-2">{l.path}</p>
              <h3 className="text-lg font-display font-extrabold mb-1.5">{l.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{l.desc}</p>
              <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">Explore <ArrowRight className="w-4 h-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* How */}
      <section className="bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">How it works</p>
            <h2 className="text-3xl font-display font-extrabold">Simple, honest, no pressure.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-card border border-border rounded-2xl p-6">
                <div className="text-3xl font-display font-extrabold text-accent mb-2">{s.n}</div>
                <h4 className="font-display font-bold mb-1">{s.t}</h4>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 lg:p-14 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold mb-3">Tell us what you're trying to set up.</h2>
          <p className="text-primary-foreground/85 max-w-xl mx-auto mb-7 text-lg">
            Audio system, office IT, or something you can't find anywhere else — we'll come back with an honest quote, usually within one business day.
          </p>
          <Link href="/quote" className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 hover:brightness-105 transition">
            Request a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}
