import { Link } from "wouter";
import { LogoWordmark } from "./Logo";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { TRADES } from "../lib/trades";

export function Footer() {
  const tradeCol1 = TRADES.slice(0, 6);
  const tradeCol2 = TRADES.slice(6, 12);
  const tradeCol3 = TRADES.slice(12);

  return (
    <footer className="bg-[hsl(var(--navy))] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <LogoWordmark className="[&_span]:text-white [&_.text-muted-foreground]:text-white/50" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Shears Unlimited Holdings LLC — Your one-stop network for every trade and technology need in the Atlanta metro area.
            </p>
            <div className="mt-5 space-y-2">
              <a href="tel:4044004747" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                (404) 400-4747
              </a>
              <a href="mailto:info@allpros.site" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                info@allpros.site
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                Tucker, GA 30084
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-500 transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-500 transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-500 transition-colors flex items-center justify-center">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Trades 1 */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">Trades</p>
            <ul className="space-y-2">
              {tradeCol1.map(t => (
                <li key={t.id}>
                  <Link href={`/trade/${t.id}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {t.icon} {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trades 2 */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">More Trades</p>
            <ul className="space-y-2">
              {tradeCol2.map(t => (
                <li key={t.id}>
                  <Link href={`/trade/${t.id}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {t.icon} {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialty + links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">Specialty</p>
            <ul className="space-y-2">
              {tradeCol3.map(t => (
                <li key={t.id}>
                  <Link href={`/trade/${t.id}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {t.icon} {t.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4 mt-6">Company</p>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/it-services" className="text-sm text-white/60 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Shears Unlimited Holdings LLC d/b/a AllPros.site. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Licensed · Insured · Bonded · Tucker, GA</p>
        </div>
      </div>
    </footer>
  );
}
