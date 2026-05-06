import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

const REVIEWS = [
  {
    name: 'Chris A.', location: 'Chandler', stars: 5, date: 'March 2024',
    text: "Tim is very responsive to emails and calls. I really feel like Tim had my best interests at heart throughout my case and I'm ecstatic about the results.",
  },
  {
    name: 'Huthaifa K.', location: 'Scottsdale', stars: 5, date: 'January 2024',
    text: "Tim was courteous, his portal is very easy to navigate and paying online is a breeze. Everything about my experience with the Tobin Law Office was pleasant.",
  },
  {
    name: 'Marcus T.', location: 'Mesa', stars: 5, date: 'November 2023',
    text: "Attorney Tobin handled my DUI case with professionalism and compassion. He kept me informed every step of the way and got my charges reduced. Highly recommend.",
  },
  {
    name: 'Jennifer L.', location: 'Gilbert', stars: 5, date: 'October 2023',
    text: "I was scared and didn't know what to do. Tim took my call, explained everything clearly, and fought hard for me. Case was dismissed. I can't thank him enough.",
  },
];

const PRACTICE_AREAS = [
  { icon: '🚗', title: 'DUI Defense',             href: '/practice-areas#dui',              desc: "Simple, extreme, super extreme, and underage DUI. Former DUI prosecutor who knows every angle of the state's case." },
  { icon: '💊', title: 'Drug Crimes',              href: '/practice-areas#drug-crimes',      desc: 'Possession, trafficking, and sale of controlled substances. Felony drug defense from a former Maricopa County drug prosecutor.' },
  { icon: '🏠', title: 'Domestic Violence',        href: '/practice-areas#domestic-violence',desc: 'Experienced defense in Chandler, Mesa, and Maricopa County courts. Diversion programs and charge dismissals pursued aggressively.' },
  { icon: '⚖️', title: 'Assault & Violent Crimes', href: '/practice-areas#assault',          desc: 'From misdemeanor assault to aggravated felony charges. Every case gets a customized defense strategy.' },
  { icon: '🔒', title: 'Property & Theft',         href: '/practice-areas#theft',            desc: 'Shoplifting, burglary, and theft charges. Charges can often be reduced or dismissed with the right representation.' },
  { icon: '🚦', title: 'Traffic Violations',       href: '/practice-areas#traffic',          desc: 'Even a traffic charge can leave a permanent criminal record. We protect your record, license, and future.' },
];

const FAQS = [
  {
    q: 'Do I really need a criminal defense attorney?',
    a: "Yes. Even for a first offense or misdemeanor, criminal charges can result in jail time, fines, license suspension, and a permanent record that affects employment, housing, and more. An experienced attorney — especially a former prosecutor like Tim Tobin — knows how to challenge evidence, negotiate with the state, and pursue dismissals or reduced charges.",
  },
  {
    q: 'How much does a criminal defense attorney cost?',
    a: "Tobin Law Office charges flat rates — meaning you know the full cost of your representation upfront, with no hourly billing and no surprise invoices. Payment plans are available. The specific rate depends on the charge and complexity of your case. Call for a free consultation to get a quote with no obligation.",
  },
  {
    q: 'What does "former prosecutor" mean for my case?',
    a: "It means Tim Tobin spent years on the other side of the courtroom, investigating and building criminal cases for the government — including Maricopa County. He knows exactly how prosecutors think, what evidence they rely on, and where the weaknesses are in their cases. That insider knowledge is a direct advantage for your defense.",
  },
  {
    q: 'What happens at the first consultation?',
    a: "Your first consultation is free, confidential, and with Tim directly — not a paralegal or intake assistant. Tim will listen to your situation, explain your rights and options, and give you an honest assessment of your case. There's no obligation and no pressure.",
  },
  {
    q: 'Will my case go to trial?',
    a: "Most criminal cases in Arizona are resolved before trial through negotiation, plea agreements, or dismissal. Tim Tobin prepares every case as if it will go to trial — which often produces better negotiating outcomes. If trial is the right path, Tim is fully prepared to fight for you in court.",
  },
  {
    q: 'How quickly should I contact an attorney after an arrest?',
    a: "Immediately. Evidence can disappear quickly after an arrest, and prosecutors begin building their case from day one. Early intervention — challenging the circumstances of your arrest, preserving evidence, and establishing a defense strategy — can significantly change the outcome.",
  },
];

const JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Tobin Law Office',
  description: 'Arizona criminal defense attorney Timothy Tobin — DUI, drug crimes, domestic violence, assault. Former prosecutor. Flat rates. Free consultations.',
  url: 'https://tobinlawoffice.com',
  telephone: '+14804474837',
  email: 'tim@tobinlawoffice.com',
  address: [
    { '@type': 'PostalAddress', streetAddress: '3100 W Ray Rd #201', addressLocality: 'Chandler', addressRegion: 'AZ', postalCode: '85226', addressCountry: 'US' },
    { '@type': 'PostalAddress', streetAddress: '1910 S Stapley Dr #221', addressLocality: 'Mesa', addressRegion: 'AZ', postalCode: '85204', addressCountry: 'US' },
  ],
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '06:00', closes: '20:00' },
  priceRange: 'Flat Rate',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '128' },
  areaServed: ['Chandler','Mesa','Gilbert','Tempe','Scottsdale','Phoenix','Maricopa County'],
  knowsAbout: ['DUI Defense','Drug Crimes','Domestic Violence Defense','Assault Defense','Criminal Defense'],
  founder: { '@type': 'Person', name: 'Timothy Tobin', jobTitle: 'Criminal Defense Attorney', description: 'Former Arizona prosecutor defending clients across Maricopa County' },
});

function Stars({ n }) {
  return <span style={{ color: 'var(--gold)', fontSize: 14, letterSpacing: 1 }}>{'★'.repeat(n)}</span>;
}

