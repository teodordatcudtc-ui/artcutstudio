import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { HeroImage } from '@/components/HeroImage';

export function Hero() {
  return (
    <section
      className="relative min-h-[78vh] sm:min-h-[82vh] flex flex-col overflow-hidden bg-dark"
      aria-label="Secțiune principală"
    >
      {/* Background: gradient + optional hero image (adaugă public/hero.jpg pentru poză) */}
      <div className="absolute inset-0 bg-charcoal bg-hex-pattern bg-[length:80px_140px]" />
      <HeroImage />
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-dark/70 to-accent-blue/20 pointer-events-none" />
      {/* Pe telefon fără gradient întunecat în stânga; pe desktop păstrăm */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent sm:from-dark sm:via-dark/85 sm:to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10 pointer-events-none" />

      {/* Hexagon decorative – geometric motif from location */}
      <div
        className="absolute top-12 right-8 w-24 h-24 sm:w-32 sm:h-32 border border-accent/30 rounded-lg rotate-12 z-20 opacity-60"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 left-10 w-16 h-16 border border-white/20 rounded-lg -rotate-6 z-20 opacity-40"
        aria-hidden
      />

      {/* Conținut centrat vertical și pe orizontală pe mobil, titlu mai mare pe telefon */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center sm:items-stretch text-center sm:text-left">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-xl mx-auto sm:mx-0">
            <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight animate-fade-in">
              Arta tăieturii.
              <br />
              <span className="whitespace-normal sm:whitespace-nowrap"><span className="text-accent">Experiența</span> face diferența.</span>
            </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-md mx-auto sm:mx-0 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Mai mult decât o frizerie – o destinație unde stilul și precizia se întâlnesc.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center sm:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-dark font-semibold rounded-sm hover:bg-accent/90 transition-colors focus-ring"
            >
              Programează-te
            </Link>
            <Link
              href="/servicii"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/50 text-white font-medium rounded-sm hover:bg-white/10 transition-colors focus-ring"
            >
              Servicii
            </Link>
          </div>
        </div>
        </div>
      </div>

      {/* Info strip – location, contact, hours */}
      <div className="relative z-20 bg-charcoal/95 backdrop-blur border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 sm:py-5 text-center sm:text-left">
            <div>
              <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">Locație</p>
              <p className="text-white/90 text-sm">{SITE.addressShort}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">Contact</p>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-white/90 text-sm hover:text-accent transition-colors">{SITE.phone}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">Program</p>
              <p className="text-white/90 text-sm">L–V 09:00–20:00 · S 10:00–18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
