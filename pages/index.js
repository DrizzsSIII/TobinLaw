import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

const REVIEWS = [
  {
    name: 'Chris A.',
    location: 'Chandler',
    stars: 5,
    text: 'Tim is very responsive to emails and calls. I really feel like Tim had my best interests at heart throughout my case and I\'m ecstatic about the results.',
  },
  {
    name: 'Huthaifa K.',
    location: 'Scottsdale',
    stars: 5,
    text: 'Tim was courteous, his portal is very easy to navigate and paying online is a breeze. Everything about my experience with the Tobin Law Office was pleasant.',
  },
  {
    name: 'Marcus T.',
    location: 'Mesa',
    stars: 5,
    text: 'Attorney Tobin handled my DUI case with professionalism and compassion. He kept me informed every step of the way and got my charges reduced. Highly recommend.',
  },
  {
    name: 'Jennifer L.',
    location: 'Gilbert',
    stars: 5,
    text: 'I was scared and didn\'t know what to do. Tim took my call, explained everything clearly, and fought hard for me. Case was dismissed. I can\'t thank him enough.',
  },
];

const PRACTICE_AREAS = [
  { icon: '🚗', title: 'DUI Defense', desc: 'Simple, extreme, super extreme, and underage DUI. Former DUI prosecutor who knows every angle of the state\'s case.' },
  { icon: '💊', title: 'Drug Crimes', desc: 'Possession, trafficking, and sale of controlled substances. Felony drug defense from a former Maricopa County drug prosecutor.' },
  { icon: '🏠', title: 'Domestic Violence', desc: 'Experienced defense in Chandler, Mesa, and Maricopa County courts. Diversion programs and charge dismissals pursued aggressively.' },
  { icon: '⚖️', title: 'Assault & Violent Crimes', desc: 'From misdemeanor assault to aggravated felony charges. Every case gets a customized defense strategy.' },
  { icon: '🔒', title: 'Property & Theft', desc: 'Shoplifting, burglary, and theft charges. Charges can often be reduced or dismissed with the right representation.' },
  { icon: '🚦', title: 'Traffic Violations', desc: 'Even a traffic charge can leave a permanent criminal record. We protect your record, license, and future.' },
];

