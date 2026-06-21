import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { ITLayout } from "@/components/it/ITLayout";

const TIERS = [
  { name: "Single-Zone Audio", sub: "One space, clean sound", price: "from $2,400", featured: false,
    items: ["6× ceiling speakers", "Commercial mixer-amp", "Wall zone volume control", "Cabling + install"] },
  { name: "Audio + TVs", sub: "Multi-zone + game day", price: "from $5,000", featured: true,
    items: ["Multi-zone audio", "2–4 commercial TVs + mounts", "Independent zone control", "Distribution + install"] },
  { name: "Full Venue", sub: "The works", price: "from $8,000", featured: false,
    items: ["Whole-venue zoned audio", "TVs + distribution", "Managed business Wi-Fi/network", "Paging + full install"] },
];

const PAINS = [
  ["\"Music's wrong everywhere.\"", "One volume for the whole place means the bar's too quiet or the patio's blasting. We zone it so each area is right."],
  ["\"Customers ask for the game.\"", "Commercial TVs placed and distributed so every seat has a view — built to run all day."],
  ["\"Wi-Fi drops at rush.\"", "When Wi-Fi dies, card payments die with it. We build a network that holds under a full house."],
];

export default function Restaurants() {
  return (
    <ITLayout>
      <section className="it-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">For restaurants &amp; bars</p>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-5">Set the vibe. Show the game. Never drop a payment.</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Multi-zone audio so the bar can be loud while the patio stays chill, commercial TVs for game day, and guest + POS
              Wi-Fi that doesn't quit when you're slammed. Designed for your floor plan, installed clean, supported after.
            </p>
            <Link href="/quote" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 inline-flex items-center gap-2">
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Sound familiar?</p>
          <h2 className="text-3xl font-display font-extrabold">The three things that quietly cost you customers.</h2>
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Packages</p>
            <h2 className="text-3xl font-display font-extrabold mb-3">Pick where you want to start.</h2>
            <p className="text-muted-foreground">Starting prices include design and installation. Final quote is tailored to your floor plan.</p>
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
          <p className="text-sm text-muted-foreground mt-6">Recurring hook: managed Wi-Fi + security as a monthly plan — a restaurant that loses Wi-Fi loses card payments, so it's easy to justify.</p>
        </div>
      </section>
    </ITLayout>
  );
}
