import Link from 'next/link'

export default function Collage() {
  return (
<section className="collage-section" id="about">
  <div className="wrap collage-grid">
    <div className="collage">
      <div className="accent-strip"></div>
      <img className="c1" src="/images/photo-1.jpg" alt="Ecolara school outreach session" />
      <img className="c2" src="/images/photo-1.jpg" alt="Students engaging with climate education material" />
      <img className="c3" src="/images/photo-1.jpg" alt="Ecolara facilitator with students" />
    </div>
    <div className="collage-text">
      <span className="tag">Our story</span>
      <h2>What have we done with your support so far?</h2>
      <p>Since our first workshop in February 2026, Ecolara has reached over 200 secondary school students across Osogbo, delivering structured climate education on plastic waste, environmental health, and the 3Rs, in partnership with organizations like Kits on Earth.</p>
      <p>Every session runs on a pre and post-assessment model, so we know, not guess, whether students actually understood more by the end.</p>
      <div className="btn-row">
        <Link href="/about" className="btn btn-ghost">Read our full story</Link>
        <Link href="/donate" className="btn btn-primary">Donate now</Link>
      </div>
    </div>
  </div>
</section>
  )
}
