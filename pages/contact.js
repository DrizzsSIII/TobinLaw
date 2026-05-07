import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', charge: '', city: '', message: '' });
  const [sent, setSent]       = useState(false);
  const [submitting, setSub]  = useState(false);
  const [error, setError]     = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setSub(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-page' }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong. Please call us directly.');
      }
    } catch {
      setSent(true);
    } finally {
      setSub(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Tobin Law Office</title>
        <meta name="description" content="Free, confidential criminal defense consultation. Call (480) 447-4837 or send a message. Serving Chandler, Mesa, Gilbert, Tempe, and Scottsdale." />
        <meta property="og:title" content="Contact Tobin Law Office — Free Consultation" />
        <meta property="og:description" content="Free, confidential criminal defense consultation. Call (480) 447-4837 or send a message. Serving Chandler, Mesa, Gilbert, Tempe, and Scottsdale." />
        <meta property="og:url" content="https://tobinlawoffice.com/contact" />
      </Head>

      <Nav />

      {/* Page header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
        padding: '60px 24px 56px',
        borderBottom: '3px solid var(--gold)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(ellipse 50% 80% at 90% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-label">Free &amp; Confidential</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: 'var(--white)', lineHeight: 1.15 }}>
            Contact Tobin Law Office
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginTop: 14, maxWidth: 500 }}>
            Facing criminal charges? Talk to Tim Tobin directly. Not a paralegal, not an associate. A free, confidential consultation with the attorney himself.
          </p>
        </div>
      </div>

      <section style={{ padding: '72px 24px', background: 'var(--white)' }}>
        <div className="contact-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 64 }}>

          {/* ── Form ── */}
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, color: 'var(--navy)', marginBottom: 8 }}>
              Tell Us About Your Case
            </h2>
            <p style={{ fontSize: 14, color: 'var(--gray-mid)', marginBottom: 28, lineHeight: 1.65 }}>
              Completely confidential. Tim will personally review your message and respond within a few hours during business hours.
            </p>

            {sent ? (
              <div style={{
                background: 'var(--off-white)', border: '2px solid var(--gold)',
                borderRadius: 5, padding: '48px 32px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 44, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: 'var(--navy)', marginBottom: 12 }}>
                  Message Received
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 20 }}>
                  Tim will review your information and be in touch within a few hours. If your situation is urgent, call directly:
                </p>
                <a href="tel:4804474837" className="cta-gold" style={{ fontSize: 18, textTransform: 'none' }}>
                  (480) 447-4837
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="contact-form-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" required placeholder="Your name" className="input-field"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input type="tel" required placeholder="(480) 000-0000" className="input-field"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" placeholder="your@email.com" className="input-field"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>

                <div className="contact-form-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Type of Charge *</label>
                    <select required className="input-field"
                      value={form.charge} onChange={e => setForm({ ...form, charge: e.target.value })}
                      style={{ color: form.charge ? 'var(--text-body)' : '#aaa' }}>
                      <option value="" disabled>Select charge type</option>
                      {['DUI','Drug Offense','Domestic Violence','Assault / Violent Crime','Property / Theft','Traffic Violation','Other'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Your City</label>
                    <select className="input-field"
                      value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
                      <option value="">Select city</option>
                      {['Chandler','Mesa','Gilbert','Tempe','Scottsdale','Phoenix','San Tan Valley','Queen Creek','Other'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Tell Us What Happened (Optional)</label>
                  <textarea rows={5} placeholder="Brief description of the charges and circumstances. Everything you share is confidential."
                    className="input-field" style={{ resize: 'vertical' }}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>

                {error && (
                  <div style={{ background: 'rgba(200,0,0,0.06)', border: '1px solid rgba(200,0,0,0.25)', borderRadius: 3, padding: '10px 14px', fontSize: 14, color: '#c00' }}>
                    {error}
                  </div>
                )}

                <button type="submit" disabled={submitting} className="cta-gold"
                  style={{ fontSize: 16, padding: '15px', textTransform: 'none', marginTop: 4 }}>
                  {submitting ? 'Sending…' : 'Send Case Details, Free & Confidential'}
                </button>

                <p style={{ fontSize: 12, color: 'var(--gray-mid)', textAlign: 'center', lineHeight: 1.55 }}>
                  No attorney-client relationship is created by submitting this form. Confidential per Arizona Rules of Professional Conduct.
                </p>
              </form>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Contact info */}
            <div style={{ background: 'var(--navy)', borderRadius: 5, padding: '28px 24px', border: '1px solid rgba(201,168,76,0.2)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, color: 'var(--white)', marginBottom: 22 }}>
                Contact Information
              </div>

              {[
                { icon: '📞', label: 'Call or Text',   val: '(480) 447-4837',        href: 'tel:4804474837' },
                { icon: '📞', label: 'Second Line',    val: '(480) 447-9877',        href: 'tel:4804479877' },
                { icon: '✉️', label: 'Email',          val: 'tim@tobinlawoffice.com', href: 'mailto:tim@tobinlawoffice.com' },
              ].map(({ icon, label, val, href }) => (
                <div key={label} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 4 }}>{icon} {label}</div>
                  <a href={href} style={{ fontSize: 16, fontWeight: 600, color: 'var(--gold)', fontFamily: 'DM Sans, sans-serif' }}>{val}</a>
                </div>
              ))}

              <div style={{ marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 4 }}>📍 Chandler Office</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>3100 W Ray Rd #201<br />Chandler, AZ 85226</div>
              </div>

              <div style={{ marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 4 }}>📍 Mesa Office</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>1910 S Stapley Dr #221<br />Mesa, AZ 85204</div>
              </div>

              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 4 }}>🕕 Office Hours</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                  Monday – Friday: 6:00am – 8:00pm<br />
                  Saturday – Sunday: By appointment
                </div>
              </div>
            </div>

            {/* Why call now */}
            <div style={{ background: 'var(--off-white)', borderRadius: 5, padding: '24px', border: '1px solid var(--gray-light)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, color: 'var(--navy)', marginBottom: 14 }}>
                Why Call Now?
              </div>
              {[
                'Evidence disappears quickly after an arrest',
                'Prosecutors begin building their case from day one',
                'Early intervention can significantly change the outcome',
                "Tim's number is direct. No voicemail, no assistant.",
              ].map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 11 }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.55 }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Google Map — Chandler office */}
            <div style={{ borderRadius: 5, overflow: 'hidden', border: '1px solid var(--gray-light)', boxShadow: 'var(--shadow-sm)' }}>
              <iframe
                title="Tobin Law Office — Chandler"
                src="https://maps.google.com/maps?q=3100+W+Ray+Rd+%23201,+Chandler,+AZ+85226&output=embed"
                width="100%"
                height="220"
                style={{ display: 'block', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const labelStyle = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 11, fontWeight: 700,
  letterSpacing: '0.08em', textTransform: 'uppercase',
  color: 'var(--navy)', display: 'block', marginBottom: 6,
};
