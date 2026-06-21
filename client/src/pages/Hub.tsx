import { Wrench, ArrowRight, Phone } from "lucide-react";

function divisionHref(sub: "home" | "it") {
  if (typeof window === "undefined") return `?division=${sub}`;
  const h = window.location.hostname;
  const isApexProd = h === "allpros.site" || h === "www.allpros.site";
  return isApexProd ? `https://${sub}.allpros.site` : `?division=${sub}`;
}

export default function Hub() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <span className="font-display font-extrabold text-2xl tracking-tight">
          All<span className="text-primary">Pros</span>
          <span className="text-sm font-body font-medium text-muted-foreground ml-1">.site</span>
        </span>
        <a href="tel:4044004747" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <Phone className="w-4 h-4 text-primary" /> (404) 400-4747
        </a>
      </header>

      <main className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Shears Unlimited Holdings LLC</p>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold leading-tight mb-4">One name. Two kinds of pros.</h1>
            <p className="text-lg text-muted-foreground">Choose what you need help with today.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Home Services */}
            <a href={divisionHref("home")} className="trade-card group bg-card border border-border rounded-3xl p-8 lg:p-10 block">
              <div className="w-14 h-14 rounded-2xl bg-primary grid place-items-center mb-6">
                <Wrench className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-display font-extrabold mb-2">Home Services</h2>
              <p className="text-muted-foreground mb-6">HVAC, plumbing, electrical, roofing, and 14 more trades — with instant estimates and fast local pros.</p>
              <span className="font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">Enter Home Services <ArrowRight className="w-4 h-4" /></span>
            </a>

            {/* IT & Technology */}
            <a href={divisionHref("it")} className="trade-card group rounded-3xl p-8 lg:p-10 block text-white"
               style={{ background: "linear-gradient(135deg, hsl(173 64% 18%), hsl(174 60% 12%))", border: "1px solid hsl(173 40% 28%)" }}>
              <div className="w-14 h-14 rounded-2xl grid place-items-center mb-6" style={{ background: "hsl(41 55% 54%)" }}>
                <svg width="26" height="23" viewBox="0 0 64 56" fill="none">
                  <g stroke="hsl(173 64% 14%)" strokeWidth={5} strokeLinecap="round">
                    <line x1="10" y1="24" x2="10" y2="32" /><line x1="24" y1="14" x2="24" y2="42" />
                    <line x1="38" y1="8" x2="38" y2="48" /><line x1="52" y1="20" x2="52" y2="36" />
                  </g>
                </svg>
              </div>
              <h2 className="text-2xl font-display font-extrabold mb-2">IT &amp; Technology</h2>
              <p className="text-white/75 mb-6">Business software &amp; cloud, commercial pro audio, custom &amp; AI builds, and hard-to-find parts — sourced and supported.</p>
              <span className="font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: "hsl(41 70% 62%)" }}>Enter IT &amp; Technology <ArrowRight className="w-4 h-4" /></span>
            </a>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 text-center text-xs text-muted-foreground">
        © 2026 Shears Unlimited Holdings LLC · AllPros.site · Tucker, GA
      </footer>
    </div>
  );
}
