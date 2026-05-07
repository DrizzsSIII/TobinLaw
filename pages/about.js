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
        <meta property="og:title" content="About Attorney Tim Tobin | Tobin Law Office" />
        <meta property="og:description" content="Former Arizona prosecutor now defending clients across Maricopa County. Flat rates, direct access, 5-star rated criminal defense attorney." />
        <meta property="og:url" content="https://tobinlawoffice.com/about" />
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
        <img src="/logo.webp" alt="" aria-hidden="true" style={{
          position: 'absolute', top: 20, right: 24,
          height: 36, width: 'auto',
          filter: 'brightness(0) invert(1)', opacity: 0.2, pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-label">Your Defense Attorney</span>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: 'var(--white)', lineHeight: 1.15 }}>
            Timothy Tobin
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginTop: 14 }}>
            Criminal Defense Attorney · Former Arizona Prosecutor · Chandler &amp; Mesa, AZ
          </p>
        </div>
      </div>

      {/* Main bio */}
      <section style={{ padding: '80px 24px', background: 'var(--white)' }}>
        <div className="bio-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 64, alignItems: 'start' }}>

          {/* Bio text */}
          <div>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 28, color: 'var(--navy)', marginBottom: 8 }}>
              He Knows How the Government Thinks.<br />Now He Uses That Against Them.
            </h2>
            <div className="divider-gold" style={{ marginBottom: 30 }} />

            {[
              "Timothy Tobin began his legal career as a prosecutor for two Arizona government agencies, including Maricopa County. As a prosecutor, he investigated and prosecuted cases referred from the Chandler Police Department: DUI arrests, drug offenses, domestic violence calls, assault charges, and more.",
              "That experience gave Tim an inside view of exactly how law enforcement builds its cases, what prosecutors are looking for, and where the state's evidence is often weakest. He saw firsthand how cases could be won or lost based on a single procedural detail, a weakness in the chain of evidence, or a failure to challenge the state's narrative early.",
              "In criminal defense, that knowledge is everything. Tim now applies his prosecutorial experience to defend his clients across Maricopa County, aggressively challenging the government's case at every step.",
              "Unlike large law firms that pass clients between associates, Tim handles every aspect of every case personally. Clients have his direct cell phone and email. Questions get answered. Cases get attention.",
              "Tim's family lives in the Chandler area. He's not just representing clients in these courts. He practices here, lives here, and is personally invested in the community he serves.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.88, color: 'var(--text-body)', marginBottom: 20 }}>{para}</p>
            ))}

            <Link href="/contact" className="cta-gold" style={{ textTransform: 'none', fontSize: 15, marginTop: 12, display: 'inline-block' }}>
              Schedule Your Free Consultation
            </Link>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Headshot */}
            <div>
              <img
                src="/tim-about.jpg"
                alt="Timothy Tobin, Criminal Defense Attorney"
                style={{
                  width: '100%', maxWidth: 380, display: 'block',
                  borderRadius: 4, border: '2px solid #c9a84c',
                  marginBottom: 16, boxShadow: 'var(--shadow-lg)',
                }}
              />
              <p style={{
                fontSize: 12, color: '#c9a84c', textAlign: 'center',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                fontFamily: 'Raleway, sans-serif', fontWeight: 600,
              }}>
                Timothy Tobin · Criminal Defense Attorney
              </p>
            </div>

            {/* Attorney details card */}
            <div style={{ background: 'var(--navy)', borderRadius: 5, padding: '26px 22px', border: '1px solid rgba(201,168,76,0.2)', boxShadow: 'var(--shadow-md)' }}>
              <img src="/logo.webp" alt="Tobin Law Office" style={{
                height: 40, width: 'auto',
                filter: 'brightness(0) invert(1)', opacity: 0.6, marginBottom: 16,
                display: 'block',
              }} />
              {[
                ['Jurisdiction',   'Maricopa County & statewide'],
                ['Background',     'Former Arizona Prosecutor'],
                ['Fee Structure',  'Flat Rate · No Surprises'],
                ['Payment Plans',  'Available on all cases'],
                ['Rating',         '★ 5.0 · 128 Google Reviews'],
                ['Hours',          'Mon–Fri 6am–8pm'],
              ].map(([k, v]) => (
                <div key={k} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 3 }}>{k}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Contact quick */}
            <div style={{ background: 'var(--off-white)', borderRadius: 5, padding: '24px', border: '1px solid var(--gray-light)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: 16, color: 'var(--navy)', marginBottom: 14 }}>
                Ready to talk to Tim?
              </div>
              <a href="tel:4804474837" className="cta-navy" style={{ display: 'block', fontSize: 17, textTransform: 'none', marginBottom: 10 }}>
                (480) 447-4837
              </a>
              <Link href="/contact" style={{
                display: 'block', padding: '11px',
                border: '1.5px solid var(--navy)', borderRadius: 2,
                fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: 14,
                color: 'var(--navy)', transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,22,40,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >Send a Message</Link>
              <div style={{ fontSize: 11, color: 'var(--gray-mid)', marginTop: 12 }}>
                Free &amp; confidential · Responds same day
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credential stats */}
      <section style={{ padding: '64px 24px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 28, color: 'var(--navy)', marginBottom: 36, textAlign: 'center' }}>
            What Sets Tim Apart
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { n: '2',    label: 'Government Agencies',    sub: 'Prosecuted for Maricopa County and a second AZ agency' },
              { n: '5.0★', label: 'Google Rating',          sub: '128 verified five-star reviews from real clients' },
              { n: '100%', label: 'Direct Attorney Access', sub: 'No secretaries or associates between you and Tim' },
              { n: '$0',   label: 'Free Consultation',      sub: 'Every criminal offense, no strings attached' },
            ].map(({ n, label, sub }) => (
              <div key={label} className="card-hover" style={{
                background: 'var(--white)', borderTop: '3px solid var(--gold)',
                padding: '30px 20px', borderRadius: '0 0 5px 5px', textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: 38, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{n}</div>
                <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--navy)', marginBottom: 8 }}>{label}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-mid)', lineHeight: 1.55 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: '64px 24px', background: 'var(--navy)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Recognition</span>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 26, color: 'var(--white)', marginTop: 8, marginBottom: 40 }}>
            Awards &amp; Credentials
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
            {[
              { title: 'National Trial Lawyers', sub: 'Top 40 Under 40' },
              { title: 'Avvo',                   sub: 'Superb Rating 10.0' },
              { title: 'State Bar of Arizona',   sub: 'Licensed & Active Member' },
              { title: 'Google Reviews',         sub: '★ 5.0 · 128 Reviews' },
            ].map(({ title, sub }) => (
              <div key={title} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.22)',
                borderTop: '2px solid var(--gold)',
                borderRadius: '0 0 4px 4px',
                padding: '22px 28px', minWidth: 165, textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: 15, fontWeight: 600, color: 'var(--white)', marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
