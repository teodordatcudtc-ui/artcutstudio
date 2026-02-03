import Link from 'next/link';
import { NAV, SITE, LEGAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer
      className="bg-dark text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-display text-xl font-semibold mb-4">Art Cut Studio</h2>
            <p className="text-neutral-light text-sm leading-relaxed max-w-xs">
              Frizerie premium pe Bulevardul Iuliu Maniu. Experiență de grooming de neuitat.
            </p>
          </div>

          <nav aria-label="Linkuri footer">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Navigare
            </h3>
            <ul className="space-y-2">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-light hover:text-white text-sm transition-colors focus:outline-none focus-visible:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-neutral-light">
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors focus:outline-none focus-visible:underline">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors focus:outline-none focus-visible:underline">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.addressShort}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-light hover:text-white text-sm transition-colors focus:outline-none focus-visible:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-neutral-light hover:text-white text-sm transition-colors focus:outline-none focus-visible:underline"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal/50 text-center text-neutral-light text-sm">
          <p>© {new Date().getFullYear()} Art Cut Studio. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
