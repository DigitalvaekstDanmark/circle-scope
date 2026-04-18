import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="inner">
          <div className="brand">
            <Link href="/" className="logo">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#2b7cc1" strokeWidth="1.5"/>
                <circle cx="16" cy="16" r="9" stroke="#2b7cc1" strokeWidth="1"/>
                <circle cx="16" cy="16" r="3" fill="#2b7cc1"/>
                <circle cx="24" cy="10" r="2" fill="#4c9fd6" opacity="0.7"/>
              </svg>
              <span>CIRCLE<em>SCOPE</em></span>
            </Link>
            <p>Advanced AI detection systems for critical operations across air, land, and sea.</p>
          </div>
          <div className="col">
            <div className="col-head">Solutions</div>
            <Link href="/solutions">DroneTracker</Link>
            <Link href="/solutions">FOD Tracker</Link>
            <Link href="/solutions">Tracker 2</Link>
          </div>
          <div className="col">
            <div className="col-head">Company</div>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="col">
            <div className="col-head">Industries</div>
            <Link href="/industries">Airports</Link>
            <Link href="/industries">Maritime</Link>
            <Link href="/industries">Defense</Link>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 CircleScope ApS · Copenhagen, Denmark</span>
          <div className="links">
            <a href="#">Privacy policy</a>
            <a href="#">Security</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          background: var(--navy);
          color: var(--white);
          padding: 64px 60px 32px;
        }
        .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .logo {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 12px;
          font-family: var(--font-display);
          font-size: 16px; font-weight: 600; color: var(--white);
        }
        .logo em { font-style: normal; color: var(--blue-mid); }
        .brand > p {
          font-size: 13px; color: rgba(255,255,255,0.4);
          line-height: 1.65; max-width: 240px;
        }
        .col { display: flex; flex-direction: column; gap: 10px; }
        .col-head {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.3); margin-bottom: 4px;
        }
        .col :global(a) {
          font-size: 13px; color: rgba(255,255,255,0.5);
          transition: color 0.2s;
        }
        .col :global(a:hover) { color: var(--white); }
        .bottom {
          max-width: var(--max-width); margin: 28px auto 0;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 12px; color: rgba(255,255,255,0.3);
        }
        .links { display: flex; gap: 28px; }
        .links a { color: rgba(255,255,255,0.35); transition: color 0.2s; }
        .links a:hover { color: rgba(255,255,255,0.7); }
      `}</style>
    </>
  );
}
