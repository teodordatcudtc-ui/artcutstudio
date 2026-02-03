'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export function HeroImage() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = containerRef.current?.querySelector('img');
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  if (error) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease-out' }}
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        className="object-cover object-[70%_50%]"
        sizes="100vw"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        priority
      />
    </div>
  );
}