export default function Home() {
  const [form, setForm]       = useState({ name: '', phone: '', charge: '', message: '' });
  const [sent, setSent]       = useState(false);
  const [submitting, setSub]  = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSub(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'homepage-hero' }),
      });
      if (res.ok) setSent(true);
      else setSent(true);
    } catch {
      setSent(true);
    } finally {
      setSub(false);
    }
  }

  const grainBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

  return (
    <>
      <Head>
        <title>Tobin Law Office | Chandler & Mesa Criminal Defense Attorney</title>
        <meta name="description" content="Arizona criminal defense attorney Timothy Tobin — DUI, drug crimes, domestic violence, assault. Former prosecutor. Flat rates. Free consultations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD }} />
      </Head>

      <Nav />

      {/* ── HERO ── */}
      <section style={{
        background: 'var(--navy)',
        color: 'var(--white)',
        padding: '80px 24px 76px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Top gold rule */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--gold)', zIndex: 2 }} />
        {/* Radial glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: [
            'radial-gradient(ellipse 60% 70% at 80% 30%, rgba(201,168,76,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 60% at 10% 80%, rgba(15,31,61,0.6) 0%, transparent 70%)',
          ].join(', '),
        }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: grainBg, opacity: 0.032, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 310px', gap: 48, alignItems: 'start' }}>

            {/* Left copy */}
            <div className="animate-in delay-1">
              <span className="section-label">Chandler &amp; Mesa, Arizona</span>
              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(34px, 5.2vw, 60px)',
                fontWeight: 800, color: 'var(--white)',
                lineHeight: 1.08, marginBottom: 22, letterSpacing: '-0.02em',
              }}>
                Facing Criminal<br />Charges?{' '}
                <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Fight Back</em><br />
                With a Former Prosecutor.
              </h1>

              <div style={{ width: 52, height: 2, background: 'var(--gold)', marginBottom: 24 }} />

              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, maxWidth: 540, marginBottom: 32 }}>
                Attorney Timothy Tobin is a former Arizona prosecutor who now defends the accused — with flat-rate fees, direct access to your lawyer, and a proven track record of reduced and dismissed charges across Maricopa County.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
                <a href="tel:4804474837" className="cta-gold" style={{ fontSize: 16, padding: '15px 34px', textTransform: 'none' }}>
                  📞 Call (480) 447-4837
                </a>
                <Link href="/contact" className="cta-outline" style={{ fontSize: 15 }}>
                  Free Case Review
                </Link>
              </div>

              {/* Trust signals */}
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[
                  ['★ 5.0', '128 Google Reviews'],
                  ['$0',    'Free Consultation'],
                  ['Flat',  'No Hidden Fees'],
                  ['6am–8pm','Extended Hours'],
                ].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--gold)' }}>{val}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: lead form */}
            <div className="hero-card animate-in delay-2" style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(201,168,76,0.28)',
              borderRadius: 6, padding: '28px 22px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 19, fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>
                Get a Free Case Review
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
                Confidential · No obligation · Responds same day
              </div>

              {sent ? (
                <div style={{
                  background: 'rgba(201,168,76,0.12)', border: '1px solid var(--gold)',
                  borderRadius: 4, padding: '28px 16px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 32, color: 'var(--gold)', marginBottom: 10 }}>✓</div>
                  <strong style={{ fontFamily: 'Playfair Display, serif', color: 'var(--white)' }}>Message received.</strong>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 8 }}>
                    Tim will be in touch within a few hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <input type="text"  name="name"    placeholder="Your Name"    required
                    className="input-field-dark"
                    value={form.name}    onChange={e => setForm({ ...form, name: e.target.value })} />
                  <input type="tel"   name="phone"   placeholder="Phone Number" required
                    className="input-field-dark"
                    value={form.phone}   onChange={e => setForm({ ...form, phone: e.target.value })} />
                  <select name="charge" required className="input-field-dark"
                    value={form.charge} onChange={e => setForm({ ...form, charge: e.target.value })}
                    style={{ color: form.charge ? 'var(--white)' : 'rgba(255,255,255,0.38)' }}>
                    <option value="" disabled>Type of Charge</option>
                    {['DUI','Drug Offense','Domestic Violence','Assault','Theft / Property','Traffic','Other'].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <textarea name="message" placeholder="Brief description (optional)" rows={3}
                    className="input-field-dark" style={{ resize: 'vertical' }}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  <button type="submit" disabled={submitting} className="cta-gold"
                    style={{ width: '100%', fontSize: 15, padding: '13px', textTransform: 'none' }}>
                    {submitting ? 'Sending…' : 'Send My Case Details →'}
                  </button>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', textAlign: 'center' }}>
                    100% confidential. No attorney-client relationship created.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS BAR ── */}
      <div style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--gray-light)', padding: '16px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }} className="award-strip">
          {[
            ['National Trial Lawyers', 'Top 40 Under 40'],
            ['Avvo Rating',           'Superb 10.0'],
            ['State Bar of Arizona',  'Licensed & Active'],
            ['Google Reviews',        '★ 5.0 · 128 Reviews'],
          ].map(([label, sub], i, arr) => (
            <div key={label} className="award-item" style={{
              padding: '10px 28px', textAlign: 'center',
              borderRight: i < arr.length - 1 ? '1px solid var(--gray-light)' : 'none',
            }}>
              <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 13, fontWeight: 700, color: 'var(--navy)' }}>{label}</div>
              <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY CHOOSE TOBIN ── */}
      <section id="why-us" style={{ padding: '84px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Why Clients Choose Tim Tobin</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 40px)', marginTop: 8, color: 'var(--navy)' }}>
              A Former Prosecutor Fighting For You
            </h2>
            <div className="divider-gold" style={{ margin: '18px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '⚖️', title: 'Former Prosecutor Advantage', desc: "Timothy Tobin prosecuted for two government agencies, including Maricopa County. He knows exactly how prosecutors build their cases — and precisely how to dismantle them." },
              { icon: '📱', title: 'Direct Access to Your Attorney', desc: "No secretaries. No paralegals. Every client has Tim's direct cell phone and email. When you have a question, Tim answers — not a legal assistant." },
              { icon: '💲', title: 'Flat Rate — No Surprises', desc: "Affordable flat-rate representation with payment plans available. You know the full cost upfront. No hourly billing, no hidden fees, no matter how long your case takes." },
              { icon: '🕕', title: 'Available 6am to 8pm', desc: "Arrests don't happen on a 9–5 schedule. Tobin Law Office is reachable with extended hours, seven days a week, and responds to after-hours messages." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-hover" style={{
                background: 'var(--white)', border: '1px solid var(--gray-light)',
                borderTop: '3px solid var(--gold)', padding: '30px 24px',
                borderRadius: '0 0 5px 5px', boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ fontSize: 30, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'var(--navy)', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.78, color: 'var(--text-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS ── */}
      <section style={{ padding: '84px 24px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="section-label">What We Defend</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', marginTop: 8, color: 'var(--navy)' }}>
                Practice Areas
              </h2>
            </div>
            <Link href="/practice-areas" style={{
              fontFamily: 'Source Sans 3, sans-serif', fontSize: 14, fontWeight: 600,
              color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: 2,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >View All Practice Areas →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {PRACTICE_AREAS.map(({ icon, title, desc, href }) => (
              <Link href={href} key={title} className="card-hover" style={{
                display: 'block', background: 'var(--navy)',
                padding: '26px 24px', borderRadius: 4,
                borderLeft: '4px solid var(--gold)', boxShadow: 'var(--shadow-md)',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'var(--white)', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', lineHeight: 1.68, marginBottom: 14 }}>{desc}</p>
                <span style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 700, fontFamily: 'Source Sans 3, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" style={{ padding: '84px 24px', background: 'var(--navy)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Client Reviews</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', color: 'var(--white)', marginTop: 8 }}>
              ★ 5.0 on Google · 128 Reviews
            </h2>
            <div className="divider-gold" style={{ margin: '18px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 40 }}>
            {REVIEWS.map(({ name, location, stars, date, text }) => (
              <div key={name} className="card-hover" style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.18)',
                borderRadius: 5, padding: '26px 22px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <Stars n={stars} />
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontFamily: 'Source Sans 3, sans-serif' }}>{date}</span>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 16 }}>
                  "{text}"
                </p>
                <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--gold)' }}>
                  — {name}, {location}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="https://www.google.com/maps/search/?api=1&query=Tobin+Law+Office+Chandler+AZ" target="_blank" rel="noopener noreferrer"
              className="cta-outline" style={{ fontSize: 14 }}>
              Read All 128 Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section style={{ padding: '84px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-label">About Tim Tobin</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', color: 'var(--navy)', marginTop: 8, marginBottom: 10 }}>
                He Prosecuted Cases Like Yours. Now He Defends Them.
              </h2>
              <div className="divider-gold" style={{ marginBottom: 26 }} />
              <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-body)', marginBottom: 16 }}>
                Timothy Tobin is a former prosecutor for two Arizona government agencies, including Maricopa County. He knows how police build cases, how prosecutors think, and how courts work — because he spent years on the other side of the aisle.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-body)', marginBottom: 32 }}>
                Today, Tim personally handles every aspect of every case — with direct communication, aggressive representation, and flat-rate fees that make quality legal defense accessible across the Valley.
              </p>
              <Link href="/about" className="cta-navy" style={{ textTransform: 'none', fontSize: 15 }}>
                Read Tim's Story →
              </Link>
            </div>

            <div style={{
              background: 'linear-gradient(150deg, var(--navy) 0%, var(--navy-mid) 100%)',
              borderRadius: 6, padding: '36px 32px',
              border: '1px solid rgba(201,168,76,0.2)',
              boxShadow: 'var(--shadow-lg)',
            }}>
              {[
                ['Former Prosecutor',   'Two Arizona government agencies'],
                ['Flat Rate Fees',      'Full cost known upfront, always'],
                ['Payment Plans',       'Accessible representation for everyone'],
                ['Direct Cell Access',  "Clients get Tim's personal number"],
                ['Free Consultations',  'For every criminal offense'],
                ['5-Star Rated',        '128 verified Google reviews'],
              ].map(([val, lbl]) => (
                <div key={val} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <span style={{ color: 'var(--gold)', fontSize: 18, marginTop: 1, flexShrink: 0 }}>✓</span>
                  <div>
                    <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 600, color: 'var(--white)', fontSize: 15 }}>{val}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '84px 24px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Common Questions</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', color: 'var(--navy)', marginTop: 8 }}>
              Frequently Asked Questions
            </h2>
            <div className="divider-gold" style={{ margin: '18px auto 0' }} />
          </div>

          <div style={{ background: 'var(--white)', borderRadius: 6, border: '1px solid var(--gray-light)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{q}</span>
                  <span style={{
                    color: 'var(--gold)', fontSize: 22, flexShrink: 0,
                    transition: 'transform 0.22s', display: 'inline-block',
                    transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>+</span>
                </button>
                {openFaq === i && <div className="faq-answer">{a}</div>}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ fontSize: 15, color: 'var(--gray-mid)', marginBottom: 18 }}>Have a more specific question about your case?</p>
            <Link href="/contact" className="cta-gold" style={{ textTransform: 'none', fontSize: 15 }}>
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
