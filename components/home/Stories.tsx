import Link from 'next/link'

export default function Stories() {
  return (
<section className="stories">
  <div className="wrap">
    <div className="stories-head">
      <div>
        <span className="tag" style={{color: 'var(--green-leaf)', fontWeight: '600', display: 'block', marginBottom: '8px'}}>Stories from the field</span>
        <h2>What students are learning and doing</h2>
      </div>
      <Link href="/impact" className="btn btn-ghost">Read more stories</Link>
    </div>
    <div className="story-grid">
      <div className="story-card">
        <div className="story-photo"><div className="ph" style={{ height: '100%', aspectRatio: 'auto' }}>Photo needed</div></div>
        <div className="story-body">
          <h3>Nawarudeen Grammar School</h3>
          <p>Students explored the 3Rs and left with a working plan to reduce plastic waste around their compound.</p>
          <Link href="/impact">Read the story →</Link>
        </div>
      </div>
      <div className="story-card">
        <div className="story-photo"><img src="/images/photo-1.jpg" alt="Ogidan Grammar School students holding an environmental sign" /></div>
        <div className="story-body">
          <h3>Ogidan Grammar School</h3>
          <p>"A clean, safe, healthy and sustainable environment," in their own words, after our Green Health Workshop.</p>
          <Link href="/impact">Read the story →</Link>
        </div>
      </div>
      <div className="story-card">
        <div className="story-photo"><div className="ph" style={{ height: '100%', aspectRatio: 'auto' }}>Photo needed</div></div>
        <div className="story-body">
          <h3>Bello Memorial Primary</h3>
          <p>Younger students met climate change for the first time through games, a puzzle, and a pledge.</p>
          <Link href="/impact">Read the story →</Link>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
