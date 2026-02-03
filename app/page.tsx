import { Hero } from '@/components/Hero';
import { StatsStrip } from '@/components/StatsStrip';
import { HomeServices } from '@/components/HomeServices';
import { HomeGallery } from '@/components/HomeGallery';
import { HomeAbout } from '@/components/HomeAbout';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <HomeServices />
      <HomeGallery />
      <HomeAbout />
    </>
  );
}
