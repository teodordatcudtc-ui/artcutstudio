import Link from 'next/link';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/lib/gallery-images';

const GALLERY_PATH = '/images/gallery';
const PREVIEW_COUNT = 4;

export function HomeGallery() {
  const images = GALLERY_IMAGES.slice(0, PREVIEW_COUNT);

  if (images.length === 0) return null;

  return (
    <section
      className="py-20 sm:py-28 bg-surface border-t border-charcoal/10"
      aria-labelledby="galerie-preview-heading"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h2 id="galerie-preview-heading" className="font-display text-3xl sm:text-4xl font-semibold text-dark leading-tight">
              Galerie
            </h2>
            <p className="mt-2 text-neutral">
              O privire în interiorul Art Cut Studio.
            </p>
          </div>
          <Link
            href="/galerie"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-sm hover:bg-charcoal hover:text-white transition-colors focus-ring shrink-0"
          >
            Vezi toată galeria
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((filename) => (
            <div
              key={filename}
              className="relative aspect-[4/3] rounded-sm overflow-hidden border border-charcoal/10"
            >
              <Image
                src={`${GALLERY_PATH}/${filename}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
