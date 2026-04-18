import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
  return (
    <>
      <Head><title>About — CircleScope</title></Head>
      <Layout>
        {/* PAGE HEADER */}
        <section className="page-header">
          <div className="inner">
            <div className="label">About CircleScope</div>
            <h1>Built for the world&apos;s most demanding operations</h1>
            <p>CircleScope is a Danish technology company specialising in AI-based detection, tracking, and surveillance systems. We design, deploy, and support modular platforms for airports, defense, maritime, and energy sectors globally.</p>
          </div>
        </section>

        {/* MISSION */}
        <section className="mission">
          <div className="inner">
            <div className="m-text">
              <div className="label">Our mission</div>
              <h2>Precision AI that protects people and infrastructure</h2>
              <p>We believe detection technology should be accurate, reliable, and operationally simple. Every system we build is designed to reduce response time, eliminate human error, and integrate seamlessly into existing command infrastructure.</p>
              <p>Our approach is built on three principles: modular architecture that scales with the threat environment, open standard interfaces that avoid vendor lock-in, and full lifecycle support that ensures operational readiness.</p>
            </div>
            <div className="m-stats">
              {[
                { num: '2016', label: 'Founded in Copenhagen' },
                { num: '50+', label: 'Deployed sites worldwide' },
                { num: '99.4%', label: 'Detection accuracy' },
                { num: '24/7', label: 'Operational uptime' },
              ].map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="pillars">
          <div className="inner">
            <div className="label">How we work</div>
            <h2>What sets CircleScope apart</h2>
            <div className="grid">
              {[
                { title: 'Modular architecture', body: 'Each component is independently deployable and scales from a single sensor node to a multi-site network, adapting to the operational requirement without over-engineering.' },
                { title: 'Standard interfaces', body: 'We connect via open APIs, ONVIF, and RTSP to existing command systems, radar networks, and third-party sensors — no bespoke integration required.' },
                { title: 'AI trained on real data', body: 'Our detection models are trained on domain-specific datasets captured in operational environments — not generic image libraries.' },
                { title: 'Full lifecycle support', body: 'From site survey and installation to operator training, maintenance contracts, and model updates — CircleScope is the partner for the duration.' },
                { title: 'Edge AI compute', body: 'Processing happens on-device, not in the cloud. Sub-second response times and full offline capability for air-gapped installations.' },
                { title: 'Sensor fusion', body: 'Radar, optical, thermal, and RF data are fused into a single picture, eliminating false positives and blind spots across sensor types.' },
              ].map((p, i) => (
                <div className="pillar" key={i}>
                  <div className="pillar-num">0{i + 1}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-strip">
          <div className="inner">
            <h2>Ready to discuss your requirements?</h2>
            <p>Our systems engineers are available to assess your operational environment and recommend the right configuration.</p>
            <Link href="/contact" className="btn">Get in touch</Link>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        .page-header {
          background: var(--navy); padding: 80px 60px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .page-header .inner { max-width: var(--max-width); margin: 0 auto; max-width: 720px; }
        .label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--blue-mid); margin-bottom: 16px;
        }
        .page-header h1 {
          font-family: var(--font-display);
          font-size: clamp(30px, 3.5vw, 50px);
          font-weight: 600; letter-spacing: -0.02em;
          color: #fff; line-height: 1.1; margin-bottom: 20px;
        }
        .page-header p { font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; }

        .mission { background: var(--white); padding: 100px 60px; border-bottom: 1px solid var(--gray-200); }
        .mission .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: 3fr 2fr; gap: 80px; align-items: start;
        }
        .label { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blue); margin-bottom: 14px; }
        h2 {
          font-family: var(--font-display);
          font-size: clamp(24px, 2.5vw, 36px); font-weight: 600;
          letter-spacing: -0.02em; color: var(--navy); line-height: 1.15; margin-bottom: 20px;
        }
        .m-text p { font-size: 15px; color: var(--gray-600); line-height: 1.75; margin-bottom: 16px; }
        .m-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat {
          display: flex; flex-direction: column; gap: 4px;
          padding: 20px; border: 1px solid var(--gray-200); border-radius: 6px;
          background: var(--off-white);
        }
        .stat-num {
          font-family: var(--font-display);
          font-size: 28px; font-weight: 600; color: var(--navy); letter-spacing: -0.02em;
        }
        .stat-label { font-size: 12px; color: var(--gray-400); letter-spacing: 0.06em; text-transform: uppercase; }

        .pillars { background: var(--off-white); padding: 100px 60px; border-bottom: 1px solid var(--gray-200); }
        .pillars .inner { max-width: var(--max-width); margin: 0 auto; }
        .pillars h2 { margin-bottom: 40px; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .pillar {
          padding: 28px; border: 1px solid var(--gray-200);
          border-radius: 6px; background: var(--white);
          transition: border-color 0.2s;
        }
        .pillar:hover { border-color: var(--blue-mid); }
        .pillar-num {
          font-family: var(--font-display);
          font-size: 13px; color: var(--blue-light);
          font-weight: 600; margin-bottom: 12px;
          letter-spacing: 0.06em;
        }
        .pillar h3 { font-size: 15px; font-weight: 500; color: var(--navy); margin-bottom: 8px; }
        .pillar p { font-size: 13px; color: var(--gray-600); line-height: 1.65; }

        .cta-strip { background: var(--blue-pale); padding: 80px 60px; text-align: center; }
        .cta-strip .inner { max-width: 540px; margin: 0 auto; }
        .cta-strip h2 { font-family: var(--font-display); font-size: 28px; font-weight: 600; color: var(--navy); margin-bottom: 12px; letter-spacing: -0.02em; }
        .cta-strip p { font-size: 15px; color: var(--gray-600); margin-bottom: 28px; line-height: 1.7; }
        .btn {
          display: inline-block; background: var(--navy); color: #fff;
          padding: 13px 28px; border-radius: 3px;
          font-size: 14px; font-weight: 500; letter-spacing: 0.04em;
          transition: background 0.2s;
        }
        .btn:hover { background: var(--blue); }
      `}</style>
    </>
  );
}
