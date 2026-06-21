import { Link } from "wouter";
import { ArrowRight, Volume2 } from "lucide-react";
import { ITLayout } from "@/components/it/ITLayout";

const CATEGORIES = [
  ["Speakers", "Ceiling, wall, pendant, powered mains & line arrays"],
  ["Subwoofers", "Add weight and clarity for music and events"],
  ["Mixers & DSP", "Simple analog to full digital consoles"],
  ["Amplifiers & zones", "Multi-zone control — each area at the right level"],
  ["Microphones", "Handheld, lavalier, podium, and conferencing"],
  ["Design & install", "We spec it for your room, install it, and tune it"],
];

export default function Audio() {
  return (
    <ITLayout>
      <section className="it-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Commercial pro audio</p>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-5">Sound that's clear in every seat — designed and installed.</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Commercial-grade audio for houses of worship, venues, restaurants, bars, and gyms. We carry the trusted pro brands
              (JBL, Soundcraft, Harman), design the system for your exact room, and handle installation and tuning.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/quote" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 inline-flex items-center gap-2">
                Get a free quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/nonprofits" className="border border-border font-semibold px-6 py-3 rounded-xl hover:border-primary hover:text-primary transition-colors">
                Church &amp; nonprofit packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">What we cover</p>
          <h2 className="text-3xl font-display font-extrabold mb-3">A complete system, not just a box.</h2>
          <p className="text-muted-foreground text-lg">The value isn't the cheapest speaker — it's the right system, made to work together, installed and supported.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(([t, d]) => (
            <div key={t} className="bg-card border border-border rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border grid place-items-center mb-4">
                <Volume2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-extrabold mb-1.5">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 lg:p-14 text-center">
          <h2 className="text-3xl font-display font-extrabold mb-3">Tell us about your space.</h2>
          <p className="text-primary-foreground/85 max-w-xl mx-auto mb-7 text-lg">Send the room size and your goal — we'll design a system and send an honest, itemized quote.</p>
          <Link href="/quote" className="bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 hover:brightness-105">
            Get a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}
