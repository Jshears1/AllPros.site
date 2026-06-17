import { Link } from "wouter";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { LeadForm } from "../components/LeadForm";
import { TRADES } from "../lib/trades";
import { ArrowRight, ShieldCheck, Clock, Star, Zap, Phone, ChevronRight } from "lucide-react";

const STATS = [
  { value: "18+", label: "Trade Specialties" },
  { value: "500+", label: "Jobs Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "1hr", label: "Response Time" },
];

const TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured", desc: "All trades fully licensed, bonded, and insured in Georgia." },
  { icon: Clock, label: "Fast Response", desc: "We respond within 1 business hour. Emergency service available 24/7." },
  { icon: Star, label: "Quality Guaranteed", desc: "Every job backed by our workmanship warranty." },
  { icon: Zap, label: "Free Estimates", desc: "No cost, no obligation quotes for every trade and project." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="hero-gradient text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                Tucker, GA · Metro Atlanta
              </div>

              <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-800 leading-[1.05] tracking-tight mb-6">
                Every Trade.<br />
                <span className="text-orange-400">One Trusted</span><br />
                Network.
              </h1>

              <p className="text-lg text-white/70 leading-relaxed max-w-md mb-8">
                HVAC, Plumbing, Electrical, Roofing, Flooring, IT Services — 18+ trades under one roof. Licensed professionals. Free estimates. Guaranteed work.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2">
                  Get Free Estimate <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:4044004747" className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400" /> (404) 400-4747
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
                {STATS.map(s => (
                  <div key={s.label}>
                    <div className="font-display font-800 text-2xl text-orange-400">{s.value}</div>
                    <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-card rounded-2xl p-6 shadow-2xl border border-border">
              <h2 className="font-display font-800 text-xl text-foreground mb-1">Request a Free Estimate</h2>
              <p className="text-sm text-muted-foreground mb-5">We respond within 1 business hour.</p>
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* TRADES GRID */}
      <section className="section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Our Services</p>
            <h2 className="font-display font-800 text-[clamp(2rem,4vw,3rem)] tracking-tight">
              18 Trades. All Professional.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Every trade comes with certified technicians, free estimates, and our satisfaction guarantee.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TRADES.map((trade) => (
              <Link
                key={trade.id}
                href={`/trade/${trade.id}`}
                className="trade-card group flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card hover:border-orange-200 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 text-center transition-all"
                data-testid={`trade-card-${trade.id}`}
              >
                <span className="text-3xl">{trade.icon}</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-orange-600 transition-colors">{trade.name}</span>
                <span className="text-xs text-muted-foreground hidden sm:block leading-tight">{trade.tagline}</span>
                <ChevronRight className="w-3.5 h-3.5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Why AllPros</p>
              <h2 className="font-display font-800 text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight mb-6">
                The Standard for Trade<br />Services in Atlanta
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Shears Unlimited Holdings LLC built AllPros.site to give homeowners and businesses one trusted destination for every trade need — with no runaround, no hidden fees, and no surprises.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                Learn Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {TRUST.map(t => (
                <div key={t.label} className="bg-card border border-border rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center mb-3">
                    <t.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-display font-800 text-base mb-1">{t.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR PROMO */}
      <section className="section bg-[hsl(var(--navy))] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-4">🧮</div>
          <h2 className="font-display font-800 text-[clamp(1.8rem,3.5vw,3rem)] tracking-tight mb-4">
            Free Estimating Calculators<br />for Every Trade
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Get an instant ballpark before you call. Every trade page includes a detailed multi-variable estimator built for real job costing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TRADES.slice(0, 8).map(t => (
              <Link
                key={t.id}
                href={`/trade/${t.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-orange-500 border border-white/10 text-sm font-medium transition-all"
              >
                {t.icon} {t.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500 text-sm font-semibold transition-all"
            >
              + All 18 Trades
            </Link>
          </div>
        </div>
      </section>

      {/* IT SECTION PROMO */}
      <section className="section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl p-8 text-white">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="font-display font-800 text-2xl mb-3">IT Services & D&H Product Procurement</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                As a D&H Authorized Reseller, we provide business technology solutions — managed IT, networking, security cameras, computer repair, and enterprise hardware at competitive pricing.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {["Managed IT", "Network Install", "Security Cameras", "Hardware (D&H)", "Cloud Migration", "VoIP Systems"].map(s => (
                  <div key={s} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <Link href="/it-services" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                IT Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Technology Services</p>
              <h2 className="font-display font-800 text-[clamp(1.8rem,3vw,2.5rem)] tracking-tight mb-4">
                Managed IT & D&H<br />Hardware Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From 1-person home offices to 50-person businesses, we deliver enterprise-grade technology at SMB pricing. Our D&H partnership gives you direct access to 50,000+ technology products.
              </p>
              <ul className="space-y-3">
                {[
                  "CompTIA & Cisco certified technicians",
                  "D&H Authorized Reseller — direct pricing",
                  "Remote monitoring & management (24/7)",
                  "Hardware, software, cloud — one vendor",
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section bg-orange-500 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-800 text-[clamp(2rem,4vw,3.5rem)] tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Call or fill out the form. We'll match you with the right pro and get you a free estimate — same day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:4044004747" className="bg-white text-orange-600 font-semibold px-7 py-3.5 rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> (404) 400-4747
            </a>
            <Link href="/contact" className="border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Submit a Request
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
