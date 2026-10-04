import Link from 'next/link'

export default function CtaBand() {
  return (
<section className="cta-band" id="get-involved">
  <div className="blob"></div>
  <div className="wrap">
    <h2>Climate action needs more hands.</h2>
    <p>Whether you can teach a session, join an outreach, or support the work with a donation, there's a place for you at Ecolara.</p>
    <div className="cta-actions">
      <Link href="https://forms.gle/xSmxqkCSeZ4Qp3pK6" className="btn btn-primary">Volunteer with us</Link>
      <Link href="/donate" className="btn btn-amber">Donate</Link>
    </div>
  </div>
</section>
  )
}
