import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://www.ankhgrc.com'
const lastModified = new Date('2026-09-11')

const routes = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/consulting', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/information-security', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/privacy-data-protection', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/ai-governance', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/cybersecurity-regulation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industry-specific-regulations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/cross-border', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/certifications', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/training', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/partnerships', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/industries', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/trust-center', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
