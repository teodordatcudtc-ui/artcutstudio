'use client';

import { useState, useEffect } from 'react';

const STATS = [
  { value: 'Ani', label: 'de experiență' },
  { value: 'Clienți', label: 'mulțumiți' },
  { value: '100%', label: 'dedicație' },
];

export function StatsStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % STATS.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="bg-accent text-dark py-4 sm:py-16"
      aria-label="Statistici"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Mobil: carusel subțire, un element vizibil, derulare automată */}
        <div className="sm:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="min-w-full flex flex-col items-center justify-center py-2"
              >
                <p className="font-display text-2xl font-semibold">{value}</p>
                <p className="text-dark/80 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-2" aria-hidden>
            {STATS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === activeIndex ? 'bg-dark' : 'bg-dark/30'
                }`}
                aria-label={`Statistică ${i + 1}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid 3 coloane ca înainte */}
        <div className="hidden sm:grid grid-cols-3 gap-8 sm:gap-12 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">{value}</p>
              <p className="mt-1 text-dark/80 text-sm sm:text-base font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
