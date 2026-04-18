import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>CircleScope — AI Surveillance & Detection Systems</title>
        <meta name="description" content="Advanced AI systems for detection, identification, and tracking of objects across air, land, and sea." />
      </Head>
      <Layout>
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg">
            <img src="/images/fighter-jet.png" alt="Defense operations" />
            <div className="overlay" />
          </div>
          <div className="hero-content">
            <div className="eyebrow">
              <span className="dot" />
              AI Surveillance &amp; Detection Systems
            </div>
            <h1>Protecting <em>infrastructure</em> and people with AI</h1>
            <p className="sub">
              Advanced AI systems for detection, identification, and tracking of objects
              across air, land, and sea. Precision performance for critical operations.
            </p>
            <div className="actions">
              <Link href="/contact" className="btn-primary">Request demo</Link>
              <Link href="/solutions" className="btn-ghost">View solutions →</Link>
            </div>
          </div>

          <div className="metrics">
            {[
              { num: '99.4%', label: 'Detection accuracy' },
              { num: '<0.3s', label: 'Alert response time' },
              { num: '24/7', label: 'Continuous monitoring' },
              { num: '50+', label: 'Deployed sites' },
            ].map((m) => (
              <div className="metric" key={m.label}>
                <span className="num">{m.num}</span>
                <span className="label">{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="intro">
          <div className="inner">
            <div className="intro-text">
              <div className="section-label">Who we are</div>
              <h2>A new standard in AI-powered surveillance</h2>
              <p>CircleScope designs and deploys modular AI detection systems for airports, defense installations, maritime environments, and critical infrastructure — where failure is not an option.</p>
              <Link href="/about" className="link-arrow">Learn about CircleScope →</Link>
            </div>
            <div className="intro-img">
              <img src="/images/radar-map.png" alt="CircleScope radar tracking interface" />
              <div className="img-caption">Live DroneTracker interface — Copenhagen Airport</div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS PREVIEW */}
        <section className="preview">
          <div className="inner">
            <div className="section-label">Our systems</div>
            <h2>Purpose-built for every threat domain</h2>
            <div className="cards">
              {[
                { tag: 'C-UAS', title: 'DroneTracker', desc: 'AI-based drone detection, classification, and tracking using multi-sensor fusion across camera, radar, and RF.', href: '/solutions' },
                { tag: 'Airfield', title: 'FOD Tracker', desc: 'Detects foreign object debris on runways using AI — providing precise GPS location within seconds.', href: '/solutions' },
                { tag: 'Environmental', title: 'Tracker 2', desc: 'Detects and tracks birds around wind turbines, integrating directly with turbine control systems.', href: '/solutions' },
              ].map((c) => (
                <Link href={c.href} key={c.title} className="card">
                  <span className="card-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <span className="card-link">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TRACKER IMAGE STRIP */}
        <section className="product-strip">
          <div className="inner">
            <div className="strip-img">
              <img src="/images/tracker2.png" alt="Tracker 2 hardware unit" />
            </div>
            <div className="strip-text">
              <div className="section-label">Hardware platform</div>
              <h2>Compact. Powerful. Field-ready.</h2>
              <p>The Tracker 2 is CircleScope&apos;s flagship edge AI processing unit. Fanless, IP67-rated, and designed for offshore and industrial deployment in the harshest conditions.</p>
              <Link href="/solutions" className="btn-navy">See all systems →</Link>
            </div>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        /* HERO */
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
        }
        .hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.45) saturate(0.7);
        }
        .overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(13,27,42,0.7) 40%, rgba(13,27,42,0.2) 100%);
        }
        .hero-content {
          position: relative; z-index: 1;
          padding: 0 60px;
          max-width: 720px;
        }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--blue-mid); margin-bottom: 24px;
          padding: 6px 14px;
          border: 1px solid rgba(76,159,214,0.3); border-radius: 2px;
        }
        .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue-mid);
          animation: pulse 2s ease-in-out infinite;
        }
        h1 {
          font-family: var(--font-display);
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 600; line-height: 1.08;
          letter-spacing: -0.02em; color: #fff;
          margin-bottom: 24px;
        }
        h1 em { font-style: normal; color: var(--blue-mid); }
        .sub {
          font-size: 18px; font-weight: 300; color: rgba(255,255,255,0.72);
          line-height: 1.7; margin-bottom: 40px; max-width: 520px;
        }
        .actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
        .btn-primary {
          background: var(--blue); color: #fff;
          padding: 14px 30px; border-radius: 3px;
          font-size: 14px; font-weight: 500; letter-spacing: 0.04em;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: #1a6aad; }
        .btn-ghost {
          font-size: 14px; font-weight: 400;
          color: rgba(255,255,255,0.75);
          transition: color 0.2s;
        }
        .btn-ghost:hover { color: #fff; }

        .metrics {
          position: relative; z-index: 1;
          display: flex;
          background: rgba(13,27,42,0.75);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(255,255,255,0.08);
          margin-top: auto;
        }
        .metric {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; padding: 28px 20px;
          border-right: 1px solid rgba(255,255,255,0.06);
          gap: 4px;
        }
        .metric:last-child { border-right: none; }
        .num {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 600; color: #fff; letter-spacing: -0.02em;
        }
        .label {
          font-size: 11px; color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        /* INTRO */
        .intro { background: var(--white); padding: 100px 60px; border-bottom: 1px solid var(--gray-200); }
        .intro .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .section-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--blue); margin-bottom: 14px;
        }
        .intro-text h2, .preview h2, .strip-text h2 {
          font-family: var(--font-display);
          font-size: clamp(26px, 2.5vw, 38px);
          font-weight: 600; letter-spacing: -0.02em;
          color: var(--navy); line-height: 1.15; margin-bottom: 16px;
        }
        .intro-text p { font-size: 15px; color: var(--gray-600); line-height: 1.75; margin-bottom: 28px; }
        .link-arrow { font-size: 14px; color: var(--blue); font-weight: 500; transition: opacity 0.2s; }
        .link-arrow:hover { opacity: 0.75; }
        .intro-img { border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); }
        .intro-img img { width: 100%; }
        .img-caption {
          padding: 10px 16px; font-size: 11px;
          color: var(--gray-400); letter-spacing: 0.04em;
          background: var(--off-white); border-top: 1px solid var(--gray-200);
        }

        /* PREVIEW */
        .preview { background: var(--off-white); padding: 100px 60px; border-bottom: 1px solid var(--gray-200); }
        .preview .inner { max-width: var(--max-width); margin: 0 auto; }
        .preview h2 { margin-bottom: 40px; }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .card {
          display: flex; flex-direction: column;
          padding: 32px 26px;
          border: 1px solid var(--gray-200); border-radius: 6px;
          background: var(--white);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          border-color: var(--blue-mid);
          box-shadow: 0 4px 20px rgba(43,124,193,0.08);
        }
        .card-tag {
          font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--blue); font-weight: 500;
          padding: 4px 10px; background: var(--blue-pale);
          border-radius: 2px; display: inline-block; margin-bottom: 16px; align-self: flex-start;
        }
        .card h3 {
          font-family: var(--font-display);
          font-size: 20px; font-weight: 600; color: var(--navy);
          margin-bottom: 10px;
        }
        .card p { font-size: 14px; color: var(--gray-600); line-height: 1.7; flex: 1; margin-bottom: 20px; }
        .card-link { font-size: 13px; color: var(--blue); font-weight: 500; }

        /* PRODUCT STRIP */
        .product-strip { background: var(--white); padding: 100px 60px; }
        .product-strip .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .strip-img { border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); }
        .strip-img img { width: 100%; }
        .strip-text p { font-size: 15px; color: var(--gray-600); line-height: 1.75; margin-bottom: 28px; }
        .btn-navy {
          display: inline-block; background: var(--navy); color: #fff;
          padding: 12px 24px; border-radius: 3px;
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          transition: background 0.2s;
        }
        .btn-navy:hover { background: var(--blue); }

        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
      `}</style>
    </>
  );
}
