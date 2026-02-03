import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termeni și condiții',
  description: 'Termenii și condițiile de utilizare pentru Art Cut Studio.',
};

export default function TermsPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-neutral mb-8">
          <Link href="/" className="hover:text-charcoal transition-colors">Acasă</Link>
          <span className="mx-2">/</span>
          <Link href="/legal/terms" className="text-charcoal">Termeni și condiții</Link>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-dark">
          Termeni și condiții
        </h1>
        <p className="mt-2 text-neutral">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>

        <div className="mt-10 prose prose-neutral max-w-none">
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">1. Acceptarea termenilor</h2>
            <p className="text-neutral leading-relaxed">
              Accesând și folosind site-ul Art Cut Studio, accepți acești termeni și condiții.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">2. Servicii</h2>
            <p className="text-neutral leading-relaxed">
              Informațiile de pe site (prețuri, program) sunt orientative. Pentru programări și confirmări finale, contactează-ne direct.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">3. Proprietate intelectuală</h2>
            <p className="text-neutral leading-relaxed">
              Conținutul site-ului (texte, imagini, design) este protejat. Nu este permisă copierea sau utilizarea fără acordul nostru.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">4. Limitarea răspunderii</h2>
            <p className="text-neutral leading-relaxed">
              Nu ne asumăm răspundere pentru daune indirecte rezultate din utilizarea site-ului sau a serviciilor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">5. Contact</h2>
            <p className="text-neutral leading-relaxed">
              Pentru întrebări: contact@artcutstudio.ro sau 0768 548 138.
            </p>
          </section>
        </div>

        <p className="mt-12">
          <Link href="/" className="text-accent font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
            ← Înapoi la Acasă
          </Link>
        </p>
      </div>
    </div>
  );
}
