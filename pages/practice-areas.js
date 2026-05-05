import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AREAS = [
  {
    icon: '🚗',
    title: 'DUI Defense',
    slug: 'dui',
    tagline: 'Former DUI Prosecutor. Knows Every Angle.',
    desc: `Arizona has some of the harshest DUI laws in the country. A DUI conviction — even a first offense — can mean jail time, steep fines, license suspension, and a permanent criminal record.

Attorney Tobin is a former DUI prosecutor who handled these exact cases from the other side. He knows how the state builds its case, where to look for weaknesses, and how to get charges reduced or dismissed.`,
    bullets: [
      'Simple DUI (BAC 0.08%+)',
      'Extreme DUI (BAC 0.15–0.20%)',
      'Super Extreme DUI (BAC 0.20%+)',
      'Underage DUI (zero tolerance)',
      'Drugged driving / prescription DUI',
    ]
  },
  {
    icon: '💊',
    title: 'Drug Crimes',
    slug: 'drug-crimes',
    tagline: 'Former Felony Drug Prosecutor on Your Side.',
    desc: `Arizona treats drug offenses seriously. Even possession for personal use can be charged as a felony, with sentences ranging from probation to years in prison.

As a former Maricopa County felony drug prosecutor, Tim Tobin understands how these cases are investigated, charged, and prosecuted. He builds aggressive defenses tailored to each client's specific circumstances.`,
    bullets: [
      'Felony drug possession',
      'Possession with intent to distribute',
      'Drug trafficking',
      'Drug paraphernalia charges',
      'Prescription fraud',
    ]
  },
  {
    icon: '🏠',
    title: 'Domestic Violence',
    slug: 'domestic-violence',
    tagline: 'Protecting Your Rights, Record, and Future.',
    desc: `Domestic violence charges carry lasting consequences beyond the criminal conviction — gun rights, child custody, employment, and background checks can all be affected.

Tobin Law Office aggressively pursues every available defense, including diversion programs that can result in dismissal of all charges.`,
    bullets: [
      'Assault in a domestic relationship',
      'Threatening or intimidating',
      'Aggravated domestic violence',
      'Criminal damage / trespass',
      'Domestic violence diversion',
    ]
  },
  {
    icon: '⚖️',
    title: 'Assault & Violent Crimes',
    slug: 'assault',
    tagline: 'Your Rights, Reputation, and Freedom on the Line.',
    desc: `Assault charges range from misdemeanors to serious felonies, depending on the circumstances. A conviction can affect every aspect of your life.

Tim Tobin prepares each case with a comprehensive defense strategy, challenging the state's evidence at every step.`,
    bullets: [
      'Simple assault (Class 1 misdemeanor)',
      'Aggravated assault (felony)',
      'Bar fight and altercation defense',
      'Self-defense and justification claims',
      'Threatening or intimidating charges',
    ]
  },
  {
    icon: '🔒',
    title: 'Property & Theft Crimes',
    slug: 'theft',
    tagline: 'Charges Reduced or Dismissed.',
    desc: `From shoplifting to burglary, property crimes are prosecuted aggressively in Arizona. Many clients are surprised to learn these charges can result in felony convictions.

Tobin Law Office works to reduce or dismiss charges wherever possible, protecting your record and future.`,
    bullets: [
      'Shoplifting',
      'Theft (all levels)',
      'Burglary',
      'Criminal damage / vandalism',
      'Robbery',
    ]
  },
  {
    icon: '🚦',
    title: 'Traffic Violations',
    slug: 'traffic',
    tagline: "Don't Let a Ticket Become a Criminal Record.",
    desc: `Many traffic violations in Arizona are criminal charges, not just civil tickets. Even a seemingly minor traffic offense can result in a permanent criminal record, license suspension, and points on your driving record.

Attorney Tobin defends clients against criminal traffic charges to protect their records and licenses.`,
    bullets: [
      'Reckless driving',
      'Aggressive driving',
      'Criminal speeding',
      'Hit and run',
      'License violations',
    ]
  },
];

export default function PracticeAreas() {
  return (
    <>
      <Head>
        <title>Practice Areas | Tobin Law Office</title>
        <meta name="description" content="DUI, drug crimes, domestic violence, assault, theft, and traffic defense in Chandler and Mesa, Arizona." />
      </Head>

      <Nav />

      {/* Page header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
        padding: '56px 24px 52px',
        borderBottom: '3px solid var(--gold)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: 12 }}>
            Criminal Defense
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 46px)', color: 'var(--white)', lineHeight: 1.2 }}>
            Practice Areas
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginTop: 16, maxWidth: 560 }}>
            Flat-rate criminal defense across Maricopa County. Every case receives Tim Tobin's direct, focused attention.
          </p>
        </div>
      </div>

      {/* Areas */}
      <section style={{ padding: '64px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {AREAS.map(({ icon, title, tagline, desc, bullets }, i) => (
            <div key={title} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              padding: '36px 0',
              borderBottom: '1px solid var(--gray-light)'
            }} className="area-row">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>{icon}</span>
                  <div>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, color: 'var(--navy)' }}>{title}</h2>
                    <div style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 600, marginTop: 2 }}>{tagline}</div>
                  </div>
                </div>
                {desc.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 12 }}>{para}</p>
                ))}
                <Link href="/contact" style={{
                  display: 'inline-block', marginTop: 8,
                  background: 'var(--navy)', color: 'var(--white)',
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontWeight: 600, fontSize: 14,
                  padding: '11px 24px', borderRadius: 2
                }}>Free Consultation →</Link>
              </div>

              <div style={{
                background: 'var(--off-white)',
                borderRadius: 4, padding: '28px 24px',
                borderLeft: '4px solid var(--gold)',
                alignSelf: 'start'
              }}>
                <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: 16 }}>
                  Charges We Defend
                </div>
                {bullets.map(b => (
                  <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{b}</span>
                  </div>
                ))}
                <div style={{
                  marginTop: 24, padding: '16px', borderRadius: 3,
                  background: 'var(--navy)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, color: 'var(--white)', marginBottom: 4 }}>Charged with this?</div>
                  <a href="tel:4804474837" style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 17, fontFamily: 'Source Sans 3, sans-serif' }}>
                    (480) 447-4837
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @media (max-width: 768px) {
          .area-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
