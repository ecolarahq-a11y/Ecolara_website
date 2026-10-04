import DetailPage from '@/components/DetailPage'
export default function Page({ params }: { params: { slug: string } }) { return <DetailPage type="book" slug={params.slug} back="/insights/library" /> }
