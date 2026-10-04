import PageHead from '@/components/PageHead'
export default function Contact() {
  return (<><PageHead tag="Contact" title="Talk to us" /><section className="wrap" style={{ paddingBottom: 80 }}>
    <form className="contact" action="/api/contact" method="post">
      <input name="name" placeholder="Name" required /><input name="email" type="email" placeholder="Email" required />
      <input name="subject" placeholder="Subject" /><textarea name="message" rows={6} placeholder="Message" required />
      <button className="btn btn-primary" type="submit">Send</button></form></section></>)
}
