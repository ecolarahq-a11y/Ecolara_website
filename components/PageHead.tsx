export default function PageHead({ tag, title, intro }: { tag?: string; title: string; intro?: string }) {
  return (
    <section className="page-head wrap">
      {tag && <p className="label">{tag}</p>}
      <h1>{title}</h1>
      {intro && <p className="lead">{intro}</p>}
    </section>
  )
}
