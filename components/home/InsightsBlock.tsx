import Link from 'next/link'

export default function InsightsBlock() {
  return (
<section className="insights" id="insights">
  <div className="wrap">
    <div className="insights-head">
      <div>
        <span className="tag" style={{color: 'var(--green-leaf)', fontWeight: '600', display: 'block', marginBottom: '8px'}}>Ecolara Insights</span>
        <h2>Research, reports, and stories</h2>
      </div>
      <Link href="/insights/blog" className="btn btn-ghost">View all posts</Link>
    </div>
    <div className="post-grid">
      <div className="post-card">
        <div className="post-thumb">Field notes</div>
        <div className="post-body"><span className="post-tag">Outreach</span><h3>What 200 students taught us about climate literacy</h3><p>Early results from our pre and post-session assessments.</p></div>
      </div>
      <div className="post-card">
        <div className="post-thumb">Research</div>
        <div className="post-body"><span className="post-tag">Report</span><h3>Why gamification works for climate education</h3><p>The thinking behind Ecolara's learn, act, earn model.</p></div>
      </div>
      <div className="post-card">
        <div className="post-thumb">Comics</div>
        <div className="post-body"><span className="post-tag">Ecolara Comics</span><h3>Guardians of the Green Future, Issue 1</h3><p>Our first environmental comic for young readers.</p></div>
      </div>
    </div>
  </div>
</section>
  )
}
