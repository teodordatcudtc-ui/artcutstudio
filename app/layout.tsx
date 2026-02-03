import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://artcutstudio.ro'),
  title: {
    default: 'Art Cut Studio – Frizerie Premium București',
    template: '%s | Art Cut Studio',
  },
  description:
    'Art Cut Studio – frizerie premium pe Bulevardul Iuliu Maniu, București. Tunsoare, barbă, styling. Experiență de grooming de neuitat.',
  keywords: ['frizerie', 'București', 'tunsoare', 'barbă', 'grooming', 'Art Cut Studio'],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-dark focus:rounded">
          Sari la conținut
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
