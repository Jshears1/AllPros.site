import { Link } from "wouter";
import { SignalMark } from "../SignalLogo";

export function ITFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <SignalMark size={30} />
              <span className="font-display font-extrabold text-lg">AllPros IT</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Business technology, sourced & supported by pros. A division of Shears Unlimited Holdings LLC.
            </p>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">Solutions</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/software" className="hover:text-accent">Software &amp; Cloud</Link></li>
              <li><Link href="/audio" className="hover:text-accent">Pro Audio</Link></li>
              <li><Link href="/builds" className="hover:text-accent">Custom Builds</Link></li>
              <li><Link href="/parts" className="hover:text-accent">Hard-to-Find Parts</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">For</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nonprofits" className="hover:text-accent">Churches &amp; Nonprofits</Link></li>
              <li><Link href="/restaurants" className="hover:text-accent">Restaurants &amp; Bars</Link></li>
              <li><Link href="/quote" className="hover:text-accent">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:4044004747" className="hover:text-accent">(404) 400-4747</a></li>
              <li><a href="mailto:hello@allpros.site" className="hover:text-accent">hello@allpros.site</a></li>
              <li><a href="/" className="hover:text-accent">← Home Services</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 mt-10 pt-6 text-xs text-primary-foreground/60">
          © 2026 Shears Unlimited Holdings LLC · AllPros.site
        </div>
      </div>
    </footer>
  );
}
