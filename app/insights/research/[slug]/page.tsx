import DetailPage from '@/components/DetailPage'
export default function Page({ params }: { params: { slug: string } }) { return <DetailPage type="report" slug={params.slug} back="/insights/research" /> }
