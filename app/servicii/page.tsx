import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICII } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Servicii',
  description:
    'Servicii Art Cut Studio: tunsoare, barbă, grooming premium. Prețuri și durate pentru fiecare serviciu.',
};

export default function ServiciiPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hex-pattern bg-[length:60px_100px] opacity-20 pointer-events-none" aria-hidden />
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 relative">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-dark leading-tight">
              Servicii
            </h1>
            <p className="mt-6 text-neutral text-lg">
              Soluții de grooming adaptate fiecărui stil. Alege serviciul potrivit pentru tine.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICII.map((s) => (
              <Link
                key={s.slug}
                href={`/servicii/${s.slug}`}
                className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-surface border border-charcoal/10 rounded-sm hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-charcoal/10 rounded-sm flex items-center justify-center text-accent font-display text-2xl font-semibold group-hover:bg-accent/10 transition-colors">
                  {s.duration}
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-semibold text-dark group-hover:text-charcoal">{s.title}</h2>
                  <p className="mt-2 text-neutral">{s.shortDesc}</p>
                  <p className="mt-4 text-accent font-semibold">{s.price}</p>
                </div>
                <span className="self-start sm:self-center text-charcoal group-hover:translate-x-1 transition-transform" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
