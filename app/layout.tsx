import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const metadata = { title: 'Ecolara | Gamifying Climate Action', description: 'Youth-led climate education and action in Nigeria.' }
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><Header /><main>{children}</main><Footer /></body>
    </html>
  )
}
