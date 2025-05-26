import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasFromEmail: !!process.env.FROM_EMAIL,
    hasToEmail: !!process.env.TO_EMAIL,
    fromEmail: process.env.FROM_EMAIL || 'not set',
    toEmail: process.env.TO_EMAIL || 'not set',
  })
}
