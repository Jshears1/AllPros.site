import { Link } from "wouter";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { LeadForm } from "../components/LeadForm";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { TRADES } from "../lib/trades";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="hero-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
            <Link href="/" className="hover:text-white/80">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Contact</span>
          </nav>
          <h1 className="font-display font-800 text-[clamp(2.5rem,5vw,5rem)] tracking-tight mb-4">
            Get a <span className="text-orange-400">Free</span> Estimate
          </h1>
          <p className="text-xl text-white/70 max-w-xl">
            Tell us about your project. We respond within 1 business hour and provide written estimates at no cost.
          </p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8">
              <h2 className="font-display font-800 text-xl mb-1">Request an Estimate</h2>
              <p className="text-sm text-muted-foreground mb-6">All fields marked * are required.</p>
              <LeadForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display font-800 text-base mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <a href="tel:4044004747" className="flex items-center gap-3 text-sm hover:text-orange-500 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-orange-500" />
                    </div>
                    (404) 400-4747
                  </a>
                  <a href="mailto:info@allpros.site" className="flex items-center gap-3 text-sm hover:text-orange-500 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-orange-500" />
                    </div>
                    info@allpros.site
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-orange-500" />
                    </div>
                    Tucker, GA 30084
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Business Hours</div>
                      <div>Mon–Fri: 7am – 7pm</div>
                      <div>Sat: 8am – 5pm</div>
                      <div>24/7 Emergency Line Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[hsl(var(--navy))] text-white rounded-2xl p-5">
                <h3 className="font-display font-800 text-sm mb-3 text-orange-400 uppercase tracking-widest">Emergency Service</h3>
                <p className="text-sm text-white/70 mb-4">Water damage, electrical outage, HVAC failure? We have emergency technicians available 24/7.</p>
                <a href="tel:4044004747" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                  <Phone className="w-4 h-4" /> Call Emergency Line
                </a>
              </div>

              {/* Quick trade links */}
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-display font-800 text-sm mb-3">Jump to a Trade</h3>
                <div className="grid grid-cols-2 gap-1">
                  {TRADES.slice(0, 10).map(t => (
                    <Link key={t.id} href={`/trade/${t.id}`} className="flex items-center gap-1.5 py-1 text-xs text-muted-foreground hover:text-orange-500 transition-colors">
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
