'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV, SITE } from '@/lib/constants';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-charcoal/10"
      role="banner"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <Link
          href="/"
          className="font-display text-xl sm:text-2xl font-semibold text-dark focus-ring rounded"
          aria-label="Art Cut Studio – Acasă"
        >
          Art Cut Studio
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navigație principală"
        >
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors focus-ring rounded ${
                pathname === href ? 'text-charcoal' : 'text-neutral hover:text-charcoal'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-accent text-dark font-semibold text-sm rounded-sm hover:bg-accent/90 transition-colors focus-ring"
        >
          Programare
        </Link>

        <button
          type="button"
          className="md:hidden p-2 text-charcoal focus-ring rounded"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
        >
          <span className="sr-only">{open ? 'Închide' : 'Meniul'}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden border-t border-charcoal/10 ${open ? 'block' : 'hidden'}`}
        aria-hidden={!open}
      >
        <nav className="px-5 py-4 flex flex-col gap-2" aria-label="Navigație mobilă">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-2 text-base font-medium focus-ring rounded ${
                pathname === href ? 'text-charcoal' : 'text-neutral'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-accent text-dark font-semibold rounded-sm"
          >
            Programare
          </Link>
        </nav>
      </div>
    </header>
  );
}
