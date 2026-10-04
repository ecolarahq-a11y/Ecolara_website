import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const client = createClient({ projectId: projectId || 'missing', dataset, apiVersion: '2024-10-01', useCdn: true })
const builder = imageUrlBuilder(client)
export const img = (src: any) => (src ? builder.image(src) : null)

// Returns fallback when Sanity is not configured, so the site runs locally with no CMS.
export async function q(query: string, params: any = {}, fallback: any = []) {
  if (!projectId) return fallback
  try { return await client.fetch(query, params, { next: { revalidate: 60 } } as any) } catch { return fallback }
}
