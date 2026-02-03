IMAGINI ART CUT STUDIO
======================

• Hero (fundal prima pagină)
  - Desktop: hero.jpg → public/images/hero.jpg
  - Telefon: hero-mobile.jpg → public/images/hero-mobile.jpg
  (Dacă hero-mobile.jpg lipsește, pe telefon se folosește gradientul.)

• Galerie
  Pune pozele pentru pagina Galerie în subfolder-ul gallery/.
  Apoi adaugă numele fișierelor în fișierul: lib/gallery-images.ts
  Exemplu: public/images/gallery/1.jpg, 2.jpg, 3.jpg
  În gallery-images.ts scrie: export const GALLERY_IMAGES = ['1.jpg', '2.jpg', '3.jpg'];
