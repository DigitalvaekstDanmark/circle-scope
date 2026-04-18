import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Head><title>Contact — CircleScope</title></Head>
      <Layout>
        <section className="page-header">
          <div className="inner">
            <div className="label">Get in touch</div>
            <h1>Secure your operations today</h1>
            <p>Speak with a CircleScope systems engineer about your specific operational requirements. We typically respond within one business day.</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="inner">
            <div className="left">
              <div className="info-block">
                <h3>Contact information</h3>
                <div className="info-rows">
                  {[
                    { key: 'Email', val: 'contact@circlescope.com' },
                    { key: 'Location', val: 'Copenhagen, Denmark' },
                    { key: 'Response time', val: '< 1 business day' },
                    { key: 'Certifications', val: 'ISO 27001 · NATO-compatible' },
                  ].map((r) => (
                    <div className="info-row" key={r.key}>
                      <span className="info-key">{r.key}</span>
                      <span className="info-val">{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="also-block">
                <h3>What to expect</h3>
                <p>After submitting your message, a CircleScope engineer will review your requirements and reach out to schedule a call or site assessment. There&apos;s no obligation — just an honest conversation about whether our systems are the right fit.</p>
              </div>
            </div>

            <div className="right">
              {sent ? (
                <div className="success">
                  <div className="check">✓</div>
                  <h4>Message received</h4>
                  <p>We&apos;ll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="row-2">
                    <div className="field">
                      <label>First name</label>
                      <input type="text" placeholder="Jan" required />
                    </div>
                    <div className="field">
                      <label>Last name</label>
                      <input type="text" placeholder="Hansen" required />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email address</label>
                    <input type="email" placeholder="jan@organisation.com" required />
                  </div>
                  <div className="field">
                    <label>Organisation</label>
                    <input type="text" placeholder="Ministry of Defence / CPH Airport / etc." />
                  </div>
                  <div className="field">
                    <label>Area of interest</label>
                    <select>
                      <option value="" disabled>Select a system</option>
                      <option>DroneTracker (C-UAS)</option>
                      <option>FOD Tracker</option>
                      <option>Tracker 2</option>
                      <option>Camera systems</option>
                      <option>Multiple systems / full deployment</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea placeholder="Describe your operational environment and requirements..." rows={5} />
                  </div>
                  <button type="submit">Send message</button>
                </form>
              )}
            </div>
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

        .contact-section { background: var(--white); padding: 80px 60px; }
        .inner {
          max-width: var(--max-width); margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.6fr; gap: 80px; align-items: start;
        }

        .info-block, .also-block { margin-bottom: 40px; }
        h3 { font-family: var(--font-display); font-size: 16px; font-weight: 600; color: var(--navy); margin-bottom: 16px; }
        .info-rows { display: flex; flex-direction: column; }
        .info-row {
          display: flex; justify-content: space-between;
          padding: 12px 0; border-bottom: 1px solid var(--gray-200);
          font-size: 13px;
        }
        .info-key { color: var(--gray-400); }
        .info-val { color: var(--navy); font-weight: 400; }
        .also-block p { font-size: 14px; color: var(--gray-600); line-height: 1.7; }

        form {
          background: var(--off-white); border: 1px solid var(--gray-200);
          border-radius: 8px; padding: 36px;
          display: flex; flex-direction: column; gap: 18px;
        }
        .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .field { display: flex; flex-direction: column; gap: 6px; }
        label {
          font-size: 11px; font-weight: 500; color: var(--gray-600);
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        input, select, textarea {
          width: 100%; background: var(--white);
          border: 1px solid var(--gray-200); border-radius: 4px;
          color: var(--navy); padding: 11px 14px;
          font-family: var(--font-body); font-size: 14px;
          outline: none; transition: border-color 0.2s; appearance: none;
        }
        input:focus, select:focus, textarea:focus { border-color: var(--blue); }
        textarea { resize: vertical; }
        button {
          width: 100%; background: var(--navy); color: #fff;
          border: none; border-radius: 4px; padding: 13px;
          font-family: var(--font-body); font-size: 14px;
          font-weight: 500; letter-spacing: 0.04em;
          cursor: pointer; transition: background 0.2s; margin-top: 4px;
        }
        button:hover { background: var(--blue); }

        .success {
          background: var(--off-white); border: 1px solid var(--gray-200);
          border-radius: 8px; padding: 60px 36px; text-align: center;
        }
        .check {
          width: 48px; height: 48px; border-radius: 50%;
          background: #dcfce7; color: #16a34a; font-size: 20px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .success h4 {
          font-family: var(--font-display); font-size: 20px; font-weight: 600;
          color: var(--navy); margin-bottom: 8px;
        }
        .success p { font-size: 14px; color: var(--gray-600); }
      `}</style>
    </>
  );
}
