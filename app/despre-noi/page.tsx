import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Despre noi',
  description:
    'Misiunea și viziunea Art Cut Studio – frizerie premium pe Bulevardul Iuliu Maniu. Echipa noastră și povestea locului.',
};

export default function DespreNoiPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern bg-[length:80px_140px] opacity-20 pointer-events-none" aria-hidden />
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-dark leading-tight">
              Despre noi
            </h1>
            <p className="mt-6 text-neutral text-lg leading-relaxed">
              Art Cut Studio este mai mult decât o frizerie – este locul unde arta tăieturii se întâlnește cu experiența.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-dark text-white">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-accent">Misiune</h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                Să oferim fiecărui client o experiență de grooming de neuitat: profesionalism, atenție la detalii și un spațiu în care te simți bine.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-accent">Viziune</h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                Să fim recunoscuți ca destinația premium de grooming din București – unde stilul clasic și cel modern se întâlnesc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-dark">Echipa noastră</h2>
          <p className="mt-3 text-neutral max-w-xl">
            Barberi pasionați, cu experiență în tunsori clasice și moderne. Fiecare vizită e tratată cu același nivel de dedicare.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-charcoal/10 rounded-sm overflow-hidden border border-charcoal/10">
                  <div className="w-full h-full flex items-center justify-center text-neutral/40 text-sm">
                    [ Foto echipă ]
                  </div>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-dark">Membru echipă</h3>
                <p className="text-neutral text-sm">Barber</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-dark">Povestea locului</h2>
          <p className="mt-4 text-neutral max-w-2xl mx-auto leading-relaxed">
            Spațiul nostru a fost gândit cu atenție la detalii: lumină naturală, geometrie distinctă și un ambient care te invită să te relaxezi.
            Te așteptăm pe Bulevardul Iuliu Maniu 69.
          </p>
        </div>
      </section>
    </div>
  );
}
