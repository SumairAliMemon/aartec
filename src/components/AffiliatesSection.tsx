"use client";
import React, { useState } from 'react';

const AFFILIATE_BASE = 'https://aartec.com/?a=YOUR_AFFILIATE'

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const cards = [
  {
    title: 'Sign Up for free',
    subtitle: 'Join the amira46.sg-host.com Affiliate Program for FREE at the top of this page',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657.895-3 2-3s2 1.343 2 3-1.343 3-3 3-1-1.343-1-3z" />
      </svg>
    )
  },
  {
    title: 'Recommend',
    subtitle: 'Share our products, services, or free content with your audience, adding your affiliate link',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m2 8l4-4-4-4" />
      </svg>
    )
  },
  {
    title: 'Earn',
    subtitle: 'Earn commissions for every new client you refer to us — up to 20% + 5% tier 2',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
      </svg>
    )
  }
]

const faqs = [
  {
    q: 'Register for FREE',
    a: 'Pick a username that will be embedded into your links (e.g. "JohnSmith" as your affiliate username).'
  },
  {
    q: 'How the referral link works',
    a: 'Use the referral link to link to this website e.g. www.aartec.com?a=JohnSmith or let people know if they use your affiliate code (e.g. "JohnSmith") at checkout they will get a 5% discount. The link automatically adds the 5% coupon.'
  },
  {
    q: 'Commission payments & refunds',
    a: 'You get paid 90 days after we get paid, provided the client does not request a refund/chargeback.'
  },
  {
    q: 'Tier system',
    a: 'If someone becomes an affiliate using your link, they become a tier 1 affiliate, and you are their tier 2 affiliate — so you earn on their referrals as tier 2.'
  },
  {
    q: 'Lifetime commissions',
    a: 'You make commissions on all sales for the life of the client — including future upgrades and purchases.'
  }
]

