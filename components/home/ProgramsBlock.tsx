import Link from 'next/link'

export default function ProgramsBlock() {
  return (
<section className="programs" id="programs">
  <div className="wrap">
    <div className="section-head">
      <span className="tag">What we do</span>
      <h2>Six programmes, one goal</h2>
      <p>Every programme is built to make climate action accessible, whether in a classroom or a community cleanup.</p>
    </div>
    <div className="program-grid">
      <div className="program-card"><div className="icon-glyph">01</div><h3>School Outreach</h3><p>The Green Health Workshop Series, delivered directly into secondary schools across Osun State.</p></div>
      <div className="program-card"><div className="icon-glyph">02</div><h3>Climate Campaigns</h3><p>Public mobilization around key dates like World Cleanup Day and World Environment Day.</p></div>
      <div className="program-card"><div className="icon-glyph">03</div><h3>Volunteer Network</h3><p>Coordinated volunteers across outreach, media, and tech, keeping every programme running.</p></div>
      <div className="program-card"><div className="icon-glyph">04</div><h3>Community Projects</h3><p>Cleanups and waste sorting initiatives, led with the communities they serve.</p></div>
      <div className="program-card"><div className="icon-glyph">05</div><h3>Tree Planting</h3><p>Planting activities that connect students to the long-term health of their environment.</p></div>
      <div className="program-card"><div className="icon-glyph">06</div><h3>Youth Ambassadors</h3><p>A leadership track for young people who want to represent Ecolara in their own schools.</p></div>
    </div>
  </div>
</section>
  )
}
