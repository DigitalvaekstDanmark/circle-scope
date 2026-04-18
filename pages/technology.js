import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const caps = [
  { title: 'Detection', body: 'Real-time object detection against complex backgrounds using convolutional neural networks trained on domain-specific datasets. Operates day, night, and in adverse weather.' },
  { title: 'Identification', body: 'Classification of detected objects by type, category, and threat level. Models are continuously updated with new threat signatures and environmental variations.' },
  { title: 'Tracking', body: 'Persistent multi-object tracking across frames and sensor views. Maintains object continuity through occlusion, interference, and cluttered environments.' },
  { title: 'Sensor fusion', body: 'Combines radar, optical, thermal, and RF data into a single coherent operational picture — reducing false positives and eliminating blind spots.' },
];

const pipeline = ['Raw sensor input', 'Preprocessing', 'AI detection', 'Classification', 'Track initiation', 'Fusion layer', 'Alert & response'];

export default function Technology() {
  return (
    <>
      <Head><title>Technology — CircleScope</title></Head>
      <Layout>
        <section className="page-header">
          <div className="inner">
            <div className="label">AI capabilities</div>
            <h1>Four layers of intelligence</h1>
            <p>CircleScope&apos;s AI pipeline processes sensor data through sequential stages — from raw input to actionable operational output in under 300 milliseconds.</p>
          </div>
        </section>

        <section className="caps">
          <div className="inner">
            {caps.map((c, i) => (
              <div className="cap-card" key={i}>
                <div className="cap-num">0{i + 1}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pipeline-section">
          <div className="inner">
            <div className="label">Processing pipeline</div>
            <h2>From sensor to alert in &lt;300ms</h2>
            <div className="pipeline">
              {pipeline.map((step, i) => (
                <div key={i} className="step-group">
                  <div className="step">
                    <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="step-name">{step}</div>
                  </div>
                  {i < pipeline.length - 1 && <div className="arrow">→</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edge-section">
          <div className="inner">
            <div className="text">
              <div className="label">Edge AI</div>
              <h2>Processing on-device. No cloud dependency.</h2>
              <p>All inference happens on the Tracker 2 edge compute unit, co-located with sensors. This means sub-second response times, full offline capability for air-gapped installations, and no data sovereignty concerns for sensitive operational environments.</p>
              <ul>
                {['No internet dependency for real-time inference', 'Compatible with air-gapped security environments', 'OTA model updates when connectivity is available', 'On-device encryption and secure boot'].map(f => (
                  <li key={f}><span className="bullet" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="img-wrap">
              <img src="/images/tracker2.png" alt="Tracker 2 edge AI compute unit" />
              <div className="img-caption">Tracker 2 — edge AI compute unit</div>
            </div>
          </div>
        </section>

        <section className="cta-strip">
          <div className="inner">
            <h2>Want a technical deep-dive?</h2>
            <p>Our engineers are happy to walk through the architecture in detail with your team.</p>
            <Link href="/contact" className="btn">Book a technical briefing</Link>
          </div>
        </section>
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

        .caps { background: var(--white); padding: 80px 60px; border-bottom: 1px solid var(--gray-200); }
        .caps .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        .cap-card {
          padding: 28px 22px; border: 1px solid var(--gray-200); border-radius: 6px;
          background: var(--white); transition: border-color 0.2s;
        }
        .cap-card:hover { border-color: var(--blue-mid); }
        .cap-num {
          font-family: var(--font-display); font-size: 13px; font-weight: 600;
          color: var(--blue-light); margin-bottom: 12px; letter-spacing: 0.06em;
        }
        .cap-card h3 { font-family: var(--font-display); font-size: 18px; font-weight: 600; color: var(--navy); margin-bottom: 10px; }
        .cap-card p { font-size: 13px; color: var(--gray-600); line-height: 1.65; }

        .pipeline-section { background: var(--off-white); padding: 80px 60px; border-bottom: 1px solid var(--gray-200); }
        .pipeline-section .inner { max-width: var(--max-width); margin: 0 auto; }
        .label { color: var(--blue); }
        h2 {
          font-family: var(--font-display); font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 600; letter-spacing: -0.02em; color: var(--navy); line-height: 1.15; margin-bottom: 36px;
        }
        .pipeline { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
        .step-group { display: flex; align-items: center; gap: 8px; }
        .step {
          display: flex; flex-direction: column; gap: 4px;
          padding: 14px 18px; background: var(--white);
          border: 1px solid var(--gray-200); border-radius: 4px;
          min-width: 110px;
        }
        .step-num { font-size: 10px; color: var(--blue); letter-spacing: 0.1em; font-weight: 500; }
        .step-name { font-size: 12px; font-weight: 500; color: var(--navy); }
        .arrow { color: var(--gray-400); font-size: 16px; }

        .edge-section { background: var(--white); padding: 80px 60px; border-bottom: 1px solid var(--gray-200); }
        .edge-section .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .text p { font-size: 15px; color: var(--gray-600); line-height: 1.75; margin-bottom: 24px; }
        ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        li { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--gray-600); }
        .bullet { width: 5px; height: 5px; border-radius: 50%; background: var(--blue-mid); flex-shrink: 0; }
        .img-wrap { border-radius: 8px; overflow: hidden; border: 1px solid var(--gray-200); }
        .img-wrap img { width: 100%; }
        .img-caption { padding: 10px 16px; font-size: 11px; color: var(--gray-400); letter-spacing: 0.04em; background: var(--off-white); border-top: 1px solid var(--gray-200); }

        .cta-strip { background: var(--blue-pale); padding: 80px 60px; text-align: center; }
        .cta-strip .inner { max-width: 480px; margin: 0 auto; }
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
