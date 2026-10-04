import { NextResponse } from 'next/server'
// TODO: store submission (Sanity document or email) and redirect to a thank-you state.
export async function POST(req: Request) {
  const f = await req.formData()
  if (!f.get('email') || !f.get('message')) return NextResponse.json({ ok: false }, { status: 400 })
  return NextResponse.redirect(new URL('/contact', req.url), 303)
}
