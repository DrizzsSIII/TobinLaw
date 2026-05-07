import Link from 'next/link';

const PRACTICE_LINKS = [
  ['DUI Defense',             '/practice-areas#dui'],
  ['Drug Crimes',             '/practice-areas#drug-crimes'],
  ['Domestic Violence',       '/practice-areas#domestic-violence'],
  ['Assault & Violent Crimes','/practice-areas#assault'],
  ['Property & Theft',        '/practice-areas#theft'],
  ['Traffic Violations',      '/practice-areas#traffic'],
];

const SERVICE_CITIES = ['Chandler', 'Mesa', 'Gilbert', 'Tempe', 'Scottsdale', 'Phoenix', 'San Tan Valley', 'Queen Creek'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.68)' }}>

      {/* CTA bar */}
      <div style={{ background: 'var(--gold)', padding: '30px 24px' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: 22, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2 }}>
              Charged with a crime? Call now. It's free.
            </div>
            <div style={{ fontSize: 14, color: 'rgba(10,22,40,0.7)', marginTop: 5 }}>
              Available 6am – 8pm · Free & confidential consultations · Payment plans available
            </div>
          </div>
          <Link href="/case-review" className="cta-navy" style={{ fontSize: 16, padding: '14px 32px', textTransform: 'none', whiteSpace: 'nowrap' }}>
            Start Free Case Review →
          </Link>
        </div>
      </div>

      {/* Awards strip */}
      <div style={{ borderBottom: '1px solid rgba(201,168,76,0.12)', padding: '18px 24px' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 0, flexWrap: 'wrap',
        }} className="award-strip">
          {[
            ['National Trial Lawyers', 'Top 40 Under 40'],
            ['Avvo Rating',            'Superb 10.0'],
            ['State Bar of Arizona',   'Licensed & Active'],
            ['Google Reviews',         '★ 5.0 · 128 Reviews'],
          ].map(([label, sub], i, arr) => (
            <div key={label} className="award-item" style={{
              padding: '10px 28px',
              borderRight: i < arr.length - 1 ? '1px solid rgba(201,168,76,0.15)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: 13, fontWeight: 700, color: 'var(--white)' }}>{label}</div>
              <div style={{ fontSize: 12, color: 'var(--gold)', marginTop: 2 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer columns */}
      <div style={{ padding: '52px 24px 36px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 40 }}>

          {/* Brand column */}
          <div>
            <img
              src="/logo.webp"
              alt="Tobin Law Office"
              style={{
                height: 52,
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                opacity: 0.85,
                marginBottom: 16,
              }}
            />
            <div style={{ fontSize: 13, lineHeight: 1.85, marginBottom: 20 }}>
              3100 W Ray Rd #201<br />Chandler, AZ 85226<br /><br />
              1910 S Stapley Dr #221<br />Mesa, AZ 85204
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
              {[
                { href: 'https://www.avvo.com/attorneys/85226-az-timothy-tobin-3862229.html', label: 'Avvo Profile' },
                { href: 'https://www.google.com/maps/search/?api=1&query=Tobin+Law+Office+Chandler+AZ', label: 'Google Reviews' },
              ].map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: 'var(--gold)', transition: 'opacity 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >{label} →</a>
              ))}
            </div>
          </div>

          {/* Practice areas */}
          <div>
            <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>
              Practice Areas
            </div>
            {PRACTICE_LINKS.map(([label, href]) => (
              <Link key={label} href={href} style={{ display: 'block', fontSize: 13, marginBottom: 9, color: 'rgba(255,255,255,0.6)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >{label}</Link>
            ))}
          </div>

          {/* Service areas */}
          <div>
            <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>
              Cities Served
            </div>
            {SERVICE_CITIES.map(city => (
              <div key={city} style={{ fontSize: 13, marginBottom: 9, color: 'rgba(255,255,255,0.6)' }}>{city}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>
              Contact
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.9 }}>
              <a href="tel:4804474837" style={{ color: 'rgba(255,255,255,0.75)', display: 'block', fontWeight: 600 }}>(480) 447-4837</a>
              <a href="tel:4804479877" style={{ color: 'rgba(255,255,255,0.6)', display: 'block' }}>(480) 447-9877</a>
              <a href="mailto:tim@tobinlawoffice.com" style={{ color: 'rgba(255,255,255,0.6)', display: 'block', marginTop: 6 }}>tim@tobinlawoffice.com</a>
            </div>
            <div style={{ marginTop: 18, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              Mon–Fri: 6:00am – 8:00pm<br />
              Sat–Sun: By appointment
            </div>
            <Link href="/contact" className="cta-gold" style={{ display: 'block', marginTop: 20, textAlign: 'center', fontSize: 13, padding: '11px 16px', textTransform: 'none' }}>
              Free Consultation →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '18px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.28)', lineHeight: 1.7 }}>
          © {new Date().getFullYear()} Tobin Law Office · All Rights Reserved · Attorney Timothy Tobin · State Bar of Arizona<br />
          Content on this site is for general information only and does not constitute legal advice. No attorney-client relationship is created by visiting or using this site.
        </div>
      </div>

    </footer>
  );
}
