import Link from 'next/link'

export default function Impact() {
  return (
<section className="impact">
  <div className="blob blob-a"></div>
  <div className="wrap impact-grid">
    <div className="impact-text">
      <span className="tag">Where we work</span>
      <h2>We go where the classrooms are, not where the cameras are.</h2>
      <p>Ecolara's work is rooted in Osun State, in public schools and communities that formal climate education rarely reaches. Every number below comes from a session we actually ran.</p>
      <div className="impact-stats">
        <div className="impact-stat"><div className="n">500+</div><div className="l">Secondary school students reached</div></div>
        <div className="impact-stat"><div className="n">3</div><div className="l">Schools engaged so far</div></div>
        <div className="impact-stat"><div className="n">2026</div><div className="l">First workshop delivered</div></div>
        <div className="impact-stat"><div className="n">1</div><div className="l">Active outreach partner (Kits on Earth)</div></div>
      </div>
    </div>
    <div className="map-panel">
      <svg viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="70" stroke="#43A047" strokeWidth="1" strokeDasharray="3 4" opacity="0.5"/>
        <path d="M70 60 Q100 40 130 60 Q145 90 130 130 Q100 150 70 130 Q55 90 70 60 Z" fill="rgba(67,160,69,0.25)" stroke="#43A047" strokeWidth="1.5"/>
      </svg>
      <div className="pin" style={{top: '44%', left: '47%'}}></div>
      <div className="pin" style={{top: '52%', left: '56%'}}></div>
      <div className="pin" style={{top: '58%', left: '44%'}}></div>
    </div>
  </div>
</section>
  )
}
