'use client'
import { useEffect, useState } from 'react'
type Pic = { thumb: string; full: string; caption?: string }
export default function Gallery({ images }: { images: Pic[] }) {
  const [i, setI] = useState<number | null>(null)
  const n = images.length
  useEffect(() => {
    if (i === null) return
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setI(null)
      if (e.key === 'ArrowRight') setI((x) => ((x as number) + 1) % n)
      if (e.key === 'ArrowLeft') setI((x) => ((x as number) - 1 + n) % n)
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [i, n])
  return (
    <section className="gallery">
      <p className="label">{n} photos</p>
      <div className="thumbs">
        {images.map((p, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Open photo ${idx + 1}`}><img src={p.thumb} alt={p.caption || ''} loading="lazy" /></button>
        ))}
      </div>
      {i !== null && (
        <div className="lightbox" onClick={() => setI(null)}>
          <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); setI((i - 1 + n) % n) }}>Prev</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={images[i].full} alt={images[i].caption || ''} />
            <figcaption>{images[i].caption} <span>{i + 1} / {n}</span></figcaption>
          </figure>
          <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); setI((i + 1) % n) }}>Next</button>
          <button className="lb-close" onClick={() => setI(null)}>Close</button>
        </div>
      )}
    </section>
  )
}
