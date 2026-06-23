'use client';

import { useEffect, useState } from 'react';

const ring1Dots = [0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => ({
  cx: Math.round((200 + 175 * Math.cos(deg * Math.PI / 180)) * 1000) / 1000,
  cy: Math.round((200 + 175 * Math.sin(deg * Math.PI / 180)) * 1000) / 1000,
}));

const ring2Dots = [0,60,120,180,240,300].map((deg) => ({
  cx: Math.round((200 + 130 * Math.cos(deg * Math.PI / 180)) * 1000) / 1000,
  cy: Math.round((200 + 130 * Math.sin(deg * Math.PI / 180)) * 1000) / 1000,
}));

const storyDots = [0,45,90,135,180,225,270,315].map((deg) => ({
  cx: Math.round((150 + 140 * Math.cos(deg * Math.PI / 180)) * 1000) / 1000,
  cy: Math.round((150 + 140 * Math.sin(deg * Math.PI / 180)) * 1000) / 1000,
}));

const storyDots2 = [0,45,90,135,180,225,270,315].map((deg) => ({
  cx: 150 + 140 * Math.cos(deg * Math.PI / 180),
  cy: 150 + 140 * Math.sin(deg * Math.PI / 180),
}));

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    function initShopify() {
      const ShopifyBuy = (window as any).ShopifyBuy;
      const client = ShopifyBuy.buildClient({
        domain: 'ztmpay-cu.myshopify.com',
        storefrontAccessToken: '47534d5598ee339c5793a39079cc4f2c',
      });
      ShopifyBuy.UI.onReady(client).then((ui: any) => {
        const el = document.getElementById('honeydew-product');
        if (!el) return;
        ui.createComponent('product', {
          id: '10115406233920',
          node: el,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  'text-align': 'left',
                  'font-family': 'Georgia, serif',
                },
                title: {
                  'font-family': 'Georgia, serif',
                  'font-size': '18px',
                  'font-weight': '300',
                  'color': '#2d0060',
                },
                price: {
                  'font-family': 'sans-serif',
                  'font-size': '14px',
                  'color': '#6a3a9a',
                },
                button: {
                  'font-family': 'sans-serif',
                  'font-size': '11px',
                  'letter-spacing': '0.2em',
                  'background-color': '#2d0060',
                  'border-radius': '0px',
                  'padding': '14px 28px',
                  ':hover': { 'background-color': '#8B2FC9' },
                  ':focus': { 'background-color': '#8B2FC9' },
                },
              },
              text: { button: 'PRE-ORDER' },
              contents: {
                img: false,
                title: true,
                price: true,
                options: false,
                button: true,
              },
            },
            cart: {
              styles: {
                button: {
                  'background-color': '#2d0060',
                  ':hover': { 'background-color': '#8B2FC9' },
                },
              },
              text: { total: 'Subtotal', button: 'CHECKOUT' },
            },
            toggle: {
              styles: {
                toggle: {
                  'background-color': '#8B2FC9',
                  ':hover': { 'background-color': '#6a1fa0' },
                },
              },
            },
          },
        });
      });
    }

    if ((window as any).ShopifyBuy?.UI) {
      initShopify();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = initShopify;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f5f0ff', color: '#2d0060', margin: 0, padding: 0 }}>

      {/* ANNOUNCEMENT BAR */}
      <div style={{
        backgroundColor: '#2d0060', padding: '10px 24px',
        textAlign: 'center', fontFamily: 'sans-serif',
        fontSize: '12px', letterSpacing: '0.15em', color: '#e8d8ff',
      }}>
        PRE-ORDER NOW — SHIPS FALL 2026 · PATENT PENDING FINE JEWELRY
      </div>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(245,240,255,0.98)' : '#f5f0ff',
        borderBottom: '1px solid #e0d0f0',
        padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', gap: '28px', flex: 1 }}>
          {['PRE-ORDER', 'OUR STORY', 'CONTACT'].map((item) => (
            <a key={item}
              href={item === 'CONTACT' ? 'mailto:klarvoya@gmail.com' : `#${item.toLowerCase().replace(/ /g, '-')}`}
              style={{
                fontSize: '11px', letterSpacing: '0.15em', color: '#2d0060',
                textDecoration: 'none', fontFamily: 'sans-serif', whiteSpace: 'nowrap',
              }}>{item}</a>
          ))}
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <span style={{
            fontSize: '28px', fontWeight: '300', letterSpacing: '0.2em',
            color: '#2d0060', fontFamily: 'Georgia, serif', fontStyle: 'italic',
          }}>Klarvoya</span>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '24px' }}>
          <a href="https://instagram.com/klarvoya" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '11px', letterSpacing: '0.15em', color: '#2d0060',
            textDecoration: 'none', fontFamily: 'sans-serif',
          }}>INSTAGRAM</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="pre-order" style={{
        background: 'linear-gradient(160deg, #f5f0ff 0%, #ede4ff 60%, #faf8ff 100%)',
        padding: '100px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '64px', flexWrap: 'wrap',
        position: 'relative', overflow: 'hidden',
        minHeight: '560px',
      }}>
        <svg aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05 }} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <circle cx="600" cy="300" r="350" fill="none" stroke="#8B2FC9" strokeWidth="1"/>
          <circle cx="600" cy="300" r="260" fill="none" stroke="#8B2FC9" strokeWidth="0.8"/>
          <circle cx="600" cy="300" r="170" fill="none" stroke="#8B2FC9" strokeWidth="0.6"/>
          <circle cx="600" cy="300" r="80" fill="none" stroke="#8B2FC9" strokeWidth="0.5"/>
          <circle cx="150" cy="300" r="200" fill="none" stroke="#8B2FC9" strokeWidth="0.5"/>
          <circle cx="150" cy="300" r="120" fill="none" stroke="#8B2FC9" strokeWidth="0.4"/>
          <line x1="0" y1="300" x2="800" y2="300" stroke="#8B2FC9" strokeWidth="0.3"/>
          <line x1="400" y1="0" x2="400" y2="600" stroke="#8B2FC9" strokeWidth="0.3"/>
        </svg>

        {/* Left — text and pre-order */}
        <div style={{ flex: 1, minWidth: '300px', maxWidth: '520px', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#8B2FC9', fontFamily: 'sans-serif', marginBottom: '16px' }}>
            KLARVOYA DEBUT COLLECTION
          </p>
          <h1 style={{ fontSize: '56px', fontWeight: '300', color: '#2d0060', lineHeight: '1.15', marginBottom: '24px' }}>
            Honeydew<br/>
            <span style={{ fontStyle: 'italic' }}>Earrings</span>
          </h1>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#8B2FC9', marginBottom: '24px' }}/>
          <p style={{ fontSize: '16px', color: '#5a3080', lineHeight: '1.9', marginBottom: '16px' }}>
            A patent pending circular hoop earring crafted from brass. Lightweight yet substantial, designed to move with you and complement every look from morning to evening.
          </p>

          <div style={{ backgroundColor: '#fff', border: '1px solid #e0d0f0', padding: '20px 24px', marginBottom: '24px', borderRadius: '2px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              {[
                { label: 'Material', value: 'Brass' },
                { label: 'Style', value: 'Circular Hoop' },
                { label: 'Price', value: '$80' },
                { label: 'Ships', value: 'Fall 2026' },
                { label: 'Patent', value: 'Pending' },
              ].map((detail) => (
                <div key={detail.label} style={{ minWidth: '80px' }}>
                  <p style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#8B2FC9', fontFamily: 'sans-serif', marginBottom: '4px' }}>{detail.label.toUpperCase()}</p>
                  <p style={{ fontSize: '14px', color: '#2d0060', fontWeight: '300' }}>{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="honeydew-product" style={{ maxWidth: '320px' }}/>

          <p style={{ fontSize: '11px', color: '#9a7ab0', fontFamily: 'sans-serif', marginTop: '16px', letterSpacing: '0.1em' }}>
            Secure checkout · Free shipping on all orders
          </p>
        </div>

        {/* Right — geometric illustration */}
        <div style={{
          flex: 1, minWidth: '280px', maxWidth: '460px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <svg width="380" height="380" viewBox="0 0 400 400" aria-label="Honeydew circular hoop earring design">
            <circle cx="200" cy="200" r="175" fill="none" stroke="#8B2FC9" strokeWidth="2"/>
            <circle cx="200" cy="200" r="155" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
            <circle cx="200" cy="200" r="130" fill="none" stroke="#8B2FC9" strokeWidth="1"/>
            <circle cx="200" cy="200" r="105" fill="none" stroke="#c9a8f0" strokeWidth="0.6"/>
            <circle cx="200" cy="200" r="80" fill="none" stroke="#8B2FC9" strokeWidth="0.8"/>
            <circle cx="200" cy="200" r="55" fill="none" stroke="#c9a8f0" strokeWidth="0.5"/>
            <circle cx="200" cy="200" r="30" fill="none" stroke="#8B2FC9" strokeWidth="0.5"/>
            <circle cx="200" cy="200" r="8" fill="#8B2FC9" opacity="0.3"/>
            <circle cx="200" cy="200" r="3" fill="#8B2FC9"/>
            <line x1="25" y1="200" x2="375" y2="200" stroke="#c9a8f0" strokeWidth="0.4"/>
            <line x1="200" y1="25" x2="200" y2="375" stroke="#c9a8f0" strokeWidth="0.4"/>
            <line x1="76" y1="76" x2="324" y2="324" stroke="#c9a8f0" strokeWidth="0.3"/>
            <line x1="324" y1="76" x2="76" y2="324" stroke="#c9a8f0" strokeWidth="0.3"/>
            {ring1Dots.map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r="4" fill="#8B2FC9" opacity="0.5"/>
            ))}
            {ring2Dots.map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r="2.5" fill="#c9a8f0" opacity="0.7"/>
            ))}
            <text x="200" y="362" textAnchor="middle" fontSize="11" fill="#8B2FC9" fontFamily="Georgia, serif" letterSpacing="5" opacity="0.6">HONEYDEW</text>
            <text x="200" y="376" textAnchor="middle" fontSize="8" fill="#8B2FC9" fontFamily="sans-serif" letterSpacing="4" opacity="0.4">KLARVOYA</text>
          </svg>
        </div>
      </section>

      {/* VALUES STRIP */}
      <div style={{
        backgroundColor: '#fff',
        padding: '16px 24px',
        borderBottom: '1px solid #e0d0f0',
        borderTop: '1px solid #e0d0f0',
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px',
        flexWrap: 'wrap',
      }}>
        {['PATENT PENDING', 'BRASS', 'CIRCULAR HOOP', 'WOMAN OWNED', 'FREE SHIPPING'].map((val, i) => (
          <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {i > 0 && <span style={{ color: '#c9a8f0', fontSize: '10px' }}>◇</span>}
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#6a3a9a', fontFamily: 'sans-serif' }}>{val}</span>
          </div>
        ))}
      </div>

      {/* PRODUCT DETAILS */}
      <section style={{
        backgroundColor: '#fff',
        padding: '80px 48px',
        display: 'flex', gap: '64px', flexWrap: 'wrap', justifyContent: 'center',
      }}>
        <p style={{ width: '100%', textAlign: 'center', fontSize: '11px', letterSpacing: '0.4em', color: '#8B2FC9', fontFamily: 'sans-serif', marginBottom: '8px' }}>THE DETAILS</p>
        <h2 style={{ width: '100%', textAlign: 'center', fontSize: '32px', fontWeight: '300', color: '#2d0060', marginBottom: '48px', fontStyle: 'italic' }}>
          crafted with intention
        </h2>
        {[
          {
            title: 'The Design',
            body: 'A patent pending circular hoop with a refined silhouette. Lightweight yet substantial, the Honeydew is designed to move with you through every moment of your day.',
          },
          {
            title: 'The Material',
            body: 'Crafted from brass — a warm, rich metal with a beautiful tone that complements every skin tone. Durable and built to last for years to come.',
          },
          {
            title: 'The Promise',
            body: 'Every Klarvoya piece features a patent pending design. Your pre-order helps bring this original design to life — be among the first to own it.',
          },
        ].map((item) => (
          <div key={item.title} style={{ flex: '1', minWidth: '220px', maxWidth: '260px', textAlign: 'center' }}>
            <div style={{ width: '24px', height: '1px', backgroundColor: '#8B2FC9', margin: '0 auto 20px' }}/>
            <h3 style={{ fontSize: '18px', fontWeight: '300', color: '#2d0060', marginBottom: '16px' }}>{item.title}</h3>
            <p style={{ fontSize: '14px', color: '#6a3a9a', lineHeight: '1.9' }}>{item.body}</p>
          </div>
        ))}
      </section>

      {/* OUR STORY */}
      <section id="our-story" style={{
        background: 'linear-gradient(160deg, #f5f0ff 0%, #ede4ff 100%)',
        padding: '100px 48px',
        display: 'flex', gap: '80px', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg aria-hidden="true" style={{ position: 'absolute', left: '-60px', bottom: '-60px', opacity: 0.05 }} width="400" height="400" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#8B2FC9" strokeWidth="1"/>
          <circle cx="200" cy="200" r="130" fill="none" stroke="#8B2FC9" strokeWidth="1"/>
          <circle cx="200" cy="200" r="80" fill="none" stroke="#8B2FC9" strokeWidth="1"/>
          <circle cx="200" cy="200" r="30" fill="none" stroke="#8B2FC9" strokeWidth="1"/>
        </svg>

        <div style={{ flex: 1, minWidth: '280px', maxWidth: '500px', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#8B2FC9', fontFamily: 'sans-serif', marginBottom: '16px' }}>OUR STORY</p>
          <h2 style={{ fontSize: '40px', fontWeight: '300', color: '#2d0060', marginBottom: '24px', lineHeight: '1.3', fontStyle: 'italic' }}>
            from the word<br/>clairvoyant
          </h2>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#8B2FC9', marginBottom: '24px' }}/>
          <p style={{ fontSize: '16px', color: '#5a3080', lineHeight: '1.9', marginBottom: '20px' }}>
            Klarvoya was born from the belief that jewelry should do more than decorate. It should transform. It should see you.
          </p>
          <p style={{ fontSize: '16px', color: '#5a3080', lineHeight: '1.9', marginBottom: '32px' }}>
            The Honeydew earring is our debut piece — a patent pending circular hoop designed to be worn, remembered, and passed down. Simple in form, intentional in every detail.
          </p>
          <a href="https://instagram.com/klarvoya" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            backgroundColor: '#2d0060', color: '#fff',
            padding: '13px 36px', fontSize: '11px', letterSpacing: '0.2em',
            textDecoration: 'none', fontFamily: 'sans-serif',
          }}>FOLLOW OUR JOURNEY</a>
        </div>

        <div style={{
          flex: 1, minWidth: '260px', maxWidth: '380px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <svg width="320" height="320" viewBox="0 0 300 300" aria-hidden="true">
            <circle cx="150" cy="150" r="140" fill="none" stroke="#8B2FC9" strokeWidth="1.5"/>
            <circle cx="150" cy="150" r="110" fill="none" stroke="#c9a8f0" strokeWidth="0.8"/>
            <circle cx="150" cy="150" r="80" fill="none" stroke="#8B2FC9" strokeWidth="0.8"/>
            <circle cx="150" cy="150" r="50" fill="none" stroke="#c9a8f0" strokeWidth="0.6"/>
            <circle cx="150" cy="150" r="20" fill="#8B2FC9" opacity="0.1"/>
            <circle cx="150" cy="150" r="5" fill="#8B2FC9" opacity="0.4"/>
            <line x1="10" y1="150" x2="290" y2="150" stroke="#c9a8f0" strokeWidth="0.4"/>
            <line x1="150" y1="10" x2="150" y2="290" stroke="#c9a8f0" strokeWidth="0.4"/>
            <line x1="51" y1="51" x2="249" y2="249" stroke="#c9a8f0" strokeWidth="0.3"/>
            <line x1="249" y1="51" x2="51" y2="249" stroke="#c9a8f0" strokeWidth="0.3"/>
            {storyDots.map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r="3.5" fill="#8B2FC9" opacity="0.5"/>
            ))}
            <text x="150" y="268" textAnchor="middle" fontSize="10" fill="#8B2FC9" fontFamily="Georgia, serif" letterSpacing="4" opacity="0.5">KLARVOYA</text>
          </svg>
        </div>
      </section>

      {/* MAILING LIST */}
      <section style={{
        backgroundColor: '#fff',
        padding: '80px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        borderTop: '1px solid #e0d0f0',
      }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#8B2FC9', fontFamily: 'sans-serif', marginBottom: '12px' }}>STAY IN THE KNOW</p>
        <h2 style={{ fontSize: '32px', fontWeight: '300', color: '#2d0060', marginBottom: '8px', fontStyle: 'italic' }}>join the inner circle</h2>
        <div style={{ width: '32px', height: '1px', backgroundColor: '#8B2FC9', margin: '0 auto 16px' }}/>
        <p style={{ fontSize: '14px', color: '#6a3a9a', maxWidth: '400px', lineHeight: '1.9', marginBottom: '36px' }}>
          Be first to know when Honeydew ships, plus exclusive previews of what is coming next from Klarvoya.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '480px', width: '100%' }}>
          <label htmlFor="email-input" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Your email address"
            style={{
              flex: 1, minWidth: '240px',
              padding: '14px 20px', fontSize: '13px', fontFamily: 'sans-serif',
              backgroundColor: '#faf8ff',
              border: '1px solid #c9a8f0', borderRight: 'none',
              color: '#2d0060', outline: 'none',
            }}
          />
          <button
            type="button"
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
              padding: '14px 28px', backgroundColor: '#2d0060', color: '#fff',
              border: 'none', fontSize: '11px', letterSpacing: '0.25em',
              fontFamily: 'sans-serif', cursor: 'pointer',
            }}
          >JOIN</button>
        </div>
        <p style={{ fontSize: '11px', color: '#b090d0', marginTop: '14px', fontFamily: 'sans-serif' }}>
          No spam, ever. Unsubscribe at any time.
        </p>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #2d0060 0%, #8B2FC9 100%)',
        padding: '80px 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg aria-hidden="true" style={{ position: 'absolute', top: '-40px', right: '-40px', opacity: 0.08 }} width="300" height="300" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="140" fill="none" stroke="#fff" strokeWidth="1"/>
          <circle cx="150" cy="150" r="90" fill="none" stroke="#fff" strokeWidth="1"/>
          <circle cx="150" cy="150" r="40" fill="none" stroke="#fff" strokeWidth="1"/>
        </svg>
        <p style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#e8d8ff', fontFamily: 'sans-serif', marginBottom: '12px', position: 'relative', zIndex: 1 }}>FOLLOW ALONG</p>
        <h2 style={{ fontSize: '36px', fontWeight: '300', color: '#fff', marginBottom: '8px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>follow our journey</h2>
        <div style={{ width: '32px', height: '1px', backgroundColor: '#e8d8ff', margin: '0 auto 20px', position: 'relative', zIndex: 1 }}/>
        <p style={{ fontSize: '15px', color: '#e8d8ff', maxWidth: '400px', lineHeight: '1.9', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
          Behind the scenes, updates on our launch, and the story behind each Klarvoya piece.
        </p>
        <a href="https://instagram.com/klarvoya" target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: '#fff', color: '#2d0060',
          padding: '15px 48px', fontSize: '11px', letterSpacing: '0.3em',
          textDecoration: 'none', fontFamily: 'sans-serif',
          position: 'relative', zIndex: 1,
        }}>FOLLOW ON INSTAGRAM</a>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#2d0060',
        padding: '56px 48px 32px',
        fontFamily: 'sans-serif',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '40px',
          maxWidth: '960px', margin: '0 auto 48px',
        }}>
          <div>
            <p style={{ fontSize: '22px', fontWeight: '300', letterSpacing: '0.2em', color: '#fff', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '12px' }}>Klarvoya</p>
            <p style={{ fontSize: '12px', color: '#c9a8f0', lineHeight: '1.8', maxWidth: '200px' }}>
              Patent pending fine jewelry. Designed to transform.
            </p>
          </div>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#fff', marginBottom: '16px' }}>SHOP</p>
            <a href="#pre-order" style={{ display: 'block', fontSize: '12px', color: '#c9a8f0', textDecoration: 'none', marginBottom: '8px' }}>Honeydew Earrings — Pre-Order</a>
          </div>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#fff', marginBottom: '16px' }}>INFO</p>
            <a href="/privacy-policy" style={{ display: 'block', fontSize: '12px', color: '#c9a8f0', textDecoration: 'none', marginBottom: '8px' }}>Privacy Policy</a>
            <a href="/terms" style={{ display: 'block', fontSize: '12px', color: '#c9a8f0', textDecoration: 'none', marginBottom: '8px' }}>Terms and Conditions</a>
            <a href="mailto:klarvoya@gmail.com" style={{ display: 'block', fontSize: '12px', color: '#c9a8f0', textDecoration: 'none', marginBottom: '8px' }}>Contact</a>
          </div>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#fff', marginBottom: '16px' }}>FOLLOW</p>
            <a href="https://instagram.com/klarvoya" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '12px', color: '#c9a8f0', textDecoration: 'none', marginBottom: '8px' }}>Instagram</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #3d1070', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#7a5a9a', letterSpacing: '0.15em' }}>
            2025 KLARVOYA TM · ALL RIGHTS RESERVED · FINE JEWELRY · PATENT PENDING
          </p>
        </div>
      </footer>

    </main>
  );
}