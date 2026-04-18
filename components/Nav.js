import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/about', label: 'About' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/technology', label: 'Technology' },
    { href: '/industries', label: 'Industries' },
    { href: '/services', label: 'Services' },
  ];

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="logo">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#2b7cc1" strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="9" stroke="#2b7cc1" strokeWidth="1"/>
            <circle cx="16" cy="16" r="3" fill="#2b7cc1"/>
            <circle cx="24" cy="10" r="2" fill="#4c9fd6" opacity="0.7"/>
          </svg>
          <span className="logo-name">CIRCLE<em>SCOPE</em></span>
        </Link>

        <div className="links">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={router.pathname === l.href ? 'active' : ''}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="cta">Request demo</Link>
      </nav>

      <style jsx>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 60px;
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        nav.scrolled {
          border-color: var(--gray-200);
          box-shadow: 0 1px 16px rgba(13,27,42,0.06);
        }
        .logo {
          display: flex; align-items: center; gap: 10px;
        }
        .logo-name {
          font-family: var(--font-display);
          font-size: 17px; font-weight: 600;
          color: var(--navy); letter-spacing: 0.01em;
        }
        .logo-name em { font-style: normal; color: var(--blue); }

        .links {
          display: flex; align-items: center; gap: 32px;
        }
        .links :global(a) {
          font-size: 14px; font-weight: 400;
          color: var(--gray-600);
          transition: color 0.2s;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
        }
        .links :global(a:hover),
        .links :global(a.active) {
          color: var(--navy);
          border-bottom-color: var(--blue);
        }
        .cta {
          background: var(--navy); color: #fff !important;
          padding: 10px 22px; border-radius: 3px;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.04em;
          transition: background 0.2s;
          border-bottom: none !important;
        }
        .cta:hover { background: var(--blue) !important; }
      `}</style>
    </>
  );
}
