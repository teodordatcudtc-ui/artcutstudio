import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contactează Art Cut Studio: ${SITE.address}, ${SITE.phone}. Program și programare.`,
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-dark leading-tight">
              Contact
            </h1>
            <p className="mt-4 text-neutral text-lg">
              Vizitează-ne sau scrie-ne. Te așteptăm.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-xl font-semibold text-dark mb-6">Date contact</h2>
              <ul className="space-y-4 text-neutral">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-accent font-semibold mb-1">Adresă</span>
                  {SITE.address}
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-accent font-semibold mb-1">Telefon</span>
                  <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-charcoal transition-colors focus:outline-none focus-visible:underline">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-accent font-semibold mb-1">Email</span>
                  <a href={`mailto:${SITE.email}`} className="hover:text-charcoal transition-colors focus:outline-none focus-visible:underline">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-accent font-semibold mb-1">Program</span>
                  L–V 09:00–20:00 · Sâmbătă 10:00–18:00
                </li>
              </ul>

              <h2 className="font-display text-xl font-semibold text-dark mt-10 mb-6">Trimite un mesaj</h2>
              <ContactForm />
            </div>

            <div className="lg:pl-4">
              <h2 className="font-display text-xl font-semibold text-dark mb-6">Locație</h2>
              <div className="rounded-sm overflow-hidden border border-charcoal/10 aspect-[4/3] min-h-[300px]">
                <iframe
                  src={SITE.mapEmbed}
                  width="600"
                  height="450"
                  style={{ border: 0, width: '100%', height: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Art Cut Studio pe Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
