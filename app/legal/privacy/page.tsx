import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Confidențialitate',
  description: 'Politica de confidențialitate Art Cut Studio.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-neutral mb-8">
          <Link href="/" className="hover:text-charcoal transition-colors">Acasă</Link>
          <span className="mx-2">/</span>
          <Link href="/legal/privacy" className="text-charcoal">Confidențialitate</Link>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-dark">
          Politica de confidențialitate
        </h1>
        <p className="mt-2 text-neutral">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>

        <div className="mt-10 prose prose-neutral max-w-none">
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">1. Introducere</h2>
            <p className="text-neutral leading-relaxed">
              Art Cut Studio (&quot;noi&quot;) respectă confidențialitatea vizitatorilor site-ului. Această politică descrie ce date colectăm și cum le folosim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">2. Date colectate</h2>
            <p className="text-neutral leading-relaxed">
              Putem colecta date pe care ni le furnizați direct: nume, email, telefon, mesaj (formular contact), precum și date tehnice (IP, tip browser) pentru funcționarea site-ului.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">3. Scopul prelucrării</h2>
            <p className="text-neutral leading-relaxed">
              Folosim datele pentru răspuns la solicitări, programări, îmbunătățirea serviciilor și respectarea obligațiilor legale.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">4. Drepturile tale</h2>
            <p className="text-neutral leading-relaxed">
              Conform GDPR, ai dreptul la acces, rectificare, ștergere, restricționare și portabilitate a datelor. Poți depune o plângere la ANSPDCP.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-dark mt-8 mb-3">5. Contact</h2>
            <p className="text-neutral leading-relaxed">
              Pentru întrebări despre confidențialitate: contact@artcutstudio.ro sau 0768 548 138.
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
