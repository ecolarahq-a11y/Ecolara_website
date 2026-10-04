'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  ['About', '/about'],
  ['Programs', '/programs'],
  ['Impact', '/impact'],
  ['Insights', '/insights'],
  ['Labs', '/labs'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="nav">
        <Link href="/" className="logo">
          <Image
            src="/images/ecolara-logo.png"
            alt="Ecolara"
            width={40}
            height={40}
            priority
          />
        </Link>

        <nav className={'nav-links' + (open ? ' open' : '')}>
          {links.map(([t, h]) => (
            <Link
              key={h}
              href={h}
              onClick={() => setOpen(false)}
            >
              {t}
            </Link>
          ))}
        </nav>

        <div
          style={{
            display: 'flex',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <Link href="/get-involved" className="btn btn-primary">
            Get Involved
          </Link>

          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}