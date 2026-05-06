import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LINKS = [
  ['Practice Areas', '/practice-areas'],
  ['About Tim Tobin', '/about'],
  ['Contact',         '/contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const isActive = (href) => pathname === href;

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'var(--navy)',
      borderBottom: '1px solid rgba(201,168,76,0.18)',
      boxShadow: '0 2px 24px rgba(0,0,0,0.28)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 20, fontWeight: 700,
            color: 'var(--white)', letterSpacing: '0.01em',
          }}>Tobin Law Office</span>
          <span style={{
            fontSize: 10, fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--gold)',
          }}>Criminal Defense · Arizona</span>
        </Link>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {LINKS.map(([label, href]) => {
            const active = isActive(href);
            return (
              <Link key={label} href={href} style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: 14, fontWeight: 500,
                color: active ? 'var(--gold)' : 'rgba(255,255,255,0.8)',
                letterSpacing: '0.02em',
                paddingBottom: 3,
                borderBottom: active ? '2px solid var(--gold)' : '2px solid transparent',
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderBottomColor = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = active ? 'var(--gold)' : 'rgba(255,255,255,0.8)'; e.currentTarget.style.borderBottomColor = active ? 'var(--gold)' : 'transparent'; }}
              >{label}</Link>
            );
          })}
          <a href="tel:4804474837" className="cta-gold" style={{ fontSize: 14, padding: '9px 22px', textTransform: 'none', letterSpacing: '0.02em' }}>
            (480) 447-4837
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 6 }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: 'var(--white)', borderRadius: 2,
              transition: 'transform 0.22s, opacity 0.22s',
              transform: open
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                : 'none'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--navy-mid)',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          padding: '12px 24px 24px',
        }}>
          {LINKS.map(([label, href]) => (
            <Link key={label} href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '13px 0',
                color: isActive(href) ? 'var(--gold)' : 'rgba(255,255,255,0.85)',
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: 16, fontWeight: 500,
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >{label}</Link>
          ))}
          <a href="tel:4804474837" style={{
            display: 'block', marginTop: 16, textAlign: 'center',
            background: 'var(--gold)', color: 'var(--navy)',
            fontFamily: 'Source Sans 3, sans-serif',
            fontWeight: 700, fontSize: 16,
            padding: '13px', borderRadius: 2,
          }}>(480) 447-4837</a>
        </div>
      )}
    </nav>
  );
}
