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
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2 }}>
              Charged with a crime? Call now — it's free.
            </div>
            <div style={{ fontSize: 14, color: 'rgba(10,22,40,0.7)', marginTop: 5 }}>
              Available 6am – 8pm · Free & confidential consultations · Payment plans available
            </div>
          </div>
          <a href="tel:4804474837" className="cta-navy" style={{ fontSize: 18, padding: '14px 32px', textTransform: 'none', whiteSpace: 'nowrap' }}>
            (480) 447-4837
          </a>
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
              <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 13, fontWeight: 700, color: 'var(--white)' }}>{label}</div>
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
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'var(--white)', marginBottom: 6 }}>
              Tobin Law Office
            </div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>
              Criminal Defense · Arizona
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.85, marginBottom: 20 }}>
              3100 W Ray Rd #201<br />Chandler, AZ 85226<br /><br />
              1910 S Stapley Dr #221<br />Mesa, AZ 85204
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { href: 'https://www.facebook.com/', label: 'Facebook', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg> },
                { href: 'https://www.linkedin.com/', label: 'LinkedIn',  svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg> },
                { href: 'https://www.avvo.com/',     label: 'Avvo',      svg: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" viewBox="0 0 14 16"><text y="14" fontSize="13" fontWeight="bold">A</text></svg> },
              ].map(({ href, label, svg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 32, height: 32,
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '50%',
                    color: 'rgba(255,255,255,0.55)',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.2)'; e.currentTarget.style.color = 'var(--gold)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                >{svg}</a>
              ))}
            </div>
          </div>

          {/* Practice areas */}
          <div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>
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
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>
              Cities Served
            </div>
            {SERVICE_CITIES.map(city => (
              <div key={city} style={{ fontSize: 13, marginBottom: 9, color: 'rgba(255,255,255,0.6)' }}>{city}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>
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
          DISCLAIMER: Content on this website is for informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by use of this website or submission of any form.
        </div>
      </div>

    </footer>
  );
}
