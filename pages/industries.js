import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const industries = [
  {
    title: 'Airports',
    desc: 'CircleScope systems are deployed at major international airports for FOD detection on runways, drone intrusion monitoring, and perimeter surveillance. Our AI reduces ground crew exposure and accelerates incident response.',
    uses: ['FOD detection on active runways', 'Drone intrusion monitoring', 'Perimeter & fence line surveillance', 'Wildlife management around airfields'],
    img: '/images/fighter-jet.png',
  },
  {
    title: 'Maritime & ports',
    desc: 'Port authorities and maritime operators use CircleScope to monitor vessel movements, detect unauthorized access to restricted waters, and integrate with existing VTS systems.',
    uses: ['Vessel detection and classification', 'Unauthorized access monitoring', 'Integration with VTS and AIS', 'Perimeter protection for port infrastructure'],
    img: '/images/flir-camera.png',
  },
  {
    title: 'Energy & wind',
    desc: 'The Tracker 2 is designed for offshore wind farm environments. It detects birds in real time and integrates directly with turbine control systems to trigger automatic stops — protecting wildlife and ensuring compliance.',
    uses: ['Bird detection and species classification', 'Turbine auto-stop via API integration', 'Offshore hardware rated for marine environments', 'Reporting for environmental compliance'],
    img: '/images/tracker2.png',
  },
  {
    title: 'Defense',
    desc: 'CircleScope provides C-UAS, perimeter protection, and multi-domain surveillance for defense installations. Systems operate on air-gapped networks and are compatible with NATO-standard command interfaces.',
    uses: ['Counter-UAS at military installations', 'Base perimeter & force protection', 'Air-gapped / offline operation', 'NATO-compatible command interfaces'],
    img: '/images/radar-map.png',
  },
];

export default function Industries() {
  return (
    <>
      <Head><title>Industries — CircleScope</title></Head>
      <Layout>
        <section className="page-header">
          <div className="inner">
            <div className="label">Sectors</div>
            <h1>Built for demanding operational environments</h1>
            <p>CircleScope systems are deployed across airports, maritime installations, energy infrastructure, and defense sites — wherever the cost of a missed detection is unacceptable.</p>
          </div>
        </section>

        {industries.map((ind, i) => (
          <section key={ind.title} className={`industry ${i % 2 === 1 ? 'alt' : ''}`}>
            <div className="inner">
              <div className="ind-img">
                <img src={ind.img} alt={ind.title} />
              </div>
              <div className="ind-text">
                <div className="label">{ind.title}</div>
                <h2>{ind.title}</h2>
                <p>{ind.desc}</p>
                <ul>
                  {ind.uses.map((u) => (
                    <li key={u}><span className="bullet" />{u}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn">Discuss your requirements</Link>
              </div>
            </div>
          </section>
        ))}
      </Layout>

      <style jsx>{`
        .page-header { background: var(--navy); padding: 80px 60px; }
        .page-header .inner { max-width: 680px; }
        .label { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blue-mid); margin-bottom: 14px; }
        .page-header h1 {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 48px); font-weight: 600;
          letter-spacing: -0.02em; color: #fff; line-height: 1.1; margin-bottom: 18px;
        }
        .page-header p { font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.7; }

        .industry { padding: 80px 60px; border-bottom: 1px solid var(--gray-200); background: var(--white); }
        .industry.alt { background: var(--off-white); }
        .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .industry.alt .inner { direction: rtl; }
        .industry.alt .ind-text, .industry.alt .ind-img { direction: ltr; }

        .ind-img { border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); }
        .ind-img img { width: 100%; display: block; }

        .label { color: var(--blue); }
        h2 {
          font-family: var(--font-display);
          font-size: clamp(24px, 2.5vw, 36px); font-weight: 600;
          letter-spacing: -0.02em; color: var(--navy); line-height: 1.15; margin-bottom: 14px;
        }
        .ind-text p { font-size: 15px; color: var(--gray-600); line-height: 1.75; margin-bottom: 22px; }
        ul { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        li { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--gray-600); }
        .bullet { width: 5px; height: 5px; border-radius: 50%; background: var(--blue-mid); flex-shrink: 0; }
        .btn {
          display: inline-block; background: var(--navy); color: #fff;
          padding: 12px 24px; border-radius: 3px;
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          transition: background 0.2s;
        }
        .btn:hover { background: var(--blue); }
      `}</style>
    </>
  );
}
