import PageHead from '@/components/PageHead'
const url = process.env.NEXT_PUBLIC_FLUTTERWAVE_DONATE_URL
export default function Donate() {
  return (<><PageHead tag="Donate" title="Support the work" intro="State plainly where the money goes." />
    <section className="wrap page-actions" style={{ paddingBottom: 80 }}><a className="btn btn-primary" href={url || '#'}>Donate with Flutterwave</a></section></>)
}
