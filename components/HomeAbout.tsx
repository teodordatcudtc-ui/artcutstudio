import Link from 'next/link';

export function HomeAbout() {
  return (
    <section
      className="py-20 sm:py-28 bg-dark text-white relative"
      aria-labelledby="despre-heading"
    >
      <div className="absolute inset-0 bg-hex-pattern bg-[length:100px_170px] opacity-5 pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 id="despre-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Experiența arții groomingului
            </h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              La Art Cut Studio credem că o tunsoare nu e doar o tăietură – e un moment de încredere și de stil.
              Spațiul nostru, cu geometria lui distinctă și atmosfera premium, e gândit să te facă să te simți în siguranță și bine.
            </p>
            <p className="mt-4 text-white/70 text-base leading-relaxed">
              Echipa noastră combină tehnici clasice cu tendințe moderne, iar fiecare serviciu e adaptat nevoilor tale.
            </p>
            <Link
              href="/despre-noi"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-accent text-dark font-semibold rounded-sm hover:bg-accent/90 transition-colors focus-ring"
            >
              Despre noi
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] bg-charcoal/80 rounded-sm border border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
                [ Poză echipă / interior – adaugă în public/ ]
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-accent/40 rounded-lg rotate-6 -z-10" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
