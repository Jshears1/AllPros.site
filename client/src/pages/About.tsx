import { Link } from "wouter";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ChevronRight, Award, Users, Building2, Handshake } from "lucide-react";

const VALUES = [
  { icon: Award, title: "Licensed & Certified", desc: "Every technician holds the required state licenses and trade certifications. We pull permits. We do it right." },
  { icon: Users, title: "Community First", desc: "We're Tucker-born and Atlanta-built. Our team lives and works in the communities we serve." },
  { icon: Building2, title: "One Company, Every Trade", desc: "Shears Unlimited Holdings LLC manages every service under one roof — no subcontractors with no accountability." },
  { icon: Handshake, title: "No-Surprise Pricing", desc: "We give written estimates before work starts. Price changes require your written approval." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white/80">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">About</span>
          </nav>
          <h1 className="font-display font-800 text-[clamp(2.5rem,5vw,5rem)] tracking-tight mb-4">
            About <span className="text-orange-400">AllPros</span>
          </h1>
          <p className="text-xl text-white/70 max-w-xl leading-relaxed">
            Shears Unlimited Holdings LLC — built in Tucker, Georgia, to give every homeowner and business one trusted source for every trade.
          </p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-display font-800 text-2xl mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AllPros.site was founded by Jesse Shears under Shears Unlimited Holdings LLC with one simple idea: stop sending homeowners and businesses on a wild goose chase to find trustworthy tradespeople for every different job. Whether you need your AC replaced, your floors refinished, your roof inspected after a storm, or your entire office network rebuilt — we handle it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Starting in carpet cleaning and water damage restoration, our team built a reputation for showing up on time, doing honest work, and standing behind it. We expanded trade by trade, always insisting on licensing, insurance, and certifications before putting any technician in front of a customer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Today, AllPros serves 18 trade categories plus IT services and D&H hardware procurement — all from our Tucker, GA base, covering the entire metro Atlanta area.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {VALUES.map(v => (
              <div key={v.title} className="p-6 rounded-2xl border border-border bg-card">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-display font-800 text-base mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[hsl(var(--navy))] text-white rounded-2xl p-8 text-center">
            <h3 className="font-display font-800 text-2xl mb-3">Ready to Work With Us?</h3>
            <p className="text-white/60 mb-6">Free estimates on every job. Licensed, insured, and guaranteed.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Get a Free Estimate
              </Link>
              <a href="tel:4044004747" className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                (404) 400-4747
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
