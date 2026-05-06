/**
 * Contact form API route.
 *
 * To wire up real email delivery, add an email service here.
 * Recommended: Resend (resend.com) — free tier, simple API, no SMTP config.
 *
 * Example with Resend:
 *   npm install resend
 *   Add RESEND_API_KEY to your .env.local
 *
 *   import { Resend } from 'resend';
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: 'website@tobinlawoffice.com',
 *     to:   'tim@tobinlawoffice.com',
 *     subject: `New case inquiry from ${name} — ${charge}`,
 *     html: `<p><strong>Name:</strong> ${name}</p>
 *            <p><strong>Phone:</strong> ${phone}</p>
 *            <p><strong>Email:</strong> ${email || 'not provided'}</p>
 *            <p><strong>Charge:</strong> ${charge}</p>
 *            <p><strong>City:</strong> ${city || 'not provided'}</p>
 *            <p><strong>Message:</strong> ${message || 'none'}</p>`,
 *   });
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, charge, city, message, source } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ message: 'Name and phone are required.' });
  }

  // ── Add your email service here ──────────────────────────────────────────
  // Until configured, submissions are logged server-side only.
  console.log('[Contact Form Submission]', { name, phone, email, charge, city, source, message });
  // ─────────────────────────────────────────────────────────────────────────

  return res.status(200).json({ success: true });
}
