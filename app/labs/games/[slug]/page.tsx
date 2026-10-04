import { notFound } from 'next/navigation'
import PageHead from '@/components/PageHead'
import { one } from '@/lib/content'
// mode "hosted": build lives in /public/games/<slug>/index.html. mode "external": uses playUrl.
export default async function Game({ params }: { params: { slug: string } }) {
  const g = await one('game', params.slug)
  if (!g) notFound()
  const src = g.mode === 'external' ? g.playUrl : `/games/${g.slug.current}/index.html`
  return (<><PageHead tag="Game" title={g.title} intro={g.summary} />
    <div className="wrap" style={{ paddingBottom: 80 }}>
      <iframe className="player" src={src} title={g.title} sandbox="allow-scripts allow-same-origin allow-pointer-lock" allowFullScreen />
      {g.instructions && <p className="lead">{g.instructions}</p>}
    </div></>)
}
