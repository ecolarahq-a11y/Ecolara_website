import DetailPage from '@/components/DetailPage'
export default function Report({ params }: { params: { slug: string } }) { return <DetailPage type="outreachReport" slug={params.slug} back="/impact" /> }
