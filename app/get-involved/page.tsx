import PageHead from '@/components/PageHead'
const form = process.env.NEXT_PUBLIC_VOLUNTEER_FORM_URL
export default function Involved() {
  return (<><PageHead tag="Get involved" title="Climate action needs more hands" intro="Volunteer, partner or sponsor." />
    <section className="wrap" style={{ paddingBottom: 80 }}>
      <a className="btn btn-primary" href={form || '#'}>Volunteer application</a>
      <a className="btn btn-ghost" href="/donate">Donate</a><a className="btn btn-ghost" href="/contact">Partner with us</a></section></>)
}
