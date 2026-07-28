import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omnili.site'

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
  }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    ...projectUrls,
  ]
}
