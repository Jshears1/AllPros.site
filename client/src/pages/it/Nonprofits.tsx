import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { ITLayout } from "@/components/it/ITLayout";

const TIERS = [
  { name: "Starter", sub: "Rooms up to ~80 seats", price: "from $3,300", featured: false,
    items: ["4× ceiling speakers", "Commercial mixer-amp", "Simple 6-channel mixer", "Cabling + setup", "Volunteer-friendly labeling"] },
  { name: "Sanctuary", sub: "Rooms ~80–200 seats", price: "from $5,000", featured: true,
    items: ["2× powered main speakers", "2× ceiling fill speakers", "12-channel mixer w/ effects", "Subwoofer option", "Full install + tuning"] },
  { name: "Large Hall", sub: "200+ seats / line array", price: "from $8,000", featured: false,
    items: ["High-output mains / array", "Subwoofers", "Digital mixer", "Full design + install + tuning", "Team training"] },
];

const PAINS = [
  ["\"People can't hear well.\"", "We design coverage for your actual room so every seat hears clearly — no dead spots, no feedback."],
  ["\"Only one person can run it.\"", "We set it up so any volunteer can turn it on and go — labeled, simple, hard to mess up."],
  ["\"Our office tech is a mess.\"", "Email, security, and backups handled and monitored — one provider, one bill, a human to call."],
];

export default function Nonprofits() {
  return (
    <ITLayout>
      <section className="it-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">For churches &amp; nonprofits</p>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-5">Sound everyone can hear — run by anyone on your team.</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We design, supply, and install sound systems that are clear, reliable, and simple enough for a volunteer to run on Sunday —
              plus the email, security, and backups your office needs, often at nonprofit pricing.
            </p>
            <Link href="/quote" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 inline-flex items-center gap-2">
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Common worries, solved</p>
          <h2 className="text-3xl font-display font-extrabold">If any of these sound familiar, you're who we help.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {PAINS.map(([t, d]) => (
            <div key={t} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-display font-extrabold mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Sound system packages</p>
            <h2 className="text-3xl font-display font-extrabold mb-3">Pick the package that fits your space.</h2>
            <p className="text-muted-foreground">Starting prices include design and installation. Final quote is tailored to your room.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {TIERS.map((t) => (
              <div key={t.name} className={`bg-card border rounded-2xl p-7 flex flex-col ${t.featured ? "border-primary border-2 shadow-xl" : "border-border"}`}>
                {t.featured && <span className="self-start text-[11px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-full mb-3">Most popular</span>}
                <h3 className="text-xl font-display font-extrabold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.sub}</p>
                <p className="text-3xl font-display font-extrabold text-primary mt-3">{t.price}<span className="text-sm text-muted-foreground font-body font-normal"> installed</span></p>
                <ul className="my-5 space-y-2 flex-1">
                  {t.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {i}</li>
                  ))}
                </ul>
                <Link href="/quote" className="bg-primary text-primary-foreground font-semibold py-2.5 rounded-xl text-center hover:bg-primary/90">Get this quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Office IT &amp; cloud</p>
            <h2 className="text-2xl lg:text-3xl font-display font-extrabold mb-3">Don't forget the office behind the ministry.</h2>
            <p className="text-muted-foreground mb-5">Nonprofits often qualify for free or discounted Microsoft 365 — so your spend goes to setup, security, backup, and support. We handle it for a simple monthly fee.</p>
            <Link href="/software" className="text-primary font-semibold inline-flex items-center gap-1">Explore software &amp; cloud <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <ul className="space-y-3">
            {[["Microsoft 365", "email + apps, set up for you"], ["Security", "protect every device"], ["Backup", "so a crash isn't a crisis"], ["Managed care", "we keep it all running"]].map(([a, b]) => (
              <li key={a} className="flex justify-between border-b border-border pb-2 text-sm"><b>{a}</b><span className="text-muted-foreground">{b}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </ITLayout>
  );
}
