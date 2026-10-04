import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { one } from '@/lib/content'
import { img } from '@/lib/sanity'
import Gallery from './Gallery'
export default async function DetailPage({ type, slug, back }: any) {
  const d = await one(type, slug)
  if (!d) notFound()
  const cover = d.cover ? img(d.cover)?.width(1200).url() : null
  const pics = (d.gallery || []).map((g: any) => ({
    thumb: img(g)!.width(480).height(320).fit('crop').url(),
    full: img(g)!.width(1800).fit('max').url(),
    caption: g.caption,
  }))
  return (
    <article className="wrap article">
      <a href={back} className="label">Back</a>
      <h1>{d.title}</h1>
      {d.summary && <p className="lead">{d.summary}</p>}
      {cover && <img src={cover} alt="" className="hero-img" />}
      {d.body && <div className="prose"><PortableText value={d.body} /></div>}
      {pics.length > 0 && <Gallery images={pics} />}
      {d.fileUrl && <a className="btn btn-primary" href={d.fileUrl} download>Download</a>}
      {d.buyUrl && <a className="btn btn-ghost" href={d.buyUrl}>Get a copy</a>}
      {d.link && <a className="btn btn-ghost" href={d.link}>Open</a>}
    </article>
  )
}
