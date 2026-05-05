import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', charge: '', location: '', message: ''
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Head>
        <title>Contact | Tobin Law Office</title>
        <meta name="description" content="Free, confidential criminal defense consultation. Call (480) 447-4837 or send a message. Tobin Law Office serves Chandler, Mesa, Gilbert, Tempe, and Scottsdale." />
      </Head>

      <Nav />

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
        padding: '56px 24px 52px',
        borderBottom: '3px solid var(--gold)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: 12 }}>
            Free & Confidential
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 46px)', color: 'var(--white)', lineHeight: 1.2 }}>
            Contact Tobin Law Office
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginTop: 14, maxWidth: 500 }}>
            Facing criminal charges? Talk to Tim Tobin — not a paralegal, not an associate. A free, confidential consultation with the attorney himself.
          </p>
        </div>
      </div>

      <section style={{ padding: '64px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 64 }} className="contact-grid">

          {/* Form */}
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, color: 'var(--navy)', marginBottom: 8 }}>
              Tell Us About Your Case
            </h2>
            <p style={{ fontSize: 14, color: 'var(--gray-mid)', marginBottom: 28 }}>
              Completely confidential. Tim will personally review your message and respond within a few hours during business hours.
            </p>

            {sent ? (
              <div style={{
                background: 'var(--off-white)',
                border: '2px solid var(--gold)',
                borderRadius: 4, padding: '40px 32px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: 'var(--navy)', marginBottom: 10 }}>
                  Message Received
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.7 }}>
                  Tim will review your information and be in touch within a few hours. If your situation is urgent, call directly:
                </p>
                <a href="tel:4804474837" style={{
                  display: 'inline-block', marginTop: 16,
                  background: 'var(--gold)', color: 'var(--navy)',
                  fontWeight: 700, fontSize: 18,
                  padding: '12px 28px', borderRadius: 2,
                  fontFamily: 'Source Sans 3, sans-serif'
                }}>(480) 447-4837</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--navy)', display: 'block', marginBottom: 6 }}>
                      Full Name *
                    </label>
                    <input type="text" required placeholder="Your name"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input type="tel" required placeholder="(480) 000-0000"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" placeholder="your@email.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Type of Charge *</label>
                    <select required value={form.charge} onChange={e => setForm({ ...form, charge: e.target.value })}
                      style={{ ...inputStyle, color: form.charge ? 'var(--text-body)' : '#999' }}>
                      <option value="" disabled>Select charge type</option>
                      {['DUI', 'Drug Offense', 'Domestic Violence', 'Assault / Violent Crime', 'Property / Theft', 'Traffic Violation', 'Other'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Your City</label>
                    <select value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} style={inputStyle}>
                      <option value="">Select city</option>
                      {['Chandler', 'Mesa', 'Gilbert', 'Tempe', 'Scottsdale', 'Phoenix', 'San Tan Valley', 'Queen Creek', 'Other'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Tell Us What Happened (Optional)</label>
                  <textarea placeholder="Brief description of the charges and circumstances. Everything you share is confidential."
                    rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                <button type="submit" style={{
                  background: 'var(--gold)', color: 'var(--navy)',
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontWeight: 700, fontSize: 16,
                  padding: '15px', borderRadius: 2, border: 'none',
                  cursor: 'pointer', letterSpacing: '0.03em', marginTop: 4
                }}>
                  Send My Case Details — Free &amp; Confidential
                </button>

                <p style={{ fontSize: 12, color: 'var(--gray-mid)', textAlign: 'center', lineHeight: 1.5 }}>
                  No attorney-client relationship is created by submitting this form. Confidential per Arizona Rules of Professional Conduct.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: 'var(--navy)', borderRadius: 4, padding: '28px 24px',
              border: '1px solid rgba(201,168,76,0.2)'
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'var(--white)', marginBottom: 20 }}>
                Contact Information
              </div>

              {[
                { icon: '📞', label: 'Call or Text', val: '(480) 447-4837', href: 'tel:4804474837' },
                { icon: '✉️', label: 'Email', val: 'tim@tobinlawoffice.com', href: 'mailto:tim@tobinlawoffice.com' },
              ].map(({ icon, label, val, href }) => (
                <div key={label} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>{icon} {label}</div>
                  <a href={href} style={{ fontSize: 17, fontWeight: 600, color: 'var(--gold)', fontFamily: 'Source Sans 3, sans-serif' }}>{val}</a>
                </div>
              ))}

              <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>📍 Chandler Office</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>3100 W Ray Rd #201<br />Chandler, AZ 85226</div>
              </div>

              <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>📍 Mesa Office</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>1910 S Stapley Dr #221<br />Mesa, AZ 85204</div>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>🕕 Office Hours</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                  Monday – Friday: 6:00am – 8:00pm<br />
                  Saturday – Sunday: By appointment
                </div>
              </div>
            </div>

            <div style={{
              background: 'var(--off-white)', borderRadius: 4, padding: '24px',
              border: '1px solid var(--gray-light)'
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, color: 'var(--navy)', marginBottom: 12 }}>
                Why Call Now?
              </div>
              {[
                'Evidence disappears quickly after an arrest',
                'Prosecutors build their case from day one',
                'Early intervention can change the outcome',
                'Tim\'s number is direct — no voicemail',
              ].map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700 }}>→</span>
                  <span style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

const inputStyle = {
  width: '100%',
  border: '1.5px solid #ddd',
  borderRadius: 3, padding: '11px 13px',
  fontSize: 14, fontFamily: 'Source Sans 3, sans-serif',
  color: 'var(--text-body)', outline: 'none',
  background: 'var(--white)'
};

const labelStyle = {
  fontFamily: 'Source Sans 3, sans-serif',
  fontSize: 12, fontWeight: 600,
  letterSpacing: '0.06em', textTransform: 'uppercase',
  color: 'var(--navy)', display: 'block', marginBottom: 6
};
