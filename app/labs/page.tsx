import Link from 'next/link'
import PageHead from '@/components/PageHead'
export default function Labs() {
  return (<><PageHead tag="Ecolara Labs" title="Games and the app" intro="Where Ecolara builds things people can play." /><div className="wrap" style={{ paddingBottom: 80 }}>
    <Link href="/labs/games" className="list-row"><span>Games</span><span>Play in the browser</span></Link>
    <Link href="/labs/app" className="list-row"><span>The Ecolara app</span><span>Learning, streaks, missions</span></Link></div></>)
}
