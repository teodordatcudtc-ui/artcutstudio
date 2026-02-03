import { MetadataRoute } from 'next';

const BASE = 'https://artcutstudio.ro';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: [] },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
