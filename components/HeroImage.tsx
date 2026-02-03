'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const HERO_DESKTOP = '/images/hero.jpg';
const HERO_MOBILE = '/images/hero-mobile.jpg';

export function HeroImage() {
  const [loaded, setLoaded] = useState(false);
  const [errorDesktop, setErrorDesktop] = useState(false);
  const [errorMobile, setErrorMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgs = containerRef.current?.querySelectorAll('img');
    imgs?.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) setLoaded(true);
    });
  }, []);

  const bothFailed = errorDesktop && errorMobile;
  if (bothFailed) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease-out' }}
    >
      {/* Vizibil doar pe telefon (până la 640px); dacă hero-mobile lipsește, folosește hero.jpg */}
      <div className="absolute inset-0 sm:hidden">
        {!errorMobile && (
          <Image
            src={HERO_MOBILE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            onLoad={() => setLoaded(true)}
            onError={() => setErrorMobile(true)}
            priority
          />
        )}
        {errorMobile && (
          <Image
            src={HERO_DESKTOP}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            onLoad={() => setLoaded(true)}
            onError={() => setErrorDesktop(true)}
            priority
          />
        )}
      </div>
      {/* Vizibil doar pe desktop (640px și mai mare) */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src={HERO_DESKTOP}
          alt=""
          fill
          className="object-cover object-[70%_50%]"
          sizes="100vw"
          onLoad={() => setLoaded(true)}
          onError={() => setErrorDesktop(true)}
          priority
        />
      </div>
    </div>
  );
}
