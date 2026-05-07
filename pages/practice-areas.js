import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  IconCar, IconBeaker, IconHome, IconScale,
  IconLock, IconExclamationTriangle,
} from '../components/Icons';

const AREAS = [
  {
    icon: '🚗', Icon: IconCar, title: 'DUI Defense', id: 'dui',
    tagline: 'Former DUI Prosecutor. Knows Every Angle.',
    desc: [
      "Arizona has some of the harshest DUI laws in the country. A DUI conviction — even a first offense — can mean jail time, steep fines, license suspension, and a permanent criminal record that follows you for life.",
      "Attorney Tobin is a former DUI prosecutor who handled these exact cases from the other side. He knows how the state builds its case, where to look for weaknesses in field sobriety tests and breathalyzer results, and how to get charges reduced or dismissed.",
    ],
    bullets: ['Simple DUI (BAC 0.08%+)', 'Extreme DUI (BAC 0.15–0.20%)', 'Super Extreme DUI (BAC 0.20%+)', 'Underage DUI (zero tolerance)', 'Drugged / prescription DUI', 'Admin Per Se license suspension'],
  },
  {
    icon: '💊', Icon: IconBeaker, title: 'Drug Crimes', id: 'drug-crimes',
    tagline: 'Former Felony Drug Prosecutor on Your Side.',
    desc: [
      "Arizona treats drug offenses seriously. Even possession for personal use can be charged as a felony, with sentences ranging from probation to years in prison — and a permanent record that affects employment, housing, and more.",
      "As a former Maricopa County felony drug prosecutor, Tim Tobin understands how these cases are investigated, charged, and prosecuted. He builds aggressive defenses tailored to each client's specific circumstances.",
    ],
    bullets: ['Felony drug possession', 'Possession with intent to distribute', 'Drug trafficking', 'Drug paraphernalia charges', 'Prescription fraud', 'Marijuana offenses'],
  },
  {
    icon: '🏠', Icon: IconHome, title: 'Domestic Violence', id: 'domestic-violence',
    tagline: 'Protecting Your Rights, Record, and Future.',
    desc: [
      "Domestic violence charges carry lasting consequences beyond the criminal conviction — gun rights, child custody, employment, and background checks can all be affected, sometimes permanently.",
      "Tobin Law Office aggressively pursues every available defense, including diversion programs that can result in dismissal of all charges. Tim knows these courts and these prosecutors — and how to navigate both.",
    ],
    bullets: ['Assault in a domestic relationship', 'Threatening or intimidating', 'Aggravated domestic violence', 'Criminal damage / trespass', 'Domestic violence diversion program'],
  },
  {
    icon: '⚖️', Icon: IconScale, title: 'Assault & Violent Crimes', id: 'assault',
    tagline: 'Your Rights, Reputation, and Freedom on the Line.',
    desc: [
      "Assault charges range from misdemeanors to serious felonies depending on the circumstances, the alleged victim, and whether a weapon was involved. A conviction can affect every aspect of your life.",
      "Tim Tobin prepares each case with a comprehensive defense strategy, challenging the state's evidence at every step and pursuing every avenue — from self-defense claims to evidentiary challenges.",
    ],
    bullets: ['Simple assault (Class 1 misdemeanor)', 'Aggravated assault (felony)', 'Bar fight and altercation defense', 'Self-defense and justification claims', 'Threatening or intimidating charges'],
  },
  {
    icon: '🔒', Icon: IconLock, title: 'Property & Theft Crimes', id: 'theft',
    tagline: 'Charges Reduced or Dismissed.',
    desc: [
      "From shoplifting to burglary, property crimes are prosecuted aggressively in Arizona. Many clients are surprised to learn that charges they consider minor can result in felony convictions.",
      "Tobin Law Office works to reduce or dismiss charges wherever possible, protecting your record and future through negotiation, diversion programs, and aggressive courtroom defense.",
    ],
    bullets: ['Shoplifting', 'Theft (all levels)', 'Burglary', 'Criminal damage / vandalism', 'Robbery'],
  },
  {
    icon: '🚦', Icon: IconExclamationTriangle, title: 'Traffic Violations', id: 'traffic',
    tagline: "Don't Let a Ticket Become a Criminal Record.",
    desc: [
      "Many traffic violations in Arizona are criminal charges — not just civil tickets. Even a seemingly minor offense like criminal speeding can result in a permanent criminal record, license suspension, and points that raise your insurance rates.",
      "Attorney Tobin defends clients against criminal traffic charges to protect their records, licenses, and futures. Don't assume a traffic ticket isn't worth fighting.",
    ],
    bullets: ['Reckless driving', 'Aggressive driving', 'Criminal speeding', 'Hit and run', 'License violations'],
  },
];

