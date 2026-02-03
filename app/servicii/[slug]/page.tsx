import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICII } from '@/lib/constants';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICII.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const serviciu = SERVICII.find((s) => s.slug === slug);
  if (!serviciu) return { title: 'Serviciu' };
  return {
    title: serviciu.title,
    description: `${serviciu.shortDesc} – ${serviciu.price}. Art Cut Studio, București.`,
  };
}

export default async function ServiciuPage({ params }: Props) {
  const { slug } = await params;
  const serviciu = SERVICII.find((s) => s.slug === slug);
  if (!serviciu) notFound();

  return (
    <div className="bg-background">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral mb-8">
            <Link href="/servicii" className="hover:text-charcoal transition-colors">
              Servicii
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{serviciu.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-dark leading-tight">
                {serviciu.title}
              </h1>
              <p className="mt-6 text-neutral text-lg leading-relaxed">
                {serviciu.shortDesc}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">Preț</p>
                  <p className="text-xl font-semibold text-dark">{serviciu.price}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">Durată</p>
                  <p className="text-xl font-semibold text-dark">{serviciu.duration}</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-accent text-dark font-semibold rounded-sm hover:bg-accent/90 transition-colors focus-ring"
              >
                Programează-te
              </Link>
            </div>
            <div className="aspect-[4/3] bg-charcoal/10 rounded-sm border border-charcoal/10 flex items-center justify-center text-neutral/40 text-sm">
              [ Imagine serviciu – opțional ]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
