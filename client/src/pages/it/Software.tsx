import { Link } from "wouter";
import { Mail, Shield, HardDrive, Headphones, ArrowRight } from "lucide-react";
import { ITLayout } from "@/components/it/ITLayout";

const OFFERS = [
  { icon: Mail, title: "Email & Microsoft 365", desc: "Professional email + Office apps, migrated and set up. Nonprofits may qualify for free/discounted licensing.", price: "from $99 setup / user" },
  { icon: Shield, title: "Security", desc: "Business-grade protection on every device, installed and monitored.", price: "quote by device count" },
  { icon: HardDrive, title: "Backup & Recovery", desc: "Automatic backups so a crash or ransomware isn't the end of the world.", price: "monthly, by data size" },
  { icon: Headphones, title: "Managed Care", desc: "We keep it all running for a simple monthly fee. One provider, one bill, a human to call.", price: "from $35 / seat / mo" },
];

export default function Software() {
  return (
    <ITLayout>
      <section className="it-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Software &amp; cloud</p>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-5">Your email, security, and backups — handled.</h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Most small organizations have nobody really in charge of their business tech. We take it over: email and Microsoft 365,
              security on every device, automatic backups, and someone to call when something breaks. One provider, one bill.
            </p>
            <Link href="/quote" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 inline-flex items-center gap-2">
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-card border border-border rounded-2xl p-7 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">One simple question</p>
            <p className="text-xl font-display font-extrabold leading-snug">"Who handles your email security and backups right now?"</p>
            <p className="text-muted-foreground mt-3">If the honest answer is "nobody, really" — that's exactly what we fix.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">What we offer</p>
          <h2 className="text-3xl font-display font-extrabold mb-3">Four things, done well.</h2>
          <p className="text-muted-foreground text-lg">No confusing catalog of a thousand products — just the essentials every organization needs, set up and supported.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {OFFERS.map((o) => (
            <div key={o.title} className="bg-card border border-border rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border grid place-items-center mb-4">
                <o.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-extrabold mb-1.5">{o.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{o.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-accent">{o.price}</span>
                <Link href="/quote" className="text-sm font-semibold text-primary inline-flex items-center gap-1">Request <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 lg:p-14 text-center">
          <h2 className="text-3xl font-display font-extrabold mb-3">Let us take the tech off your plate.</h2>
          <p className="text-primary-foreground/85 max-w-xl mx-auto mb-7 text-lg">Tell us how many people you have and what you use today — we'll send a simple plan and price.</p>
          <Link href="/quote" className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 hover:brightness-105">
            Request a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}
