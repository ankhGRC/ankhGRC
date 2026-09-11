import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.ankhgrc.com'

const routes = [
  '',
  '/about',
  '/services',
  '/industries',
  '/insights',
  '/contact',
  '/trust-center',
  '/privacy',
  '/terms',
  '/cookies',
  '/disclaimer',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
