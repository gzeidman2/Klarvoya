'use client';

export default function Home() {
  const photos = {
    hero: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80",
    story: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80",
    model1: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80",
    model2: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",
    model3: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  };

  return (
    <main role="main" id="main-content" style={{ fontFamily: 'Georgia, serif', backgroundColor: '#120025', color: '#f0eaf8', margin: 0, padding: 0 }}>

      {/* HERO */}
      <section aria-label="Hero" style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #2a0a4a 0%, #3d1070 50%, #1a0035 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        <img src={photos.hero} alt="Elegant fine jewelry" aria-hidden="true" style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.15,
        }}/>

        <svg aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.12 }} viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <circle cx="400" cy="400" r="300" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
          <circle cx="400" cy="400" r="240" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
          <circle cx="400" cy="400" r="180" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
          <circle cx="400" cy="400" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
          <circle cx="400" cy="400" r="60" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
          <circle cx="400" cy="280" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.4"/>
          <circle cx="400" cy="520" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.4"/>
          <circle cx="296" cy="340" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.4"/>
          <circle cx="504" cy="340" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.4"/>
          <circle cx="296" cy="460" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.4"/>
          <circle cx="504" cy="460" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.4"/>
          <line x1="100" y1="400" x2="700" y2="400" stroke="#c9a8f0" strokeWidth="0.3"/>
          <line x1="400" y1="100" x2="400" y2="700" stroke="#c9a8f0" strokeWidth="0.3"/>
          <line x1="187" y1="187" x2="613" y2="613" stroke="#c9a8f0" strokeWidth="0.3"/>
          <line x1="613" y1="187" x2="187" y2="613" stroke="#c9a8f0" strokeWidth="0.3"/>
          <polygon points="400,160 580,294 511,506 289,506 220,294" fill="none" stroke="#c9a8f0" strokeWidth="0.4"/>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
            <circle key={i}
              cx={400 + 310 * Math.cos(deg * Math.PI / 180)}
              cy={400 + 310 * Math.sin(deg * Math.PI / 180)}
              r="2.5" fill="#c9a8f0"/>
          ))}
        </svg>

        {[
          { top: '10%', left: '5%', w: 80 },
          { top: '20%', left: '72%', w: 110 },
          { top: '68%', left: '12%', w: 60 },
          { top: '78%', left: '68%', w: 90 },
          { top: '42%', left: '86%', w: 70 },
          { top: '55%', left: '2%', w: 50 },
        ].map((s, i) => (
          <div key={i} aria-hidden="true" style={{
            position: 'absolute', top: s.top, left: s.left,
            width: `${s.w}px`, height: '1px',
            background: 'linear-gradient(90deg, #c9a8f0, transparent)',
            opacity: 0.6, transform: 'rotate(-30deg)',
          }}>
            <div style={{ position: 'absolute', left: 0, top: '-2px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#c9a8f0', opacity: 0.9 }}/>
          </div>
        ))}

        {[
          { top: '15%', left: '20%' }, { top: '30%', left: '85%' },
          { top: '60%', left: '10%' }, { top: '75%', left: '80%' },
          { top: '20%', left: '50%' }, { top: '85%', left: '45%' },
          { top: '50%', left: '5%' },  { top: '10%', left: '65%' },
          { top: '90%', left: '25%' }, { top: '35%', left: '92%' },
        ].map((d, i) => (
          <div key={i} aria-hidden="true" style={{
            position: 'absolute', top: d.top, left: d.left,
            width: i % 2 === 0 ? '3px' : '2px',
            height: i % 2 === 0 ? '3px' : '2px',
            borderRadius: '50%', backgroundColor: '#c9a8f0', opacity: 0.6,
          }}/>
        ))}

        <div role="img" aria-label="Klarvoya logo" style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '32px',
          boxShadow: '0 0 50px rgba(180,100,255,0.35)',
          position: 'relative', zIndex: 1,
          backgroundColor: '#f0e6ff',
        }}>
          <img src="/FullLogo.jpg" alt="Klarvoya logo" style={{
            width: '100%', height: '100%', objectFit: 'contain',
          }}/>
        </div>

        <p style={{ letterSpacing: '0.5em', fontSize: '11px', color: '#c9a8f0', marginBottom: '16px', fontFamily: 'sans-serif', position: 'relative', zIndex: 1 }}>
          FINE JEWELRY · PATENTED · EST. 2025
        </p>

        <h1 style={{ fontSize: '72px', fontWeight: '300', margin: '0 0 32px', letterSpacing: '0.1em', color: '#f0eaf8', position: 'relative', zIndex: 1 }}>
          Klarvoya<span style={{ fontSize: '24px', verticalAlign: 'super', color: '#c9a8f0' }}>™</span>
        </h1>

        <p style={{ fontSize: '19px', fontStyle: 'italic', color: '#d4b8f0', maxWidth: '500px', lineHeight: '1.9', marginBottom: '48px', position: 'relative', zIndex: 1 }}>
          From the word clairvoyant — jewelry that sees you, transforms you, and tells your story.
        </p>
        <nav aria-label="Primary actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <a href="mailto:info@klarvoya.com" aria-label="Contact Klarvoya by email" style={{
            backgroundColor: '#8B2FC9', color: '#fff',
            padding: '16px 40px', fontSize: '12px', letterSpacing: '0.25em',
            textDecoration: 'none', fontFamily: 'sans-serif', borderRadius: '2px',
          }}>GET IN TOUCH</a>
          <a href="https://instagram.com/klarvoya" target="_blank" rel="noopener noreferrer" aria-label="Follow Klarvoya on Instagram, opens in new tab" style={{
            border: '1px solid #c9a8f0', color: '#c9a8f0',
            padding: '16px 40px', fontSize: '12px', letterSpacing: '0.25em',
            textDecoration: 'none', fontFamily: 'sans-serif', borderRadius: '2px',
          }}>FOLLOW US</a>
        </nav>
      </section>

      {/* STORY */}
      <section aria-label="Our story" style={{
        background: 'linear-gradient(180deg, #1a0035 0%, #2a0a4a 100%)',
        padding: '70px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg aria-hidden="true" style={{ position: 'absolute', right: '-80px', top: '-80px', opacity: 0.08 }} width="400" height="400" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#c9a8f0" strokeWidth="1"/>
          <circle cx="200" cy="200" r="120" fill="none" stroke="#c9a8f0" strokeWidth="1"/>
          <circle cx="200" cy="200" r="60" fill="none" stroke="#c9a8f0" strokeWidth="1"/>
          <circle cx="200" cy="80" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
          <circle cx="200" cy="320" r="120" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
        </svg>
        <p style={{ letterSpacing: '0.4em', fontSize: '11px', color: '#c9a8f0', marginBottom: '20px', fontFamily: 'sans-serif' }}>OUR STORY</p>
        <h2 style={{ fontSize: '42px', fontWeight: '300', maxWidth: '600px', lineHeight: '1.4', marginBottom: '24px', color: '#f0eaf8' }}>
          Jewelry designed to make bold statements
        </h2>
        <p style={{ fontSize: '17px', maxWidth: '540px', lineHeight: '1.9', color: '#c9a8f0', marginBottom: '48px' }}>
          Klarvoya was born from the belief that jewelry should do more than decorate — it should transform. Each piece is patented, crafted from fine metals, and designed to reflect the many sides of who you are.
        </p>
        <div style={{ width: '100%', maxWidth: '700px', height: '420px', borderRadius: '4px', overflow: 'hidden', position: 'relative', border: '1px solid #3d1070' }}>
          <img src={photos.story} alt="Close up of elegant fine jewelry on soft fabric" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a0035 0%, transparent 60%)'}}/>
        </div>
      </section>

      {/* PILLARS */}
      <section aria-label="What we stand for" style={{
        background: 'linear-gradient(180deg, #2a0a4a 0%, #1a0035 100%)',
        padding: '70px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.07 }} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <circle cx="150" cy="300" r="200" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
          <circle cx="150" cy="300" r="140" fill="none" stroke="#c9a8f0" strokeWidth="0.6"/>
          <circle cx="150" cy="300" r="80" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
          <circle cx="650" cy="300" r="200" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
          <circle cx="650" cy="300" r="140" fill="none" stroke="#c9a8f0" strokeWidth="0.6"/>
          <circle cx="650" cy="300" r="80" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
          <circle cx="400" cy="300" r="200" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
          <circle cx="400" cy="300" r="140" fill="none" stroke="#c9a8f0" strokeWidth="0.6"/>
          <line x1="0" y1="300" x2="800" y2="300" stroke="#c9a8f0" strokeWidth="0.3"/>
          <line x1="400" y1="0" x2="400" y2="600" stroke="#c9a8f0" strokeWidth="0.3"/>
          <line x1="150" y1="0" x2="150" y2="600" stroke="#c9a8f0" strokeWidth="0.2"/>
          <line x1="650" y1="0" x2="650" y2="600" stroke="#c9a8f0" strokeWidth="0.2"/>
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <circle key={i}
              cx={400 + 380 * Math.cos(deg * Math.PI / 180)}
              cy={300 + 280 * Math.sin(deg * Math.PI / 180)}
              r="2" fill="#c9a8f0" opacity="0.6"/>
          ))}
        </svg>

        <p style={{ letterSpacing: '0.4em', fontSize: '11px', color: '#c9a8f0', marginBottom: '20px', fontFamily: 'sans-serif', position: 'relative', zIndex: 1 }}>WHAT WE STAND FOR</p>
        <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#f0eaf8', marginBottom: '48px', position: 'relative', zIndex: 1 }}>The Klarvoya way</h2>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          {[
            { title: 'Express Yourself, Boldly', body: 'Our designs dare you to be loud, proud, and unapologetically you. Jewelry as an expression of confidence.' },
            { title: 'Lead with Innovation', body: 'Patented technology meets fine craftsmanship. We push beyond what jewelry has been to create what it can be.' },
            { title: 'Doing It Right', body: 'From ethical sourcing to lasting quality — pieces that honor both the wearer and the world.' },
          ].map((p) => (
            <article key={p.title} style={{
              flex: '1', minWidth: '240px', maxWidth: '260px',
              backgroundColor: '#2d0060', borderRadius: '4px',
              padding: '36px 28px', textAlign: 'center',
              border: '1px solid #3d1070',
            }}>
              <svg width="48" height="48" viewBox="0 0 48 48" style={{ marginBottom: '20px' }} aria-hidden="true">
                <circle cx="24" cy="24" r="22" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
                <circle cx="24" cy="24" r="14" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
                <circle cx="24" cy="24" r="6" fill="#8B2FC9" opacity="0.6"/>
              </svg>
              <h3 style={{ fontSize: '18px', fontWeight: '400', color: '#f0eaf8', marginBottom: '16px', lineHeight: '1.4' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', color: '#c9a8f0', lineHeight: '1.8' }}>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EARRINGS SHOWCASE */}
      <section aria-label="The collection" style={{
        background: 'linear-gradient(180deg, #1a0035 0%, #2a0a4a 100%)',
        padding: '70px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}>
        <p style={{ letterSpacing: '0.4em', fontSize: '11px', color: '#c9a8f0', marginBottom: '20px', fontFamily: 'sans-serif' }}>THE COLLECTION</p>
        <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#f0eaf8', marginBottom: '16px' }}>Worn. Remembered. Passed down.</h2>
        <p style={{ fontSize: '16px', color: '#c9a8f0', maxWidth: '480px', lineHeight: '1.9', marginBottom: '48px' }}>
          Circular, sculptural, and made to move with you. Our earrings are conversation starters and heirlooms in the making.
        </p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { src: photos.model1, alt: 'Fine gold jewelry close up on soft fabric' },
            { src: photos.model2, alt: 'Elegant jewelry on neutral background' },
            { src: photos.model3, alt: 'Fine jewelry detail showing craftsmanship' },
          ].map((item, i) => (
            <div key={i} style={{
              width: '280px', height: '360px',
              borderRadius: '4px', overflow: 'hidden',
              border: '1px solid #3d1070',
              position: 'relative',
              backgroundColor: '#2d0060',
            }}>
              <img src={item.src} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a0035 0%, transparent 50%)' }}/>
            </div>
          ))}
        </div>
      </section>

      {/* MAILING LIST */}
      <section aria-label="Join our mailing list" style={{
        background: 'linear-gradient(180deg, #2a0a4a 0%, #1a0035 100%)',
        padding: '70px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.06 }} viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <circle cx="400" cy="200" r="300" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
          <circle cx="400" cy="200" r="200" fill="none" stroke="#c9a8f0" strokeWidth="0.6"/>
          <circle cx="400" cy="200" r="100" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
          <circle cx="100" cy="200" r="150" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
          <circle cx="700" cy="200" r="150" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
        </svg>
        <p style={{ letterSpacing: '0.4em', fontSize: '11px', color: '#c9a8f0', marginBottom: '16px', fontFamily: 'sans-serif', position: 'relative', zIndex: 1 }}>
          STAY IN THE KNOW
        </p>
        <h2 style={{ fontSize: '42px', fontWeight: '300', color: '#f0eaf8', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
          Join the inner circle
        </h2>
        <p style={{ fontSize: '16px', color: '#c9a8f0', maxWidth: '440px', lineHeight: '1.9', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
          Be the first to know about new drops, exclusive previews, and the story behind each Klarvoya piece.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '500px', width: '100%', position: 'relative', zIndex: 1 }}>
          <label htmlFor="email-input" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Your email address"
            aria-label="Enter your email address to join the mailing list"
            style={{
              flex: 1, minWidth: '240px',
              padding: '16px 20px', fontSize: '14px', fontFamily: 'sans-serif',
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid #c9a8f0', borderRight: 'none',
              color: '#ffffff', outline: 'none', borderRadius: '2px 0 0 2px',
            }}
          />
          <button
            type="button"
            aria-label="Subscribe to Klarvoya mailing list"
            onClick={async () => {
              const input = document.getElementById('email-input') as HTMLInputElement;
              if (!input || !input.value || !input.value.includes('@')) {
                alert('Please enter a valid email address.');
                return;
              }
              try {
                await fetch('/api/subscribe', {
                  method: 'POST',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify({ email: input.value }),
                });
                alert('Thank you for joining the Klarvoya inner circle!');
                input.value = '';
              } catch {
                alert('Something went wrong. Please try again.');
              }
            }}
            style={{
              padding: '16px 28px', backgroundColor: '#8B2FC9', color: '#ffffff',
              border: '1px solid #8B2FC9', fontSize: '12px', letterSpacing: '0.2em',
              fontFamily: 'sans-serif', cursor: 'pointer', borderRadius: '0 2px 2px 0',
            }}
          >
            JOIN
          </button>
        </div>
        <p style={{ fontSize: '11px', color: '#a080c0', marginTop: '16px', fontFamily: 'sans-serif', position: 'relative', zIndex: 1 }}>
          No spam, ever. Unsubscribe at any time.
        </p>
      </section>

      {/* CTA */}
      <section aria-label="Follow us on Instagram" style={{
        background: 'linear-gradient(160deg, #3d1070 0%, #8B2FC9 100%)',
        padding: '70px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg aria-hidden="true" style={{ position: 'absolute', top: '-60px', left: '-60px', opacity: 0.1 }} width="300" height="300" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="140" fill="none" stroke="#fff" strokeWidth="1"/>
          <circle cx="150" cy="150" r="90" fill="none" stroke="#fff" strokeWidth="1"/>
          <circle cx="150" cy="150" r="40" fill="none" stroke="#fff" strokeWidth="1"/>
        </svg>
        <h2 style={{ fontSize: '48px', fontWeight: '300', color: '#fff', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Be the first to know</h2>
        <p style={{ fontSize: '17px', color: '#e8d8ff', maxWidth: '420px', lineHeight: '1.9', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
          The collection is coming. Follow us on Instagram and be first when Klarvoya drops.
        </p>
        <a href="https://instagram.com/klarvoya" target="_blank" rel="noopener noreferrer" aria-label="Follow Klarvoya on Instagram, opens in new tab" style={{
          backgroundColor: '#fff', color: '#8B2FC9',
          padding: '18px 48px', fontSize: '12px', letterSpacing: '0.3em',
          textDecoration: 'none', fontFamily: 'sans-serif', borderRadius: '2px',
          position: 'relative', zIndex: 1,
        }}>FOLLOW US ON INSTAGRAM</a>
      </section>

      {/* FOOTER */}
      <footer role="contentinfo" style={{
        backgroundColor: '#0d0018', padding: '40px 24px',
        textAlign: 'center', fontFamily: 'sans-serif',
        fontSize: '11px', color: '#5a3080', letterSpacing: '0.2em',
      }}>
        <p style={{ marginBottom: '16px' }}>2025 KLARVOYA TM · ALL RIGHTS RESERVED · FINE JEWELRY · PATENTED</p>
        <nav aria-label="Legal links" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/privacy-policy" style={{ fontSize: '11px', color: '#c9a8f0', textDecoration: 'underline', letterSpacing: '0.15em' }}>PRIVACY POLICY</a>
          <a href="/terms" style={{ fontSize: '11px', color: '#c9a8f0', textDecoration: 'underline', letterSpacing: '0.15em' }}>TERMS AND CONDITIONS</a>
          <a href="mailto:info@klarvoya.com" style={{ fontSize: '11px', color: '#c9a8f0', textDecoration: 'underline', letterSpacing: '0.15em' }}>CONTACT</a>
        </nav>
      </footer>

    </main>
  );
}
