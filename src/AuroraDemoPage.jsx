import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/global.css";
import {
  translations,
  supportedLanguages,
} from './utils/language';

export default function AuroraDemoPage() {
  const [lang, setLang] = useState(() => localStorage.getItem('aurora_lang') || 'en');

  useEffect(() => {
    localStorage.setItem('aurora_lang', lang);
    document.title = 'Aurora | Premium Video Editing';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Aurora premium video editing showcase demo by Trial Studios.';
  }, [lang]);

  const packages = useMemo(
    () => [
      { name: 'Starter Reel', price: '$149', features: ['30–60s edit', 'Captions', 'Transitions'] },
      { name: 'Creator Pro', price: '$399', features: ['3 short videos', 'Sound design', 'Thumbnail'] },
      { name: 'Brand Cinematic', price: '$899', features: ['Ad film', 'Color grade', 'Motion graphics'] },
    ],
    []
  );

  const socials = ['WhatsApp', 'Instagram', 'Behance', 'YouTube'];

  const saveInterest = (pkg) => {
    const old = JSON.parse(localStorage.getItem('aurora_leads') || '[]');
    old.push({ package: pkg, time: new Date().toISOString() });
    localStorage.setItem('aurora_leads', JSON.stringify(old));
    alert(`Demo interest saved for ${pkg}`);
  };

  const navItems = translations[lang]?.nav || translations.en.nav;
  const t = translations[lang] || translations.en;

  return (
    <div>
      <Header
       navItems={navItems}
       lang={lang}
       setLang={setLang}
       languages={supportedLanguages}
/>

      <main>
        <section className="ts-container" style={{ padding: '6rem 0', textAlign: 'center' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Premium Video Editing Demo
          </p>
          <h1 style={{ fontSize: '4rem', lineHeight: 1.1, maxWidth: '800px', margin: '0 auto' }}>
            {t.heroTitle}
          </h1>
          <p style={{ color: 'var(--muted)', marginTop: '1.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            {t.heroDesc}
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="ts-lang-btn" onClick={() => saveInterest('Direct Hire')}>
              {t.hire}
            </button>
            <a href="#portfolio" className="ts-logo" style={{ fontSize: '1rem', letterSpacing: 'normal' }}>
              {t.portfolio}
            </a>
          </div>
        </section>

        <section id="portfolio" className="ts-container" style={{ padding: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Portfolio Highlights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '1rem' }}>
                <div style={{ aspectRatio: '16 / 9', background: 'rgba(255,255,255,0.08)', borderRadius: '18px', marginBottom: '1rem' }} />
                <h3>Client Project #{i}</h3>
                <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
                  Cinematic reels, retention-focused edits, and polished brand storytelling.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="ts-container" style={{ padding: '4rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '2rem' }}>
              <h3>About</h3>
              <p style={{ color: 'var(--muted)', marginTop: '1rem' }}>
                Aurora transforms raw footage into emotional, premium stories using pacing, sound design, and motion graphics.
              </p>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '2rem' }}>
              <h3>Experience</h3>
              <p style={{ color: 'var(--muted)', marginTop: '1rem' }}>
                5+ years across YouTube, ads, short-form, trailers, and premium social campaigns.
              </p>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '2rem' }}>
              <h3>What Makes Aurora Different</h3>
              <p style={{ color: 'var(--muted)', marginTop: '1rem' }}>
                Story psychology, cinematic pacing, layered sound, and premium finishing workflow.
              </p>
            </div>
          </div>
        </section>

        <section id="packages" className="ts-container" style={{ padding: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Service Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{ background: 'white', color: 'black', borderRadius: '24px', padding: '2rem' }}>
                <h3>{pkg.name}</h3>
                <p style={{ fontSize: '2rem', fontWeight: 800, margin: '1rem 0' }}>{pkg.price}</p>
                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <button
                  onClick={() => saveInterest(pkg.name)}
                  style={{ marginTop: '1.5rem', width: '100%', padding: '0.9rem', borderRadius: '16px', border: 'none' }}
                >
                  Choose Demo
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="ts-container" style={{ padding: '4rem 0 6rem' }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '32px', padding: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Ready to create your next viral masterpiece?</h2>
            <p style={{ color: 'var(--muted)', marginTop: '1rem' }}>
              Demo-only contact buttons for GitHub showcase trust building.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    background: 'white',
                    color: 'black',
                    padding: '0.9rem 1.2rem',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
