import Link from 'next/link'
import { img } from '@/lib/sanity'
export function Card({ item, base }: { item: any; base: string }) {
  const src = item.cover ? img(item.cover)?.width(640).height(400).url() : null
  return (
    <Link href={`${base}/${item.slug}`} className="card">
      {src ? <img src={src} alt="" /> : <div className="ph">No cover yet</div>}
      <div className="card-body">
        {item.kind && <p className="label">{item.kind}</p>}
        <h3>{item.title}</h3>
        {item.summary && <p>{item.summary}</p>}
      </div>
    </Link>
  )
}
export function Grid({ items, base, empty }: { items: any[]; base: string; empty?: string }) {
  if (!items?.length) return <p className="empty wrap">{empty || 'Nothing published here yet.'}</p>
  return <div className="grid wrap">{items.map((i) => <Card key={i.slug} item={i} base={base} />)}</div>
}
