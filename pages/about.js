import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Attorney Tim Tobin | Tobin Law Office</title>
        <meta name="description" content="Timothy Tobin is a former Arizona prosecutor now defending clients across Maricopa County. Former DUI and felony drug prosecutor. Flat rates, direct access, 5-star rated." />
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
            Your Defense Attorney
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 46px)', color: 'var(--white)', lineHeight: 1.2 }}>
            Timothy Tobin
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>
            Criminal Defense Attorney · Former Arizona Prosecutor · Chandler & Mesa, AZ
          </p>
        </div>
      </div>

      {/* Main bio */}
      <section style={{ padding: '72px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 64, alignItems: 'start' }} className="bio-grid">

          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: 'var(--navy)', marginBottom: 8 }}>
              He Knows How the Government Thinks.<br />Now He Uses That Against Them.
            </h2>
            <div style={{ width: 48, height: 2, background: 'var(--gold)', marginBottom: 28 }} />

            {[
              `Timothy Tobin began his legal career as a prosecutor for two Arizona government agencies, including Maricopa County. As a prosecutor, he investigated and prosecuted cases referred from agencies including the Chandler Police Department — DUI arrests, drug offenses, domestic violence calls, assault charges, and more.`,
              `That experience gave Tim an inside view of exactly how law enforcement builds its cases, what prosecutors are looking for, and where the state's evidence is often weakest. He saw firsthand how cases could be won or lost based on a single procedural detail, a weakness in the chain of evidence, or a failure to challenge the state's narrative early.`,
              `In criminal defense, that knowledge is everything. Tim now applies his prosecutorial experience to defend his clients across Maricopa County — aggressively challenging the government's case at every step.`,
              `Unlike large law firms that pass clients between associates, Tim handles every aspect of every case personally. Clients have his direct cell phone and email. Questions get answered. Cases get attention.`,
              `Tim's family lives in the Chandler area. He's not just representing clients in these courts — he practices here, lives here, and is personally invested in the community he serves.`,
            ].map((para, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-body)', marginBottom: 20 }}>{para}</p>
            ))}

            <Link href="/contact" style={{
              display: 'inline-block', marginTop: 12,
              background: 'var(--gold)', color: 'var(--navy)',
              fontFamily: 'Source Sans 3, sans-serif',
              fontWeight: 700, fontSize: 15,
              padding: '13px 32px', borderRadius: 2, letterSpacing: '0.03em'
            }}>Schedule Your Free Consultation</Link>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Profile card */}
            <div style={{
              background: 'var(--navy)',
              borderRadius: 4, padding: '28px 24px',
              border: '1px solid rgba(201,168,76,0.2)'
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Playfair Display, serif', fontSize: 28, fontWeight: 700,
                color: 'var(--navy)', marginBottom: 16
              }}>T</div>

              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: 'var(--white)', marginBottom: 4 }}>Timothy Tobin</div>
              <div style={{ fontSize: 13, color: 'var(--gold)', marginBottom: 20 }}>Criminal Defense Attorney</div>

              {[
                ['Jurisdiction', 'Maricopa County & statewide'],
                ['Background', 'Former Arizona Prosecutor'],
                ['Fee Structure', 'Flat Rate · No Surprises'],
                ['Rating', '★ 5.0 · 128 Google Reviews'],
                ['Hours', 'Mon–Fri 6am–8pm'],
              ].map(([k, v]) => (
                <div key={k} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>{k}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)' }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Contact quick */}
            <div style={{
              background: 'var(--off-white)',
              borderRadius: 4, padding: '24px',
              border: '1px solid var(--gray-light)',
              textAlign: 'center'
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, color: 'var(--navy)', marginBottom: 12 }}>
                Ready to talk to Tim?
              </div>
              <a href="tel:4804474837" style={{
                display: 'block',
                background: 'var(--navy)', color: 'var(--white)',
                fontWeight: 700, fontSize: 17,
                padding: '13px', borderRadius: 2,
                fontFamily: 'Source Sans 3, sans-serif',
                marginBottom: 10
              }}>(480) 447-4837</a>
              <Link href="/contact" style={{
                display: 'block',
                background: 'transparent', color: 'var(--navy)',
                fontWeight: 600, fontSize: 14,
                padding: '11px', borderRadius: 2,
                border: '1.5px solid var(--navy)',
                fontFamily: 'Source Sans 3, sans-serif'
              }}>Send a Message</Link>
              <div style={{ fontSize: 11, color: 'var(--gray-mid)', marginTop: 10 }}>
                Free & confidential · Responds same day
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ padding: '60px 24px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: 'var(--navy)', marginBottom: 32, textAlign: 'center' }}>
            What Sets Tim Apart
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { n: '2', label: 'Government Agencies', sub: 'Prosecuted for Maricopa County and a second AZ agency' },
              { n: '5.0★', label: 'Google Rating', sub: '128 verified five-star reviews from real clients' },
              { n: '100%', label: 'Direct Attorney Access', sub: 'No secretaries or associates between you and Tim' },
              { n: '$0', label: 'Free Consultation', sub: 'Every criminal offense, no strings attached' },
            ].map(({ n, label, sub }) => (
              <div key={label} style={{
                background: 'var(--white)',
                borderTop: '3px solid var(--gold)',
                padding: '28px 20px',
                borderRadius: '0 0 4px 4px',
                textAlign: 'center'
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{n}</div>
                <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--navy)', marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-mid)', lineHeight: 1.5 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @media (max-width: 768px) {
          .bio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
