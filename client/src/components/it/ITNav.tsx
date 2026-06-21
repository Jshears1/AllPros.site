import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { SignalWordmark } from "../SignalLogo";

const LINKS = [
  { href: "/software", label: "Software & Cloud" },
  { href: "/audio", label: "Pro Audio" },
  { href: "/builds", label: "Custom Builds" },
  { href: "/parts", label: "Parts" },
  { href: "/nonprofits", label: "Nonprofits" },
  { href: "/restaurants", label: "Restaurants" },
];

export function ITNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/"><SignalWordmark /></Link>

          <nav className="hidden lg:flex items-center gap-6">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:4044004747" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-accent" /> (404) 400-4747
            </a>
            <Link href="/quote" className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Get a Quote
            </Link>
          </div>

          <button className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border pt-3 flex flex-col gap-2">
              <a href="tel:4044004747" className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">
                <Phone className="w-4 h-4 text-accent" /> (404) 400-4747
              </a>
              <Link href="/quote" onClick={() => setOpen(false)} className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
