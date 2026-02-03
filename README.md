# Art Cut Studio – Site web

Site multi-pagină Next.js (App Router) pentru **Art Cut Studio**, frizerie premium București.

---

## Stack

- **Next.js 14** (App Router) – routing, RSC, metadata, sitemap/robots
- **React 18** + **TypeScript**
- **Tailwind CSS** – design system, animații, responsive

**De ce App Router:** layout-uri pe segment, metadata per pagină, `generateStaticParams` pentru servicii, `sitemap.ts` / `robots.ts` native.

---

## Structură pagini (URL-uri reale)

| Pagină        | URL                    |
|---------------|------------------------|
| Acasă         | `/`                    |
| Despre noi    | `/despre-noi`          |
| Servicii      | `/servicii`            |
| Serviciu      | `/servicii/[slug]`     |
| Galerie       | `/galerie`             |
| Contact       | `/contact`             |
| Confidențialitate | `/legal/privacy`   |
| Termeni       | `/legal/terms`         |
| Sitemap       | `/sitemap.xml`         |
| Robots        | `/robots.txt`          |

Navigarea este prin **linkuri reale** (nu anchor scroll). Toate linkurile deschid în același tab.

---

## Comenzi (copy-paste)

```bash
# Instalare dependențe
npm install

# Development
npm run dev

# Build production
npm run build

# Rulare după build
npm start

# Lint
npm run lint
```

După `npm run dev`, site-ul este disponibil la **http://localhost:3000**.

---

## TO-DO list post-generare (verificare)

- [ ] **Dependențe** – rulează `npm install` în rădăcina proiectului.
- [ ] **Build** – rulează `npm run build` și confirmă că nu există erori.
- [ ] **Imagini** – Toate pozele (inclusiv hero) merg în **public/images/**:
  - **Hero:** pune **hero.jpg** (sau hero.png) în `public/images/` – fundalul primei pagini o folosește automat.
  - **Galerie:** pune pozele în `public/images/gallery/`, apoi adaugă numele fișierelor în **lib/gallery-images.ts** (ex: `['1.jpg', '2.jpg', '3.jpg']`).
- [ ] **Alte imagini** – înlocuiește placeholder-ele din Despre noi și Servicii cu imagini reale (sau leagă de un CMS).
- [ ] **Formular contact** – în `components/ContactForm.tsx` înlocuiește logica de submit (fetch la API/email service) cu endpoint-ul tău real.
- [ ] **Domeniu** – în `lib/constants.ts`, `app/sitemap.ts` și `app/robots.ts` este folosit `https://artcutstudio.ro`; schimbă la domeniul real dacă e cazul.
- [ ] **SEO** – verifică titlurile și descrierile în browser și cu un tool de preview (ex. Facebook Debugger, Twitter Card Validator).
- [ ] **Accesibilitate** – testează cu tastatura (Tab, Enter), un screen reader și validează cu Lighthouse (Accessibility).
- [ ] **Mobile** – verifică pe dispozitiv real sau DevTools responsive.

---

## Design

- **Paletă:** fundal deschis (#F8F8F8), accent închis (#2C2C2C), accent auriu (#C9A962), albastru (#0A2351), text neutru (#555).
- **Tipografie:** Playfair Display (titluri), DM Sans (body).
- **Elemente:** asimetrie controlată, pattern hexagonal discret, secțiuni cu identitate vizuală distinctă (strip auriu, blocuri dark/light).

---

## Legal

- **Confidențialitate:** `/legal/privacy`
- **Termeni:** `/legal/terms`
- **Sitemap:** `/sitemap.xml`
- **Robots:** `/robots.txt`

Google Maps embed este inclus pe pagina Contact (iframe-ul furnizat de tine).

---

## npm audit – vulnerabilități

După `npm install` pot apărea **avertismente de deprecare** (inflight, glob, rimraf, eslint 8) și **5 vulnerabilități** raportate de `npm audit`:

- **Next.js** și **eslint-config-next** – remedieri complete în Next 15.5.10+ / 16.x. În 14.x am eliminat `remotePatterns` permissive din `next.config.js` pentru a reduce riscul la Image Optimizer.
- **ESLint** (moderate) și **glob** (high, în tooling) – rezolvare completă necesită trecere la ESLint 9 și la o versiune mai nouă de `eslint-config-next` (Next 15/16), adică schimbări majore.

Recomandare: pentru producție, când e posibil, planifică un upgrade la Next 15 sau 16 și la ESLint 9. Până atunci, build-ul și rularea site-ului rămân sigure pentru uz normal; vulnerabilitățile raportate afectează în special scenarii de DoS sau folosirea tooling-ului ESLint/glob în mod neobișnuit.
