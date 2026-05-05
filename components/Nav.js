import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--navy)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 68
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 20, fontWeight: 700,
              color: 'var(--white)', letterSpacing: '0.01em'
            }}>Tobin Law Office</span>
            <span style={{
              fontSize: 10, fontWeight: 500, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--gold)'
            }}>Criminal Defense · Arizona</span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
            {[
              ['Practice Areas', '/practice-areas'],
              ['About Tim Tobin', '/about'],
              ['Why Choose Us', '/#why-us'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link key={label} href={href} style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: 14, fontWeight: 500,
                color: 'rgba(255,255,255,0.82)',
                letterSpacing: '0.02em',
                transition: 'color 0.15s'
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.82)'}
              >{label}</Link>
            ))}
            <a href="tel:4804474837" style={{
              background: 'var(--gold)',
              color: 'var(--navy)',
              fontFamily: 'Source Sans 3, sans-serif',
              fontWeight: 700, fontSize: 14,
              padding: '9px 20px',
              borderRadius: 2,
              letterSpacing: '0.02em',
            }}>(480) 447-4837</a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'none', flexDirection: 'column', gap: 5, padding: 4
            }}
            className="hamburger"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2,
                background: 'var(--white)', borderRadius: 2
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: 'var(--navy-mid)',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            padding: '16px 24px 24px'
          }}>
            {[
              ['Practice Areas', '/practice-areas'],
              ['About Tim Tobin', '/about'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link key={label} href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', padding: '12px 0',
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'Source Sans 3, sans-serif',
                  fontSize: 16, fontWeight: 500,
                  borderBottom: '1px solid rgba(255,255,255,0.07)'
                }}
              >{label}</Link>
            ))}
            <a href="tel:4804474837" style={{
              display: 'block', marginTop: 16,
              background: 'var(--gold)', color: 'var(--navy)',
              fontWeight: 700, fontSize: 16,
              padding: '12px 20px', textAlign: 'center',
              borderRadius: 2
            }}>(480) 447-4837</a>
          </div>
        )}
      </nav>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
