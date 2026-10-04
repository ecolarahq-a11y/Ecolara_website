import Link from 'next/link'

export default function IconRow() {
  return (
<section className="icon-row">
  <div className="wrap icon-grid">
    <div className="icon-item">
      <div className="icon-glyph">01</div>
      <h3>School Outreach</h3>
      <p>Interactive workshops taken directly into classrooms.</p>
    </div>
    <div className="icon-item">
      <div className="icon-glyph">02</div>
      <h3>Community Action</h3>
      <p>Cleanups, tree planting, and local campaigns.</p>
    </div>
    <div className="icon-item">
      <div className="icon-glyph">03</div>
      <h3>Ecolara Labs</h3>
      <p>A gamified app where learning continues daily.</p>
    </div>
    <div className="icon-item">
      <div className="icon-glyph">04</div>
      <h3>Real Impact Data</h3>
      <p>Pre and post assessments on every programme.</p>
    </div>
  </div>
</section>
  )
}
