import { notFound } from 'next/navigation'
import PageHead from '@/components/PageHead'
import { programs } from '@/lib/programs'
export function generateStaticParams() { return programs.map((p) => ({ slug: p.slug })) }
export default function Program({ params }: { params: { slug: string } }) {
  const p = programs.find((x) => x.slug === params.slug)
  if (!p) notFound()
  return (<><PageHead tag="Program" title={p.title} intro={p.body} /><section className="wrap prose"><p>TODO: detail, schedule, how to join.</p></section></>)
}
