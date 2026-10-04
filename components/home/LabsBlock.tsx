import Link from 'next/link'

export default function LabsBlock() {
  return (
<section className="labs" id="labs">
  <div className="blob"></div>
  <div className="wrap labs-grid">
    <div>
      <span className="tag">Ecolara Labs</span>
      <h2>The app we're building, so learning never stops at the classroom door.</h2>
      <p>A gamified platform where students keep learning after the workshop ends, complete eco missions, and earn recognition for real environmental action.</p>
      <ul className="labs-feature-list">
        <li><span className="dot"></span>Daily climate lessons and quizzes</li>
        <li><span className="dot"></span>An AI mentor for questions along the way</li>
        <li><span className="dot"></span>EcoPoints for verified environmental actions</li>
        <li><span className="dot"></span>Streaks, levels, and community leaderboards</li>
      </ul>
      <Link href="/labs/app" className="btn btn-amber">Join the waitlist</Link>
    </div>
    <div className="phone-mock">App preview, coming soon</div>
  </div>
</section>
  )
}