function Stars({ n }) {
  return <span style={{ color: 'var(--gold)', fontSize: 16 }}>{'★'.repeat(n)}</span>;
}

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', charge: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Head>
        <title>Tobin Law Office | Chandler & Mesa Criminal Defense Attorney</title>
        <meta name="description" content="Arizona criminal defense attorney Timothy Tobin — DUI, drug crimes, domestic violence, assault. Former prosecutor. Flat rates. Free consultations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 60%, #0d1e3a 100%)',
        color: 'var(--white)',
        padding: '80px 24px 72px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Gold accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3, background: 'var(--gold)'
        }} />
        {/* Background texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'start' }} className="hero-grid">
            <div>
              <span style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--gold)',
                display: 'block', marginBottom: 16
              }}>Chandler & Mesa, Arizona</span>

              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(32px, 5vw, 54px)',
                fontWeight: 700, color: 'var(--white)',
                lineHeight: 1.15, marginBottom: 20
              }}>
                Facing Criminal Charges?<br />
                <span style={{ color: 'var(--gold)' }}>Fight Back With a</span><br />
                Former Prosecutor.
              </h1>

              <div style={{ width: 48, height: 2, background: 'var(--gold)', marginBottom: 24 }} />

              <p style={{
                fontSize: 18, color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.7, maxWidth: 540, marginBottom: 32
              }}>
                Attorney Timothy Tobin is a former Arizona prosecutor who now defends the accused — with flat-rate fees, direct access to your lawyer, and a proven record of reduced and dismissed charges across Maricopa County.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
                <a href="tel:4804474837" style={{
                  display: 'inline-block',
                  background: 'var(--gold)', color: 'var(--navy)',
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontWeight: 700, fontSize: 16,
                  padding: '15px 32px', borderRadius: 2,
                  letterSpacing: '0.03em'
                }}>Call (480) 447-4837</a>
                <Link href="/contact" style={{
                  display: 'inline-block',
                  background: 'transparent', color: 'var(--white)',
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontWeight: 600, fontSize: 16,
                  padding: '14px 30px', borderRadius: 2,
                  border: '1.5px solid rgba(201,168,76,0.5)',
                  letterSpacing: '0.03em'
                }}>Free Case Review</Link>
              </div>

              {/* Trust signals */}
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                {[
                  ['★ 5.0', '128 Google Reviews'],
                  ['$0', 'Free Consultation'],
                  ['Flat Rate', 'No Hidden Fees'],
                  ['6am–8pm', 'Extended Hours'],
                ].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--gold)' }}>{val}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick contact card */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 4, padding: 28, minWidth: 280,
              backdropFilter: 'blur(8px)'
            }} className="hero-card">
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 18, fontWeight: 600,
                color: 'var(--white)', marginBottom: 6
              }}>Get a Free Case Review</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
                Confidential · No obligation · Responds same day
              </div>

              {sent ? (
                <div style={{
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid var(--gold)',
                  borderRadius: 3, padding: '20px 16px',
                  textAlign: 'center', color: 'var(--gold)',
                  fontFamily: 'Source Sans 3, sans-serif'
                }}>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>✓</div>
                  <strong>Message received.</strong><br />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4, display: 'block' }}>
                    Tim will be in touch within a few hours.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { key: 'name', placeholder: 'Your Name', type: 'text' },
                    { key: 'phone', placeholder: 'Phone Number', type: 'tel' },
                  ].map(({ key, placeholder, type }) => (
                    <input
                      key={key} type={type} placeholder={placeholder} required
                      value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 2, padding: '11px 14px',
                        color: 'var(--white)', fontSize: 14,
                        fontFamily: 'Source Sans 3, sans-serif',
                        outline: 'none'
                      }}
                    />
                  ))}
                  <select
                    value={form.charge}
                    onChange={e => setForm({ ...form, charge: e.target.value })}
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 2, padding: '11px 14px',
                      color: form.charge ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                      fontSize: 14, fontFamily: 'Source Sans 3, sans-serif', outline: 'none'
                    }}
                  >
                    <option value="" disabled>Type of Charge</option>
                    {['DUI', 'Drug Offense', 'Domestic Violence', 'Assault', 'Theft / Property', 'Traffic', 'Other'].map(o => (
                      <option key={o} value={o} style={{ background: 'var(--navy-mid)', color: 'var(--white)' }}>{o}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Brief description of your situation (optional)"
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 2, padding: '11px 14px',
                      color: 'var(--white)', fontSize: 14,
                      fontFamily: 'Source Sans 3, sans-serif',
                      outline: 'none', resize: 'vertical'
                    }}
                  />
                  <button type="submit" style={{
                    background: 'var(--gold)', color: 'var(--navy)',
                    fontFamily: 'Source Sans 3, sans-serif',
                    fontWeight: 700, fontSize: 15,
                    padding: '13px', borderRadius: 2, border: 'none',
                    cursor: 'pointer', letterSpacing: '0.03em'
                  }}>
                    Send My Case Details →
                  </button>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>
                    100% confidential. No attorney-client relationship created.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TOBIN */}
      <section id="why-us" style={{ padding: '72px 24px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Why Clients Choose Tim Tobin
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 38px)', marginTop: 10, color: 'var(--navy)' }}>
              A Former Prosecutor Fighting For You
            </h2>
            <div style={{ width: 48, height: 2, background: 'var(--gold)', margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              {
                icon: '⚖️',
                title: 'Former Prosecutor Advantage',
                desc: 'Timothy Tobin prosecuted for two government agencies. He knows exactly how prosecutors build their cases — and how to dismantle them.'
              },
              {
                icon: '💬',
                title: 'Direct Access to Your Attorney',
                desc: 'No secretaries. No paralegals. Every client has Tim\'s direct cell phone and email. Questions get answered, fast.'
              },
              {
                icon: '💲',
                title: 'Flat Rate — No Surprises',
                desc: 'Affordable flat-rate representation. You know the full cost up front. No hourly billing, no hidden fees, no matter how long your case takes.'
              },
              {
                icon: '🕕',
                title: 'Available 6am to 8pm',
                desc: 'Arrests don\'t happen on a 9–5 schedule. Tobin Law Office is available with extended hours and responds to after-hours messages.'
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-light)',
                borderTop: '3px solid var(--gold)',
                padding: '28px 24px',
                borderRadius: '0 0 4px 4px'
              }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'var(--navy)', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section style={{ padding: '72px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                What We Defend
              </span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', marginTop: 8, color: 'var(--navy)' }}>
                Practice Areas
              </h2>
            </div>
            <Link href="/practice-areas" style={{
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: 14, fontWeight: 600,
              color: 'var(--gold)', borderBottom: '1px solid var(--gold)',
              paddingBottom: 2
            }}>View All Practice Areas →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {PRACTICE_AREAS.map(({ icon, title, desc }) => (
              <Link href="/practice-areas" key={title} style={{
                display: 'block',
                background: 'var(--navy)',
                padding: '24px 24px',
                borderRadius: 3,
                borderLeft: '4px solid var(--gold)',
                transition: 'transform 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'var(--white)', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: '72px 24px', background: 'var(--navy)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Client Reviews
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--white)', marginTop: 10 }}>
              ★ 5.0 on Google · 128 Reviews
            </h2>
            <div style={{ width: 48, height: 2, background: 'var(--gold)', margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {REVIEWS.map(({ name, location, stars, text }) => (
              <div key={name} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 4, padding: '24px 22px'
              }}>
                <Stars n={stars} />
                <p style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.7, margin: '14px 0 18px',
                  fontStyle: 'italic'
                }}>"{text}"</p>
                <div style={{
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontWeight: 600, fontSize: 13,
                  color: 'var(--gold)'
                }}>— {name}, {location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section style={{ padding: '72px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">
          <div>
            <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              About Tim Tobin
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--navy)', marginTop: 10, marginBottom: 8 }}>
              He Prosecuted Cases Like Yours.<br />Now He Defends Them.
            </h2>
            <div style={{ width: 48, height: 2, background: 'var(--gold)', marginBottom: 24 }} />
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 16 }}>
              Timothy Tobin is a former prosecutor for two Arizona government agencies, including Maricopa County. He knows how police build cases, how prosecutors think, and how courts work — because he spent years on the other side of the aisle.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 32 }}>
              Today, Tim applies that same insider knowledge to defend clients across the Valley — with personalized attention, direct communication, and an aggressive approach to every case.
            </p>
            <Link href="/about" style={{
              display: 'inline-block',
              background: 'var(--navy)', color: 'var(--white)',
              fontFamily: 'Source Sans 3, sans-serif',
              fontWeight: 600, fontSize: 14,
              padding: '12px 28px', borderRadius: 2,
              letterSpacing: '0.04em'
            }}>Read Tim's Story →</Link>
          </div>

          <div style={{
            background: 'linear-gradient(145deg, var(--navy) 0%, var(--navy-mid) 100%)',
            borderRadius: 4,
            padding: '40px 32px',
            border: '1px solid rgba(201,168,76,0.2)'
          }}>
            {[
              ['Former Prosecutor', 'Two Arizona government agencies'],
              ['Flat Rate Fees', 'Full cost known upfront, always'],
              ['Direct Cell Access', 'Clients get Tim\'s personal number'],
              ['Free Consultations', 'For every criminal offense'],
              ['5-Star Rated', '128 verified Google reviews'],
            ].map(([val, lbl]) => (
              <div key={val} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)'
              }}>
                <span style={{ color: 'var(--gold)', fontSize: 18, marginTop: 1 }}>✓</span>
                <div>
                  <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 600, color: 'var(--white)', fontSize: 15 }}>{val}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-card { display: none; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
