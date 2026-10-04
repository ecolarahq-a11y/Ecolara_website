import Link from 'next/link'

export default function Hero() {
  return (
<section className="hero">
  <div className="hero-bg-shape"></div>
  <div className="wrap hero-grid">
    <div>
      <span className="eyebrow-badge"><span className="dot"></span>Osogbo, Osun State, Nigeria</span>
      <h1>Climate action, made something young Nigerians actually want to do.</h1>
      <p className="lead">Ecolara combines school outreach, community action, and a gamified digital platform to turn climate education into daily habits, not one-off lectures.</p>
      <div className="hero-ctas">
        <Link href="/get-involved" className="btn btn-amber">Volunteer with us</Link>
        <Link href="/programs" className="btn btn-ghost">See our programs</Link>
      </div>
    </div>
    <div className="hero-map-wrap">
      <div className="splash splash-amber"></div>
      <div className="splash splash-green"></div>
      <div className="splash splash-green-2"></div>
      <div className="map-photo">
        <img src="/images/photo-1.jpg" alt="Students at Ogidan Grammar School holding a sign reading A Clean, Safe, Healthy and Sustainable Environment, shown masked in the shape of Nigeria" />
      </div>
      <div className="float-tape">Green Health Workshop</div>
      <div className="float-card float-card-stat">
        <div className="n">500+</div>
        <div className="l">students reached<br />across Osun State</div>
      </div>
    </div>
  </div>
</section>
  )
}
