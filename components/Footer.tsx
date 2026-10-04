import Link from 'next/link'

export default function Footer() {
  return (
<footer id="contact">
  <div className="wrap">
    <div className="footer-top">
      <div className="footer-brand">
        <Link href="/" className="logo"><span className="logo-mark"></span>Ecolara</Link>
        <p>Gamifying climate action for young Nigerians, through education, outreach, and technology.</p>
        <div className="footer-socials">
          <Link href="#" aria-label="Instagram">IG</Link>
          <Link href="#" aria-label="LinkedIn">IN</Link>
          <Link href="#" aria-label="X">X</Link>
          <Link href="#" aria-label="TikTok">TT</Link>
        </div>
      </div>
      <div className="newsletter-box">
        <h4>Get climate stories in your inbox</h4>
        <p>One email a month. Field notes, reports, and what our programmes are learning.</p>
        <form className="newsletter-form" action="/api/newsletter" method="post">
          <input type="email" placeholder="you@email.com" required aria-label="Email address" />
          <button type="submit" className="btn btn-amber">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="footer-grid">
      <div><h4>Quick Links</h4><ul><li><Link href="/about">About Us</Link></li><li><Link href="/programs">Our Programs</Link></li><li><Link href="/get-involved">Get Involved</Link></li><li><Link href="/labs">Ecolara Labs</Link></li></ul></div>
      <div><h4>Insights</h4><ul><li><Link href="/insights/blog">Blog</Link></li><li><Link href="/insights/research">Research & Reports</Link></li><li><Link href="/insights/comics">Ecolara Comics</Link></li><li><Link href="/insights/releases">Toolkits</Link></li></ul></div>
      <div><h4>Contact Us</h4><ul><li><Link href="mailto:hello@ecolara.online">hello@ecolara.online</Link></li><li><Link href="#">+234 708 240 2238</Link></li><li><Link href="#">Osogbo, Osun State</Link></li></ul></div>
      <div><h4>Follow @EcolaraHQ</h4><ul><li><Link href="#">Instagram</Link></li><li><Link href="#">LinkedIn</Link></li><li><Link href="#">X</Link></li><li><Link href="#">TikTok</Link></li></ul></div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Ecolara. All rights reserved.</span>
      <span>Osogbo, Osun State, Nigeria</span>
    </div>
  </div>
</footer>
  )
}
