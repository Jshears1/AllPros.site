import { Link } from "wouter";
import { ArrowRight, Puzzle } from "lucide-react";
import { ITLayout } from "@/components/it/ITLayout";

const KINDS = ["Components (CPU, GPU, RAM, boards)", "Server & rack parts", "Specialty cabling & adapters", "Power protection (UPS)", "Networking gear", "Pro accessories"];

export default function Parts() {
  return (
    <ITLayout>
      <section className="it-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Hard-to-find parts</p>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-5">The specialist gear big-box stores don't stock.</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Through our distribution channel we can source thousands of professional components and accessories — the cables,
              cards, and parts you can't just grab at a big-box store. Tell us the exact part and we'll check availability and price.
            </p>
            <Link href="/quote" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 inline-flex items-center gap-2">
              Ask if we can source it <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {KINDS.map((k) => (
            <div key={k} className="bg-card border border-border rounded-2xl p-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary border border-border grid place-items-center shrink-0">
                <Puzzle className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold">{k}</span>
            </div>
          ))}
        </div>
      </section>
    </ITLayout>
  );
}
