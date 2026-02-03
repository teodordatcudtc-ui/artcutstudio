import Link from 'next/link';
import { SERVICII } from '@/lib/constants';

export function HomeServices() {
  return (
    <section
      className="py-20 sm:py-28 bg-background relative overflow-hidden"
      aria-labelledby="servicii-heading"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hex-pattern bg-[length:60px_100px] opacity-30 pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 relative">
        <div className="max-w-2xl">
          <h2 id="servicii-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-dark leading-tight">
            Servicii făcute cu artă
          </h2>
          <p className="mt-4 text-neutral text-lg">
            De la tunsoare clasică la grooming complet – fiecare vizită contează.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICII.map((s, i) => (
            <Link
              key={s.slug}
              href={`/servicii/${s.slug}`}
              className="group block p-6 sm:p-8 bg-surface border border-charcoal/10 rounded-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-4xl font-display font-semibold text-accent/30 group-hover:text-accent/50 transition-colors">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-dark group-hover:text-charcoal">{s.title}</h3>
              <p className="mt-2 text-neutral text-sm">{s.shortDesc}</p>
              <p className="mt-4 text-accent font-semibold text-sm">{s.price}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/servicii"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-sm hover:bg-charcoal hover:text-white transition-colors focus-ring"
          >
            Toate serviciile
          </Link>
        </div>
      </div>
    </section>
  );
}
