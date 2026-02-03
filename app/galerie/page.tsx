import type { Metadata } from 'next';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/lib/gallery-images';

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Imagini din interiorul Art Cut Studio – atmosferă, echipă și servicii.',
};

const GALLERY_PATH = '/images/gallery';

export default function GaleriePage() {
  return (
    <div className="bg-background">
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-dark leading-tight">
              Galerie
            </h1>
            <p className="mt-4 text-neutral text-lg">
              Atmosfera și detaliile care fac din Art Cut Studio un loc aparte.
            </p>
          </div>

          {GALLERY_IMAGES.length > 0 ? (
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {GALLERY_IMAGES.map((filename) => (
                <div
                  key={filename}
                  className="relative aspect-[4/3] rounded-sm overflow-hidden border border-charcoal/10 bg-charcoal/5"
                >
                  <Image
                    src={`${GALLERY_PATH}/${filename}`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-14 rounded-sm border border-charcoal/10 bg-charcoal/5 border-dashed py-16 text-center">
              <p className="text-neutral mb-2">
                Adaugă pozele în folderul <strong>public/images/gallery/</strong>
              </p>
              <p className="text-neutral text-sm">
                și numele fișierelor în <strong>lib/gallery-images.ts</strong> (ex:{' '}
                <code className="bg-charcoal/10 px-1 rounded">{`['1.jpg', '2.jpg', '3.jpg']`}</code>).
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
