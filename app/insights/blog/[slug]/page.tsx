import DetailPage from '@/components/DetailPage'
export default function Page({ params }: { params: { slug: string } }) { return <DetailPage type="post" slug={params.slug} back="/insights/blog" /> }
