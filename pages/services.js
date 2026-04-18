import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const services = [
  { num: '01', title: 'Deployment', body: 'Site survey, sensor positioning analysis, installation, and system commissioning carried out by CircleScope field engineers. We handle the full process from first visit to go-live.' },
  { num: '02', title: 'Operator training', body: 'Structured training programs for control room operators, security personnel, and system administrators. Delivered on-site or remotely, with printed and digital reference materials.' },
  { num: '03', title: 'Maintenance & monitoring', body: 'Proactive system health monitoring, scheduled maintenance intervals, and rapid response SLAs for mission-critical sites. Remote diagnostics for most issues; on-site within 24h for hardware faults.' },
  { num: '04', title: 'AI model updates', body: 'Threat landscapes evolve. We continuously update detection models and push them via OTA update to deployed systems, ensuring accuracy remains high as new drone types and object categories emerge.' },
  { num: '05', title: 'Customization & integration', body: 'Bespoke AI model training, integration development, and custom alert logic tailored to site-specific operational requirements. API-first architecture makes custom integration straightforward.' },
  { num: '06', title: 'Technical consultancy', body: 'Not sure which system fits your environment? Our engineers provide pre-project assessments, sensor placement modelling, and architecture recommendations before any commitment.' },
];

export default function Services() {
  return (
    <>
      <Head><title>Services — CircleScope</title></Head>
      <Layout>
        <section className="page-header">
          <div className="inner">
            <div className="label">Support</div>
            <h1>Full lifecycle operational support</h1>
            <p>From initial site assessment through to long-term maintenance agreements, CircleScope is the operational partner for the duration of your system.</p>
          </div>
        </section>

        <section className="services-grid">
          <div className="inner">
            {services.map((s) => (
              <div className="card" key={s.num}>
                <div className="card-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sla">
          <div className="inner">
            <div className="sla-text">
              <div className="label">Service levels</div>
              <h2>SLA options for every operational requirement</h2>
              <p>We offer three service tiers — from standard business hours support to 24/7 mission-critical cover with guaranteed on-site response times.</p>
            </div>
            <div className="tiers">
              {[
                { name: 'Standard', resp: '< 48h', hours: 'Mon–Fri 08–17', onsite: 'By agreement', best: 'Non-critical sites' },
                { name: 'Professional', resp: '< 8h', hours: 'Mon–Fri 07–21', onsite: '< 48h', best: 'Airports, ports' },
                { name: 'Mission Critical', resp: '< 1h', hours: '24/7/365', onsite: '< 24h', best: 'Defense, CBRN', highlight: true },
              ].map((t) => (
                <div key={t.name} className={`tier ${t.highlight ? 'highlight' : ''}`}>
                  <div className="tier-name">{t.name}</div>
                  <div className="tier-row"><span>Remote response</span><strong>{t.resp}</strong></div>
                  <div className="tier-row"><span>Support hours</span><strong>{t.hours}</strong></div>
                  <div className="tier-row"><span>On-site response</span><strong>{t.onsite}</strong></div>
                  <div className="tier-best">Best for: {t.best}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-strip">
          <div className="inner">
            <h2>Let&apos;s talk about your support requirements</h2>
            <p>We&apos;ll recommend the right service level for your operational environment.</p>
            <Link href="/contact" className="btn">Contact us</Link>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        .page-header { background: var(--navy); padding: 80px 60px; }
        .page-header .inner { max-width: 680px; }
        .label { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blue-mid); margin-bottom: 14px; }
        .page-header h1 {
          font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 600; letter-spacing: -0.02em; color: #fff; line-height: 1.1; margin-bottom: 18px;
        }
        .page-header p { font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.7; }

        .services-grid { background: var(--white); padding: 80px 60px; border-bottom: 1px solid var(--gray-200); }
        .services-grid .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .card {
          padding: 30px; border: 1px solid var(--gray-200); border-radius: 6px;
          background: var(--white); transition: border-color 0.2s;
        }
        .card:hover { border-color: var(--blue-mid); }
        .card-num {
          font-family: var(--font-display); font-size: 13px; font-weight: 600;
          color: var(--blue-light); margin-bottom: 12px; letter-spacing: 0.06em;
        }
        .card h3 { font-size: 16px; font-weight: 500; color: var(--navy); margin-bottom: 10px; }
        .card p { font-size: 13px; color: var(--gray-600); line-height: 1.7; }

        .sla { background: var(--off-white); padding: 80px 60px; border-bottom: 1px solid var(--gray-200); }
        .sla .inner { max-width: var(--max-width); margin: 0 auto; }
        .label { color: var(--blue); }
        h2 {
          font-family: var(--font-display); font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 600; letter-spacing: -0.02em; color: var(--navy); line-height: 1.15; margin-bottom: 14px;
        }
        .sla-text p { font-size: 15px; color: var(--gray-600); line-height: 1.7; margin-bottom: 36px; }
        .tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .tier {
          padding: 24px; border: 1px solid var(--gray-200); border-radius: 6px;
          background: var(--white); display: flex; flex-direction: column; gap: 10px;
        }
        .tier.highlight { border-color: var(--blue); background: var(--blue-pale); }
        .tier-name { font-family: var(--font-display); font-size: 16px; font-weight: 600; color: var(--navy); margin-bottom: 6px; }
        .tier-row {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 13px; color: var(--gray-600);
          padding-bottom: 8px; border-bottom: 1px solid var(--gray-100);
        }
        .tier-row strong { color: var(--navy); font-weight: 500; }
        .tier-best { font-size: 11px; color: var(--blue); font-weight: 500; letter-spacing: 0.04em; margin-top: 4px; }

        .cta-strip { background: var(--blue-pale); padding: 80px 60px; text-align: center; }
        .cta-strip .inner { max-width: 460px; margin: 0 auto; }
        .cta-strip h2 { font-family: var(--font-display); font-size: 26px; font-weight: 600; color: var(--navy); margin-bottom: 12px; letter-spacing: -0.02em; }
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
