import { NextResponse } from 'next/server'
// TODO: connect to the newsletter tool (Mailchimp, Buttondown, etc.) and store the email.
export async function POST(req: Request) { return NextResponse.redirect(new URL('/', req.url), 303) }
