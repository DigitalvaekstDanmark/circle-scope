import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const solutions = [
  {
    tag: 'C-UAS',
    title: 'DroneTracker',
    img: '/images/radar-map.png',
    imgAlt: 'DroneTracker live tracking interface',
    desc: 'AI-based drone detection, classification, and tracking using multi-sensor fusion across camera, radar, and RF sensors. Scalable for airports, harbors, and critical infrastructure.',
    features: [
      'Automatic drone classification by type and size',
      'Multi-sensor fusion — radar, optical, RF',
      'Real-time tracking with geo-location output',
      'Configurable exclusion zones and alerts',
      'Integrates with existing command systems via API',
    ],
  },
  {
    tag: 'Airfield Safety',
    title: 'FOD Tracker',
    img: '/images/fighter-jet.png',
    imgAlt: 'Airfield operations and FOD detection',
    desc: 'Detects foreign object debris on runways and airfields using AI image analysis. Identifies anomalies and provides precise GPS location within seconds of detection, day and night.',
    features: [
      'Sub-centimeter object detection capability',
      'AI trained on thousands of FOD categories',
      'Instant GPS location output to ATC and ground ops',
      'Continuous runway monitoring, day and night',
      'Integrates with existing aerodrome safety systems',
    ],
  },
  {
    tag: 'Environmental',
    title: 'Tracker 2',
    img: '/images/tracker2.png',
    imgAlt: 'Tracker 2 hardware unit — CircleScope',
    desc: 'AI system for detecting and tracking moving objects in complex outdoor environments. Designed especially for bird tracking around wind turbine installations to reduce collision incidents.',
    features: [
      'Accurate bird species and flock detection',
      'Predictive flight path modeling',
      'Turbine auto-stop integration via API',
      'Weather-hardened for offshore deployment',
      'Fanless edge AI compute — no active cooling required',
    ],
  },
];

export default function Solutions() {
  return (
    <>
      <Head><title>Solutions — CircleScope</title></Head>
      <Layout>
        <section className="page-header">
          <div className="inner">
            <div className="label">Our systems</div>
            <h1>Purpose-built AI detection platforms</h1>
            <p>Each system is engineered for a specific threat domain — from rogue drones over airports to debris on runways and birds near turbines.</p>
          </div>
        </section>

        {/* Camera section highlight */}
        <section className="camera-section">
          <div className="inner">
            <div className="cam-img">
              <img src="/images/flir-camera.png" alt="FLIR multi-sensor camera system" />
              <div className="cam-badge">Multi-sensor · EO + Thermal</div>
            </div>
            <div className="cam-text">
              <div className="label">Camera systems</div>
              <h2>Ultra high-performance multi-sensor imaging</h2>
              <p>CircleScope integrates the world&apos;s most capable multi-sensor camera platforms, delivering stable, long-range imaging in the most demanding environmental conditions.</p>
              <div className="specs">
                {[
                  { val: '4K', key: 'Ultra HD optical' },
                  { val: '30×', key: 'Optical zoom' },
                  { val: '6-axis', key: 'Gyro-stabilization' },
                  { val: '−40°C', key: 'Min. operating temp.' },
                ].map((s) => (
                  <div className="spec" key={s.key}>
                    <span className="spec-val">{s.val}</span>
                    <span className="spec-key">{s.key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Individual solutions */}
        {solutions.map((s, i) => (
          <section key={s.title} className={`solution ${i % 2 === 1 ? 'alt' : ''}`}>
            <div className="inner">
              <div className="sol-img">
                <img src={s.img} alt={s.imgAlt} />
                <div className="sol-tag">{s.tag}</div>
              </div>
              <div className="sol-text">
                <h2>{s.title}</h2>
                <p className="sol-desc">{s.desc}</p>
                <ul>
                  {s.features.map((f) => (
                    <li key={f}><span className="bullet" />{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn">Request a demo</Link>
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

        .camera-section { background: var(--off-white); padding: 80px 60px; border-bottom: 1px solid var(--gray-200); }
        .camera-section .inner, .solution .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .cam-img { position: relative; border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); }
        .cam-img img { width: 100%; }
        .cam-badge {
          position: absolute; bottom: 14px; left: 14px;
          background: rgba(13,27,42,0.82); backdrop-filter: blur(6px);
          color: var(--blue-mid); font-size: 11px; letter-spacing: 0.08em;
          padding: 8px 14px; border-radius: 3px; text-transform: uppercase;
        }
        .label { color: var(--blue); }
        h2 {
          font-family: var(--font-display);
          font-size: clamp(24px, 2.5vw, 36px); font-weight: 600;
          letter-spacing: -0.02em; color: var(--navy); line-height: 1.15; margin-bottom: 16px;
        }
        .cam-text p { font-size: 15px; color: var(--gray-600); line-height: 1.75; margin-bottom: 28px; }
        .specs { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .spec {
          display: flex; flex-direction: column; gap: 3px;
          padding: 16px; border: 1px solid var(--gray-200);
          border-radius: 4px; background: var(--white);
        }
        .spec-val { font-family: var(--font-display); font-size: 22px; font-weight: 600; color: var(--navy); }
        .spec-key { font-size: 11px; color: var(--gray-400); letter-spacing: 0.06em; text-transform: uppercase; }

        .solution { padding: 80px 60px; border-bottom: 1px solid var(--gray-200); background: var(--white); }
        .solution.alt { background: var(--off-white); }
        .solution.alt .inner { direction: rtl; }
        .solution.alt .sol-text { direction: ltr; }
        .solution.alt .sol-img { direction: ltr; }

        .sol-img { position: relative; border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); }
        .sol-img img { width: 100%; display: block; }
        .sol-tag {
          position: absolute; top: 14px; left: 14px;
          font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--blue); font-weight: 500;
          padding: 5px 12px; background: rgba(237,245,252,0.92);
          border-radius: 2px;
        }

        .sol-desc { font-size: 15px; color: var(--gray-600); line-height: 1.75; margin-bottom: 24px; }
        ul { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--gray-600); }
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
