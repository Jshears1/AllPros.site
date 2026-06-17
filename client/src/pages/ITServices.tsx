import { Link } from "wouter";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { TradeCalculator } from "../components/Calculator";
import { LeadForm } from "../components/LeadForm";
import { TRADE_MAP } from "../lib/trades";
import { CheckCircle2, Server, Wifi, Shield, Monitor, Cloud, Phone, ChevronRight, ExternalLink, Award } from "lucide-react";

const DH_CATEGORIES = [
  { name: "Networking", desc: "Routers, switches, access points, cabling — Cisco, Netgear, Ubiquiti", icon: Wifi },
  { name: "Servers & Storage", desc: "HPE, Dell, Synology NAS, rack servers, workstations", icon: Server },
  { name: "Security", desc: "Cameras (IP/PoE), NVRs, access control, alarm systems", icon: Shield },
  { name: "Computers & Laptops", desc: "Desktops, laptops, all-in-ones — HP, Lenovo, Dell, Apple", icon: Monitor },
  { name: "Cloud & Software", desc: "Microsoft 365, antivirus, backup solutions, VPN licensing", icon: Cloud },
  { name: "Print & Peripherals", desc: "Printers, scanners, monitors, docking stations, accessories", icon: Monitor },
];

const MANAGED_TIERS = [
  {
    name: "Basic",
    price: "$35–55",
    per: "/device/mo",
    desc: "Remote support during business hours",
    features: ["Help desk (M–F 8am–6pm)", "Remote monitoring", "Patch management", "Antivirus management"],
    cta: "For solo operators & home offices"
  },
  {
    name: "Standard",
    price: "$65–85",
    per: "/device/mo",
    desc: "Remote + on-site support",
    features: ["Help desk (M–F 8am–8pm)", "Remote + on-site support", "Backup monitoring", "Quarterly business review", "Network monitoring"],
    highlight: true,
    cta: "Most popular for small businesses"
  },
  {
    name: "Premium",
    price: "$95–145",
    per: "/device/mo",
    desc: "Fully managed — no IT headaches",
    features: ["24/7 help desk", "Unlimited on-site visits", "Proactive maintenance", "vCIO consulting", "Vendor management", "Compliance support"],
    cta: "Best for growing businesses 10–50 users"
  }
];

const trade = TRADE_MAP.get("it-services")!;

export default function ITServices() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/80">IT Services</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-5">
                <Award className="w-3.5 h-3.5" />
                D&H Authorized Reseller
              </div>

              <h1 className="font-display font-800 text-[clamp(2.2rem,5vw,4.5rem)] tracking-tight leading-[1.05] mb-4">
                IT Services &<br />
                <span className="text-orange-400">D&H Hardware</span>
              </h1>
              <p className="text-lg text-white/70 max-w-md mb-8">
                Managed IT, network infrastructure, security cameras, and 50,000+ technology products through our D&H partnership — delivered by certified technicians.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a href="tel:4044004747" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-xl text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (404) 400-4747
                </a>
                <Link href="/contact" className="border border-white/20 hover:border-white/40 text-white font-semibold px-5 py-3 rounded-xl text-sm">
                  Request IT Assessment
                </Link>
              </div>

              {/* Certs */}
              <div className="flex flex-wrap gap-2">
                {trade.certifications.map(c => (
                  <span key={c} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/70 flex items-center gap-1">
                    <Award className="w-3 h-3 text-orange-400" /> {c}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <TradeCalculator trade={trade} />
            </div>
          </div>
        </div>
      </section>

      {/* D&H SECTION */}
      <section className="section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">D&H Authorized Reseller</p>
              <h2 className="font-display font-800 text-[clamp(1.6rem,3vw,2.5rem)] tracking-tight mb-4">
                Technology Products at<br />Wholesale Pricing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Through our D&H Distributing partnership (Account #3310440000), we access one of the largest technology distributors in North America — giving you direct pricing on networking, security, computers, servers, and more. No middleman markup.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {DH_CATEGORIES.map(cat => (
                  <div key={cat.name} className="flex gap-3 p-4 rounded-xl border border-border bg-card hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center shrink-0">
                      <cat.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{cat.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{cat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-blue-600 shrink-0" />
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Need specific hardware?</strong> Contact us with your requirements — we quote direct from D&H stock, often same or next business day.
                </p>
              </div>
            </div>

            {/* Lead form */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display font-800 text-lg mb-1">Get a Free IT Assessment</h3>
                <p className="text-sm text-muted-foreground mb-5">We'll audit your current setup and quote a solution.</p>
                <LeadForm prefillTrade="it-services" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGED IT TIERS */}
      <section className="section bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">Managed IT Plans</p>
            <h2 className="font-display font-800 text-[clamp(1.6rem,3vw,2.5rem)] tracking-tight">
              Simple, Flat-Rate IT Support
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              One monthly price per device. No surprise invoices. No IT emergencies that spiral into expensive repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {MANAGED_TIERS.map(tier => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 border transition-all ${
                  tier.highlight
                    ? 'bg-[hsl(var(--navy))] text-white border-orange-500/40 shadow-xl scale-105'
                    : 'bg-card border-border'
                }`}
              >
                {tier.highlight && (
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-500 text-xs font-semibold text-white mb-3">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-display font-800 text-xl mb-1 ${tier.highlight ? 'text-white' : ''}`}>{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-display font-800 text-3xl ${tier.highlight ? 'text-orange-400' : 'text-foreground'}`}>{tier.price}</span>
                  <span className={`text-sm ${tier.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>{tier.per}</span>
                </div>
                <p className={`text-xs mb-5 ${tier.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>{tier.cta}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${tier.highlight ? 'text-white/80' : ''}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${tier.highlight ? 'text-orange-400' : 'text-orange-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-colors ${
                    tier.highlight
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'border border-border hover:border-orange-300 hover:text-orange-500'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">All IT Services</p>
          <h2 className="font-display font-800 text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight mb-8">Everything We Handle</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {trade.services.map(s => (
              <div key={s} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