const Disclosure = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-blue-100 overflow-hidden">
      <button 
        className="flex w-full justify-between items-center px-4 py-3 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-blue-700">{question}</span>
        <ChevronUpIcon className={`w-5 h-5 text-blue-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-800">
      {/* Hero */}
      <header className="pt-16 pb-10 px-6 sm:px-10 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
            Earn <strong className="ml-1">20% for the life of a client</strong>
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Partner with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Aartec</span> — Become an Affiliate
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 mb-8">
            Would you like to help people while earning an income for yourself? Join for free, share your code or link, and earn lifetime commissions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={AFFILIATE_BASE} className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-[1.02] transition-transform">Get Affiliate Link</a>
            <a href="#learn" className="inline-flex items-center justify-center border border-blue-200 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">How it Works</a>
          </div>
        </div>
      </header>

      {/* three cards - with bottom blue line on hover/click and small lift */}
      <section className="px-6 sm:px-10 lg:px-20 -mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cards.map((c) => (
              <a
                key={c.title}
                href={AFFILIATE_BASE}
                className="group relative block bg-white rounded-2xl p-6 shadow-md border border-blue-100 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50">{c.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-blue-700">{c.title}</h3>
                  <p className="text-sm text-gray-600">{c.subtitle}</p>
                </div>

                {/* bottom line that appears on hover/focus */}
                <span
                  className="absolute left-6 right-6 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-focus:scale-x-100"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="px-6 sm:px-10 lg:px-20 mt-10">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
          <h2 className="text-2xl font-bold mb-3 text-blue-700">Program Highlights</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Join for FREE and get your affiliate code embedded into your links.</li>
            <li>Up to <strong>20%</strong> tier 1 commissions for direct referrals.</li>
            <li><strong>5%</strong> tier 2 commissions for referring influencers.</li>
            <li>Make up to <strong>USD 200,000</strong> recurring per sale (example-based).</li>
            <li>Paid 90 days after payment clearance and no refund/chargeback.</li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="learn" className="px-6 sm:px-10 lg:px-20 mt-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">How it works</h2>
          <p className="text-gray-600 mb-6">Follow these simple steps to start earning:</p>

          <div className="space-y-3">
            {faqs.map((f) => (
              <Disclosure key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold mb-3">1</div>
              <h4 className="font-bold text-black text-xl mb-2">Register</h4>
              <p className="text-sm text-gray-600">Sign up free and choose a username to embed in your links.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold mb-3">2</div>
              <h4 className="font-bold text-black text-xl mb-2">Share</h4>
              <p className="text-sm text-gray-600">Share your referral link or coupon with your audience.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold mb-3">3</div>
              <h4 className="font-bold text-black text-xl mb-2">Earn</h4>
              <p className="text-sm text-gray-600">Receive commissions for every sale for the life of the client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Promote & Two Ways to Earn */}
      <section className="px-6 sm:px-10 lg:px-20 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-5 text-blue-700">How To Promote</h3>
            <p className="text-gray-700 mb-3">The easiest way to promote aartec.com is simple: use your network. If you know people who can afford the services we offer, you already have what matters most — trust.</p>
            <ul className="list-disc pl-6 text-black font-bold space-y-2">
              <li>Leverage your existing relationships — trust converts best.</li>
              <li>Post updates on LinkedIn, Facebook, WhatsApp, Instagram.</li>
              <li>Appear on podcasts — introduce yourself as a cofounder.</li>
              <li>Host events and hand out flyers with your coupon code.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-5 text-blue-700">Two Ways to Earn</h3>
            <div className="space-y-4 text-black font-bold">
              <div>
                <strong>Direct Deals (Earn 20%)</strong>
                <p className="text-sm font-normal">Talk to clients directly — startups, entrepreneurs, business owners — and close the deal. You keep 20% of the sale.</p>
              </div>
              <div>
                <strong>Indirect Deals (Earn 5%)</strong>
                <p className="text-sm font-normal">Connect us with people of influence — they earn 20% and you earn 5% for opening the door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Retailer section */}
      <section className="px-6 sm:px-10 lg:px-20 mt-12">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl border border-blue-100 shadow-sm text-center">
          <h3 className="text-xl font-bold mb-4 text-blue-700">Physical retailers are promoting Aartec to increase their sales</h3>
          <div className="w-full aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.youtube.com/embed/ChD_3cp7fds?si=eouyYUbocEcDCY3k"
              title="Aartec Promo"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Flyers section - side-by-side large images */}
      <section className="px-6 sm:px-10 lg:px-20 mt-12">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Give out flyers and make money!</h3>
          <ol className="list-decimal pl-6 text-black font-bold mb-6">
            <li>Download and print this A5 flyer.</li>
            <li>Add your coupon code.</li>
            <li>Give out the flyer.</li>
            <li>Make money from any sales you generate!</li>
          </ol>

          {/* Large side-by-side images with rounded corners and hover effects */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <img 
              src="/Screenshot 2025-08-12 155728.png" 
              alt="Flyer 1" 
              className="w-full sm:w-1/2 max-h-[720px] object-contain block rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer" 
            />
            <img 
              src="/Screenshot 2025-08-12 155755.png" 
              alt="Flyer 2" 
              className="w-full sm:w-1/2 max-h-[720px] object-contain block rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer" 
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 lg:px-20 mt-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Ready to join as an affiliate?</h3>
          <p className="mb-6">Sign up for free and start sharing your link to earn recurring commissions.</p>
          <a 
            href={AFFILIATE_BASE} 
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transform"
          >
            Sign Up Free
          </a>
        </div>
      </section>

      {/* Footer - intentionally darker blue than the rest of the page */}
      <footer className="mt-14 bg-blue-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div>
              <h4 className="text-xl font-bold underline underline-offset-4">aartec.com</h4>
              <p className="text-sm mt-1">imagination to reality</p>
              <div className="mt-4 text-sm">
                <p>Contact: imagine@aartec.com</p>
                <p>Phone: +447733003930</p>
                <p className="mt-2">205 Lavender Hill, London SW11 5TB, United Kingdom</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 uppercase tracking-wide">Social Networks</h5>
              <div className="flex gap-4 items-center">
                <a aria-label="facebook" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-blue-900 font-bold">f</a>
                <a aria-label="whatsapp" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-green-600 font-bold">W</a>
                <a aria-label="instagram" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-pink-600 font-bold">I</a>
                <a aria-label="linkedin" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-blue-700 font-bold">in</a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 uppercase tracking-wide">Browse</h5>
              <p>Masters of Business Creation</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}