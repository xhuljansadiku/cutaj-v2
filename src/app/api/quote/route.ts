import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Log the enquiry (in production, send via Resend/Nodemailer/etc.)
    console.log('New quote request:', {
      ...data,
      timestamp: new Date().toISOString(),
      ip: req.headers.get('x-forwarded-for') ?? 'unknown',
    })

    /*
      Production: replace the console.log above with an email send, e.g.:

      await resend.emails.send({
        from: 'noreply@cutajconstruction.co.uk',
        to: 'hello@cutajconstruction.co.uk',
        subject: `New Quote Request — ${data.service}`,
        html: `<p>Name: ${data.name}</p><p>Phone: ${data.phone}</p>...`
      })
    */

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
