import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.7)', marginTop: 80 }}>
      {/* CTA Bar */}
      <div style={{
        background: 'var(--gold)',
        padding: '28px 24px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: 700, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 32, flexWrap: 'wrap'
        }}>
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 22, fontWeight: 700,
              color: 'var(--navy)'
            }}>Charged with a crime? Call now — it's free.</div>
            <div style={{ fontSize: 14, color: 'var(--navy)', opacity: 0.75, marginTop: 2 }}>
              Available 6am – 8pm · Free & confidential consultations
            </div>
          </div>
          <a href="tel:4804474837" style={{
            background: 'var(--navy)', color: 'var(--white)',
            fontFamily: 'Source Sans 3, sans-serif',
            fontWeight: 700, fontSize: 18,
            padding: '13px 28px', borderRadius: 2,
            whiteSpace: 'nowrap'
          }}>(480) 447-4837</a>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', padding: '48px 24px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: 'var(--white)', marginBottom: 8 }}>
              Tobin Law Office
            </div>
            <div style={{ fontSize: 13, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              Criminal Defense · Arizona
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.7 }}>
              3100 W Ray Rd #201<br />
              Chandler, AZ 85226<br /><br />
              1910 S Stapley Dr #221<br />
              Mesa, AZ 85204
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              Practice Areas
            </div>
            {['DUI Defense', 'Drug Crimes', 'Domestic Violence', 'Assault & Violent Crimes', 'Property & Theft', 'Traffic Violations'].map(a => (
              <Link key={a} href="/practice-areas" style={{ display: 'block', fontSize: 14, marginBottom: 8, color: 'rgba(255,255,255,0.65)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
              >{a}</Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              Service Areas
            </div>
            {['Chandler', 'Mesa', 'Gilbert', 'Tempe', 'Scottsdale', 'San Tan Valley'].map(a => (
              <div key={a} style={{ fontSize: 14, marginBottom: 8, color: 'rgba(255,255,255,0.65)' }}>{a}</div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Source Sans 3, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              Contact
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.9 }}>
              <a href="tel:4804474837" style={{ color: 'rgba(255,255,255,0.75)', display: 'block' }}>(480) 447-4837</a>
              <a href="sms:4804474837" style={{ color: 'rgba(255,255,255,0.75)', display: 'block' }}>Text: (480) 447-4837</a>
              <a href="mailto:tim@tobinlawoffice.com" style={{ color: 'rgba(255,255,255,0.75)', display: 'block', marginTop: 4 }}>tim@tobinlawoffice.com</a>
              <div style={{ marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                Mon–Fri: 6am – 8pm<br />
                Sat–Sun: By appointment
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '20px 24px',
        textAlign: 'center',
        fontSize: 12,
        color: 'rgba(255,255,255,0.35)',
        maxWidth: 1200, margin: '0 auto'
      }}>
        © 2026 Tobin Law Office · All Rights Reserved · Attorney Timothy Tobin · State Bar of Arizona<br />
        <span style={{ marginTop: 6, display: 'block' }}>
          DISCLAIMER: Content on this site is for informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by use of this site.
        </span>
      </div>
    </footer>
  );
}
