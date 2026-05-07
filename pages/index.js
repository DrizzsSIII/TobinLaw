import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';
import {
  IconCar, IconBeaker, IconHome, IconScale,
  IconLock, IconExclamationTriangle, IconChat,
  IconCurrencyDollar, IconClock,
} from '../components/Icons';

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
  { Icon: IconCar,                title: 'DUI Defense',             href: '/practice-areas#dui',              desc: "Simple, extreme, super extreme, and underage DUI. Former DUI prosecutor who knows every angle of the state's case." },
  { Icon: IconBeaker,             title: 'Drug Crimes',              href: '/practice-areas#drug-crimes',      desc: 'Possession, trafficking, and sale of controlled substances. Felony drug defense from a former Maricopa County drug prosecutor.' },
  { Icon: IconHome,               title: 'Domestic Violence',        href: '/practice-areas#domestic-violence',desc: 'Experienced defense in Chandler, Mesa, and Maricopa County courts. Diversion programs and charge dismissals pursued aggressively.' },
  { Icon: IconScale,              title: 'Assault & Violent Crimes', href: '/practice-areas#assault',          desc: 'From misdemeanor assault to aggravated felony charges. Every case gets a customized defense strategy.' },
  { Icon: IconLock,               title: 'Property & Theft',         href: '/practice-areas#theft',            desc: 'Shoplifting, burglary, and theft charges. Charges can often be reduced or dismissed with the right representation.' },
  { Icon: IconExclamationTriangle,title: 'Traffic Violations',       href: '/practice-areas#traffic',          desc: 'Even a traffic charge can leave a permanent criminal record. We protect your record, license, and future.' },
];

const WHY_CARDS = [
  { Icon: IconScale,          title: 'Former Prosecutor Advantage', desc: "Timothy Tobin prosecuted for two government agencies, including Maricopa County. He knows exactly how prosecutors build their cases — and precisely how to dismantle them." },
  { Icon: IconChat,           title: 'Direct Access to Your Attorney', desc: "No secretaries. No paralegals. Every client has Tim's direct cell phone and email. When you have a question, Tim answers — not a legal assistant." },
  { Icon: IconCurrencyDollar, title: 'Flat Rate — No Surprises', desc: "Affordable flat-rate representation with payment plans available. You know the full cost upfront. No hourly billing, no hidden fees, no matter how long your case takes." },
  { Icon: IconClock,          title: 'Available 6am to 8pm', desc: "Arrests don't happen on a 9–5 schedule. Tobin Law Office is reachable with extended hours, seven days a week, and responds to after-hours messages." },
];

const CASE_RESULTS = [
  { charge: 'DUI',               outcome: 'Charges Dismissed',             detail: 'Breathalyzer challenged; state dropped all counts. Client kept license and record clean.' },
  { charge: 'Drug Trafficking',  outcome: 'Reduced to Simple Possession',  detail: 'Mandatory prison sentence avoided. Client received probation with no jail time.' },
  { charge: 'Domestic Violence', outcome: 'Case Dismissed',                detail: 'Diversion program completed successfully. All charges dropped; record remains clean.' },
  { charge: 'Aggravated Assault',outcome: 'Acquitted at Trial',            detail: 'Self-defense claim upheld by jury. Not guilty on all felony counts.' },
  { charge: 'Felony Shoplifting', outcome: 'Reduced to Misdemeanor',       detail: 'Felony conviction avoided. Client maintained employment and housing eligibility.' },
  { charge: 'Criminal Speeding', outcome: 'Charges Dismissed',             detail: 'Record preserved, license protected. No points, no criminal history entry.' },
];

