import { useState } from "react";
import { Link, useLocation } from "wouter";
import { LogoWordmark } from "./Logo";
import { Menu, X, Phone } from "lucide-react";
import { TRADES } from "../lib/trades";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <LogoWordmark />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Trades
                <svg className="w-3.5 h-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Mega dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-card border border-border rounded-2xl shadow-2xl p-4 w-[560px] grid grid-cols-4 gap-1">
                  {TRADES.map(t => (
                    <Link
                      key={t.id}
                      href={`/trade/${t.id}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted text-sm font-medium transition-colors"
                    >
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/it-services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              IT Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:4044004747" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              (404) 400-4747
            </a>
            <Link href="/contact" className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Free Estimate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-btn"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-1">Trades</p>
            <div className="grid grid-cols-2 gap-1 mb-3">
              {TRADES.map(t => (
                <Link
                  key={t.id}
                  href={`/trade/${t.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted text-sm font-medium transition-colors"
                >
                  <span>{t.icon}</span>
                  <span>{t.name}</span>
                </Link>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-1">
              <Link href="/it-services" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">IT Services</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">About</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">Contact</Link>
            </div>
            <div className="border-t border-border pt-3 flex flex-col gap-2">
              <a href="tel:4044004747" className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">
                <Phone className="w-4 h-4 text-primary" />
                (404) 400-4747
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
