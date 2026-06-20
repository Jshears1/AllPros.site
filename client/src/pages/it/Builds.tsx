import { Link } from "wouter";
import { ArrowRight, Cpu, BrainCircuit, Server, Gamepad2 } from "lucide-react";
import { ITLayout } from "@/components/it/ITLayout";

const BUILDS = [
  { icon: BrainCircuit, title: "AI / ML Workstations", desc: "Multi-GPU rigs spec'd to your model and budget — built, stress-tested, and warrantied." },
  { icon: Gamepad2, title: "Gaming Rigs", desc: "High-performance builds tuned for your games and resolution, cleanly assembled." },
  { icon: Server, title: "Homelab & Servers", desc: "Rack or tower servers, NAS, and UPS — configured and documented." },
  { icon: Cpu, title: "Specialized Builds", desc: "Editing, CAD, rendering, or any workload — the right parts, made to work together." },
];

export default function Builds() {
  return (
    <ITLayout>
      <section className="it-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Custom &amp; AI builds</p>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-5">Turnkey machines, built and backed by pros.</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Don't gamble thousands guessing at compatibility, power, and cooling. Tell us the workload and budget — we spec it,
              build it, test it, and stand behind it. AI rigs, workstations, gaming, and servers.
            </p>
            <Link href="/quote" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 inline-flex items-center gap-2">
              Spec my build <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {BUILDS.map((b) => (
            <div key={b.title} className="bg-card border border-border rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border grid place-items-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-extrabold mb-1.5">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 lg:p-14 text-center mt-12">
          <h2 className="text-3xl font-display font-extrabold mb-3">Every build is quoted to your needs.</h2>
          <p className="text-primary-foreground/85 max-w-xl mx-auto mb-7 text-lg">Tell us the workload, budget, and timeline — we'll send a configuration and price.</p>
          <Link href="/quote" className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 hover:brightness-105">
            Spec my build <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}
