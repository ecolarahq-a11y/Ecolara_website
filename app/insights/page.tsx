import Link from 'next/link'
import PageHead from '@/components/PageHead'
const parts = [
  ['Blog', '/insights/blog', 'Stories and opinion.'], ['Research and papers', '/insights/research', 'Reports, studies and papers.'],
  ['Books', '/insights/library', 'Books written and published by Ecolara.'], ['Comics', '/insights/comics', 'Issues of the Ecolara comic.'],
  ['New releases', '/insights/releases', 'Toolkits, card games and other new drops.'],
]
export default function Insights() {
  return (<><PageHead tag="Ecolara Insights" title="Read, learn, download" /><div className="wrap" style={{ paddingBottom: 80 }}>
    {parts.map(([t, h, d]) => <Link key={h} href={h} className="list-row"><span>{t}</span><span>{d}</span></Link>)}</div></>)
}
