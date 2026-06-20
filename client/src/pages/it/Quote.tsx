import { ITLayout } from "@/components/it/ITLayout";
import { ITLeadForm } from "@/components/it/ITLeadForm";

const STEPS = [
  { n: "1", t: "You send this", d: "A few details, that's it." },
  { n: "2", t: "We reply < 1 day", d: "Honest, itemized quote." },
  { n: "3", t: "Good/better/best", d: "You choose, no pressure." },
  { n: "4", t: "We handle it", d: "Sourced, set up, supported." },
];

export default function Quote() {
  return (
    <ITLayout>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Get a free quote</p>
        <h1 className="text-3xl lg:text-4xl font-display font-extrabold mb-3">Tell us what you need.</h1>
        <p className="text-muted-foreground text-lg mb-8">No pressure and no obligation. Share a few details and we'll send an honest, itemized quote — usually within one business day.</p>
        <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
          <ITLeadForm />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {STEPS.map((s) => (
            <div key={s.n}>
              <div className="text-3xl font-display font-extrabold text-accent mb-1">{s.n}</div>
              <h4 className="font-display font-bold text-sm">{s.t}</h4>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </ITLayout>
  );
}
