const STATS = [
  { value: 'Ani', label: 'de experiență' },
  { value: 'Clienți', label: 'mulțumiți' },
  { value: '100%', label: 'dedicație' },
];

export function StatsStrip() {
  return (
    <section
      className="bg-accent text-dark py-12 sm:py-16"
      aria-label="Statistici"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
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
