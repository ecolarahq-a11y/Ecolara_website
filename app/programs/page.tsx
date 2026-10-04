import Link from 'next/link'
import PageHead from '@/components/PageHead'
import { programs } from '@/lib/programs'
export default function Programs() {
  return (<><PageHead tag="Programs" title="What we run" intro="Every programme is built to make climate action accessible." />
    <div className="wrap" style={{ paddingBottom: 80 }}>{programs.map((p, i) => (
      <Link key={p.slug} href={`/programs/${p.slug}`} className="list-row"><span><b>{String(i + 1).padStart(2, '0')}</b> &nbsp; {p.title}</span><span>{p.body}</span></Link>))}</div></>)
}