export default function PracticeAreas() {
  return (
    <>
      <Head>
        <title>Practice Areas | Tobin Law Office</title>
        <meta name="description" content="DUI, drug crimes, domestic violence, assault, theft, and traffic defense in Chandler and Mesa, Arizona. Former prosecutor. Flat rates." />
        <meta property="og:title" content="Practice Areas | Tobin Law Office" />
        <meta property="og:description" content="DUI, drug crimes, domestic violence, assault, theft, and traffic defense in Chandler and Mesa, Arizona. Former prosecutor. Flat rates." />
        <meta property="og:url" content="https://tobinlawoffice.com/practice-areas" />
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
          <span className="section-label">Criminal Defense</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: 'var(--white)', lineHeight: 1.15 }}>
            Practice Areas
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginTop: 14, maxWidth: 560 }}>
            Flat-rate criminal defense across Maricopa County. Every case receives Tim Tobin's direct, focused attention — from first consultation through final resolution.
          </p>
        </div>
      </div>

      {/* Quick-jump pill nav */}
      <div style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--gray-light)', padding: '14px 24px', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {AREAS.map(({ Icon, title, id }) => (
            <a key={id} href={`#${id}`} style={{
              fontFamily: 'Source Sans 3, sans-serif', fontSize: 13, fontWeight: 600,
              color: 'var(--navy)', background: 'var(--white)',
              border: '1px solid var(--gray-light)', borderRadius: 20,
              padding: '6px 14px', whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-light)'; e.currentTarget.style.color = 'var(--navy)'; }}
            ><Icon width={16} height={16} /> {title}</a>
          ))}
        </div>
      </div>

      {/* Practice area sections */}
      <section style={{ padding: '64px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {AREAS.map(({ Icon, title, id, tagline, desc, bullets }, i) => (
            <div key={id} id={id} className="area-row" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
              padding: '52px 0',
              borderBottom: i < AREAS.length - 1 ? '1px solid var(--gray-light)' : 'none',
              scrollMarginTop: '80px',
            }}>
              {/* Description */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                  <span style={{ color: 'var(--navy)', flexShrink: 0 }}><Icon width={36} height={36} /></span>
                  <div>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, color: 'var(--navy)', lineHeight: 1.15 }}>{title}</h2>
                    <div style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 600, marginTop: 4, fontFamily: 'Source Sans 3, sans-serif' }}>{tagline}</div>
                  </div>
                </div>
                {desc.map((para, j) => (
                  <p key={j} style={{ fontSize: 15, lineHeight: 1.82, color: 'var(--text-body)', marginBottom: 14 }}>{para}</p>
                ))}
                <Link href="/contact" className="cta-navy" style={{ textTransform: 'none', fontSize: 14, padding: '11px 26px', marginTop: 8, display: 'inline-block' }}>
                  Free Consultation →
                </Link>
              </div>

              {/* Charges list */}
              <div style={{
                background: 'var(--off-white)', borderRadius: 5,
                padding: '28px 26px', borderLeft: '4px solid var(--gold)',
                alignSelf: 'start',
              }}>
                <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: 18 }}>
                  Charges We Defend
                </div>
                {bullets.map(b => (
                  <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 11 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{b}</span>
                  </div>
                ))}
                <div style={{ marginTop: 24, padding: '18px', borderRadius: 4, background: 'var(--navy)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 14, color: 'var(--white)', marginBottom: 6 }}>Charged with this?</div>
                  <a href="tel:4804474837" style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 18, fontFamily: 'Source Sans 3, sans-serif', display: 'block' }}>
                    (480) 447-4837
                  </a>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Free &amp; confidential</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section style={{ padding: '64px 24px', background: 'var(--navy)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <span className="section-label">Get Help Now</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--white)', marginTop: 8, marginBottom: 16 }}>
            Don't Face the State Alone
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.62)', lineHeight: 1.72, marginBottom: 32 }}>
            A former prosecutor is ready to review your case — for free, with no obligation. The sooner you call, the more options you have.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:4804474837" className="cta-gold" style={{ fontSize: 16, textTransform: 'none' }}>
              📞 (480) 447-4837
            </a>
            <Link href="/contact" className="cta-outline" style={{ fontSize: 15 }}>
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
