import { q } from './sanity'
const card = `title, "slug": slug.current, summary, cover, publishedAt, kind`
export const list = (type: string, limit = 100) => q(`*[_type==$t]|order(publishedAt desc)[0...$n]{${card}}`, { t: type, n: limit })
export const one = (type: string, slug: string) => q(`*[_type==$t && slug.current==$s][0]{..., "fileUrl": file.asset->url}`, { t: type, s: slug }, null)
export const settings = () => q(`*[_type=="siteSettings"][0]`, {}, null)
