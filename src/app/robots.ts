import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/_next/image*',
        '/_next/static/*'
      ],
      disallow: [
        '/private/',
        '/admin/',
        '/api/',
        '/_next/data/*'  // Protect API routes and dynamic data
      ],
    },
    sitemap: 'https://dragongardensaipan.com/sitemap.xml',
  }
} 