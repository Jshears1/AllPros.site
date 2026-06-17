import { useParams, Link } from "wouter";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { TradeCalculator } from "../components/Calculator";
import { LeadForm } from "../components/LeadForm";
import { TRADE_MAP, TRADES } from "../lib/trades";
import { ArrowRight, CheckCircle2, Phone, MapPin, Award, ChevronRight } from "lucide-react";
import NotFound from "./not-found";

export default function TradePage() {
  const { id } = useParams<{ id: string }>();
  const trade = id ? TRADE_MAP.get(id) : undefined;

  if (!trade) return <NotFound />;

  const otherTrades = TRADES.filter(t => t.id !== trade.id).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/80">{trade.name}</span>
              </nav>

              <div className="text-5xl mb-4">{trade.icon}</div>
              <h1 className="font-display font-800 text-[clamp(2.2rem,5vw,4.5rem)] tracking-tight leading-[1.05] mb-3">
                {trade.name}<br />
                <span className="text-orange-400">Services</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-md mb-2">{trade.tagline}</p>
              <p className="text-sm text-white/50 leading-relaxed max-w-md mb-8">{trade.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a href={`tel:4044004747`} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link href="/contact" className="border border-white/20 hover:border-white/40 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm">
                  Free Estimate
                </Link>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {trade.certifications.map(c => (
                  <span key={c} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/70">
                    <Award className="w-3 h-3 text-orange-400" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Calculator */}
            <div>
              <TradeCalculator trade={trade} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Services List */}
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">What We Do</p>
              <h2 className="font-display font-800 text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight mb-6">
                {trade.name} Services We Offer
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {trade.services.map(s => (
                  <div key={s} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-orange-200 hover:bg-orange-50/30 dark:hover:bg-orange-950/10 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>

              {/* Why Us */}
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Why Choose Us</p>
              <h3 className="font-display font-800 text-xl mb-4">What Sets Our {trade.name} Team Apart</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {trade.whyUs.map((w, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                    </div>
                    <span className="text-sm font-medium leading-snug">{w}</span>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Service Areas</p>
              <div className="flex flex-wrap gap-2">
                {trade.serviceAreas.map(a => (
                  <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm font-medium">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Lead Form sidebar */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="font-display font-800 text-lg mb-1">Get a Free {trade.name} Quote</h3>
                <p className="text-sm text-muted-foreground mb-5">Licensed pros — same-day response.</p>
                <LeadForm prefillTrade={trade.id} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER TRADES */}
      <section className="section bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-800 text-xl mb-6">Other Services We Offer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {otherTrades.map(t => (
              <Link
                key={t.id}
                href={`/trade/${t.id}`}
                className="trade-card flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card hover:border-orange-200 text-center transition-all"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="text-xs font-semibold">{t.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