const FAQS = [
  {
    q: 'What are the penalties for a first DUI in Arizona?',
    a: "Arizona has some of the harshest DUI laws in the nation. A first-offense DUI (BAC 0.08%+) carries a mandatory minimum of 10 consecutive days in jail (though 9 can be suspended with treatment), fines exceeding $1,500, a 90-day license suspension, and required ignition interlock installation. Extreme DUI (BAC 0.15%+) and Super Extreme (BAC 0.20%+) carry even harsher mandatory minimums. The good news: these charges can often be challenged and reduced with the right attorney.",
  },
  {
    q: 'Can drug possession charges be reduced or dismissed in Arizona?',
    a: "Yes — often. Arizona offers several pathways including Proposition 200 (which mandates probation over prison for first and second personal-use possessions), drug diversion programs, and TASC (Treatment Assessment Screening Center) programs that can result in full dismissal upon completion. An aggressive defense can also challenge the legality of the search and seizure that led to the arrest, which can result in evidence suppression and case dismissal.",
  },
  {
    q: 'What happens immediately after a domestic violence arrest in Arizona?',
    a: "Arizona law requires a mandatory arrest when police are called to a domestic disturbance and find probable cause — even if the alleged victim doesn't want to press charges. After arrest, you'll appear before a judge for an Initial Appearance within 24 hours. A protective order is typically issued, which can prohibit you from returning to your home. You should contact an attorney before making any statements to police, and before attempting contact with the alleged victim — violations of a protective order carry additional criminal penalties.",
  },
  {
    q: 'Is criminal speeding a serious charge in Arizona?',
    a: "Yes. Unlike a civil traffic ticket, criminal speeding in Arizona (A.R.S. § 28-701.02) is a Class 3 misdemeanor — a criminal charge that creates a permanent criminal record. It applies if you drive over 85 mph anywhere, over 35 mph in a school zone, or 20+ mph over the posted limit. A conviction carries up to 30 days in jail, fines, and 3 points on your license. Many people are surprised to learn a 'traffic ticket' is actually a criminal offense — and that it's worth fighting.",
  },
  {
    q: 'What is a criminal diversion program and do I qualify?',
    a: "Diversion programs allow eligible defendants to avoid a criminal conviction entirely by completing requirements such as counseling, community service, education classes, or treatment. Upon successful completion, charges are dismissed. In Arizona, diversion is available for many first-time offenses including certain drug charges, domestic violence, minor assault, and some theft cases. Eligibility depends on the charge, your criminal history, and the specific court. Attorney Tobin has extensive experience negotiating diversion agreements and knows which courts and prosecutors are most receptive.",
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
        <title>Tobin Law Office | Chandler &amp; Mesa Criminal Defense Attorney</title>
        <meta name="description" content="Arizona criminal defense attorney Timothy Tobin — DUI, drug crimes, domestic violence, assault. Former prosecutor. Flat rates. Free consultations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tobin Law Office | Chandler &amp; Mesa Criminal Defense Attorney" />
        <meta property="og:description" content="Former Arizona prosecutor now defending the accused. DUI, drug crimes, domestic violence, assault. Flat rates. Free consultations across Maricopa County." />
        <meta property="og:url" content="https://tobinlawoffice.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD }} />
      </Head>

      <Nav />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', color: 'var(--white)' }}>
        {/* Gold top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--gold)', zIndex: 3 }} />

        <div className="photo-hero" style={{ display: 'flex', minHeight: 600 }}>

          {/* LEFT: Photo column (55%) */}
          <div className="photo-hero-photo" style={{ flex: '0 0 55%', position: 'relative', overflow: 'hidden' }}>
            <img
              src="/tim-hero.jpg"
              alt="Attorney Timothy Tobin"
              style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%', display: 'block' }}
            />
            {/* Right-edge bleed into navy */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(to right, transparent 70%, #0a1628 100%)',
            }} />
          </div>

          {/* RIGHT: Text + form column (45%) */}
          <div className="photo-hero-content" style={{
            flex: '0 0 45%', background: '#0a1628',
            padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <div className="animate-in delay-1">
              <span className="section-label">Chandler &amp; Mesa, Arizona</span>
              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 3.2vw, 52px)',
                fontWeight: 800, color: 'var(--white)',
                lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em',
              }}>
                Your Charges Are Serious.{' '}
                <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>So Is Tim Tobin.</em>
              </h1>

              <div style={{ width: 52, height: 2, background: 'var(--gold)', marginBottom: 20 }} />

              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.78)', lineHeight: 1.78, marginBottom: 28 }}>
                A former Arizona prosecutor who spent years building cases like yours — now he uses that knowledge to tear them apart. Flat rates. Direct access. Real results across Maricopa County.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
                <a href="tel:4804474837" className="cta-gold" style={{ fontSize: 15, padding: '14px 28px', textTransform: 'none' }}>
                  Call (480) 447-4837
                </a>
                <Link href="/case-review" className="cta-outline" style={{ fontSize: 14 }}>
                  Start Free Case Review →
                </Link>
              </div>

              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 36 }}>
                {[
                  ['★ 5.0', '128 Google Reviews'],
                  ['$0',    'Free Consultation'],
                  ['Flat',  'No Hidden Fees'],
                  ['6am–8pm','Extended Hours'],
                ].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700, color: 'var(--gold)' }}>{val}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{lbl}</div>
                  </div>
                ))}
              </div>

              {/* Quick contact card */}
              <div className="hero-card animate-in delay-2" style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(201,168,76,0.28)',
                borderRadius: 6, padding: '24px 20px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 17, fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>
                  Quick Contact
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>
                  Prefer to talk first? Drop your number and Tim calls you.
                </div>

                {sent ? (
                  <div style={{
                    background: 'rgba(201,168,76,0.12)', border: '1px solid var(--gold)',
                    borderRadius: 4, padding: '24px 16px', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 28, color: 'var(--gold)', marginBottom: 8 }}>✓</div>
                    <strong style={{ fontFamily: 'Playfair Display, serif', color: 'var(--white)' }}>Got it — Tim will call you.</strong>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 8 }}>
                      Expect a call within a few hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    <input type="text" name="name" placeholder="Your Name" required
                      className="input-field-dark"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input type="tel" name="phone" placeholder="Phone Number" required
                      className="input-field-dark"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    <select name="charge" required className="input-field-dark"
                      value={form.charge} onChange={e => setForm({ ...form, charge: e.target.value })}
                      style={{ color: form.charge ? 'var(--white)' : 'rgba(255,255,255,0.38)' }}>
                      <option value="" disabled>Type of Charge</option>
                      {['DUI','Drug Offense','Domestic Violence','Assault','Theft / Property','Traffic','Other'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <button type="submit" disabled={submitting} className="cta-gold"
                      style={{ width: '100%', fontSize: 14, padding: '12px', textTransform: 'none' }}>
                      {submitting ? 'Sending…' : 'Request a Callback →'}
                    </button>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', textAlign: 'center' }}>
                      100% confidential. No attorney-client relationship created.
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 6 }}>
                      <a href="tel:4804474837" style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
                        Or call now: <span style={{ color: 'var(--gold)', fontWeight: 600 }}>(480) 447-4837</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
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
            {WHY_CARDS.map(({ Icon, title, desc }) => (
              <div key={title} className="card-hover" style={{
                background: 'var(--white)', border: '1px solid var(--gray-light)',
                borderTop: '3px solid var(--gold)', padding: '30px 24px',
                borderRadius: '0 0 5px 5px', boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ color: 'var(--navy)', marginBottom: 14 }}>
                  <Icon width={28} height={28} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'var(--navy)', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.78, color: 'var(--text-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WIZARD CTA ── */}
      <section style={{ padding: '72px 24px', background: 'var(--navy)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>

            {/* Left: text */}
            <div>
              <span className="section-label">Free Case Evaluation</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', color: 'var(--white)', marginTop: 8, marginBottom: 16, lineHeight: 1.2 }}>
                Explain Your Case in 90 Seconds
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 24 }}>
                Not sure where to start? Answer a few questions about your charges — Tim will review your full situation before he ever picks up the phone. No forms. No guessing. Just tell us what happened.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {[
                  'Takes 90 seconds — 7 quick questions',
                  'Branches based on your charge type',
                  'Tim sees your case details before calling',
                ].map(pt => (
                  <div key={pt} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{pt}</span>
                  </div>
                ))}
              </div>
              <Link href="/case-review" className="cta-gold" style={{ fontSize: 16, padding: '15px 36px', textTransform: 'none' }}>
                Start Case Evaluation →
              </Link>
            </div>

            {/* Right: static wizard preview card */}
            <Link href="/case-review" style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.22)',
                borderRadius: 8, padding: '28px 24px',
                cursor: 'pointer', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.22)'}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 14, fontFamily: 'Source Sans 3, sans-serif' }}>
                  Step 1 of 7 — Select your charge type
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
                  {[
                    { label: 'DUI', sub: 'Driving under the influence' },
                    { label: 'Drug Offense', sub: 'Possession, trafficking, sale' },
                    { label: 'Domestic Violence', sub: 'Assault in domestic relationship' },
                    { label: 'Assault', sub: 'Violent crime or threatening' },
                  ].map(({ label, sub }) => (
                    <div key={label} style={{
                      background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.1)',
                      borderRadius: 4, padding: '12px 12px',
                      transition: 'border-color 0.15s',
                    }}>
                      <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--white)', marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{sub}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>+ 3 more charge types</div>
                <div style={{ fontSize: 13, color: 'var(--gold)', fontStyle: 'italic' }}>Tap any option to begin →</div>
              </div>
            </Link>
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
            {PRACTICE_AREAS.map(({ Icon, title, desc, href }) => (
              <Link href={href} key={title} className="card-hover" style={{
                display: 'block', background: 'var(--navy)',
                padding: '26px 24px', borderRadius: 4,
                borderLeft: '4px solid var(--gold)', boxShadow: 'var(--shadow-md)',
              }}>
                <div style={{ color: 'var(--gold)', marginBottom: 10 }}>
                  <Icon width={28} height={28} />
                </div>
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

      {/* ── CASE RESULTS ── */}
      <section style={{ padding: '84px 24px', background: 'var(--navy-mid)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Case Outcomes</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', color: 'var(--white)', marginTop: 8 }}>
              Results That Speak for Themselves
            </h2>
            <div className="divider-gold" style={{ margin: '18px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {CASE_RESULTS.map(({ charge, outcome, detail }) => (
              <div key={charge} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderLeft: '4px solid var(--gold)',
                borderRadius: '0 4px 4px 0',
                padding: '24px 20px',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 8 }}>
                  {charge}
                </div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700, color: 'var(--gold)', marginBottom: 10, lineHeight: 1.25 }}>
                  {outcome}
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.68 }}>{detail}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.28)', marginTop: 28, fontStyle: 'italic' }}>
            Prior results do not guarantee similar outcomes. Every case is different.
          </p>
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
