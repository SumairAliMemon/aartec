"use client";
import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok
} from "react-icons/fa";


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

const helpFaqs = [
  {
    q: 'How does the affiliate program work?',
    a: `Sign up for our Affiliate Program for FREE and receive a unique link. For instance, a link for the affiliate "JohnSmith" might look like www.amiranzur.com?a=JohnSmith. You can link to any page on the Amir Anzur website by simply appending "?a=JohnSmith". For instance, www.amiranzur.com/books?a=JohnSmith.

Promote this link to your audience and it will leave a cookie on their browser. If they come back at any stage and buy, the link will automatically add your coupon "JohnSmith" at checkout and give them 5% discount. This then lets us know that "JohnSmith" is the affiliate and we can give a 20% affiliate commission.

Instead of the referral link you can also tell your followers to simply add "JohnSmith" as a coupon on check out and they get a 5% discount.

Anyone that uses your coupon code or affiliate link we track to you and ensure you get the credit for the sale.

Some services have a money-back-guarantee so as long as refunds are not requested we pay you 90 days after we get paid.

We want to pay as many affiliates as possible so that more people promote our website.`
  },
  {
    q: 'How do I qualify for this programme?',
    a: `This program is open to bloggers, publishers, and content creators with a qualifying website or mobile app. While the majority of individuals are eligible to participate, we do not accept adult or gambling sites, among other restricted categories.

You don't even have to have a website or social media – simply by telling someone about it on the phone or in person can get you affiliate commission.`
  },
  {
    q: 'What are some ideas to help me succeed as an affiliate?',
    a: `As an affiliate, promoting our products to your following, such as a podcast or blog, can earn you commissions.

Inviting Amir Anzur as a guest or promoting his content to your audience can lead to sales.
Even without a following, you can earn commissions by convincing influencers to join our program.
Be creative on how you promote this program

We value our partnerships with affiliates and offer various opportunities to earn commissions.`
  },
  {
    q: 'What services can I promote?',
    a: `All of them:

• Humans as a Service ($2,500/month)
• Experts as a Service
• Spotify for Education ($100/month)
• Publishing ($6,000/month)
• Masters of Business Creation (up to $1 million per deal)
• Investment opportunities`
  },
  {
    q: 'Where can I check my sales and commissions?',
    a: `You'll get access to your own affiliate dashboard to track clicks, sign-ups, commissions, and payouts.`
  },
  {
    q: 'How much can I earn?',
    a: `You earn 20% of everything your direct clients spend — for life. For example:

• Humans as a Service: $2,500/month → you earn $500/month as long as they stay.
• Publishing: $60,000/year → you earn $12,000/year.
• Masters of Business Creation: $400,000 one-time → you earn $80,000 upfront.

Plus, if you refer another affiliate, you earn Tier 2 commissions on their sales too.`
  },
  {
    q: 'How and when do I get paid?',
    a: `We pay commissions 90 days after we receive payment — provided there are no refunds or chargebacks. You can choose your payout method (bank transfer, PayPal, etc.)`
  },
  {
    q: 'What is Tier 2 commission?',
    a: `If someone joins as an affiliate through your link, they become your Tier 1 affiliate. You earn a smaller Tier 2 commission on every sale they generate — making it possible to build passive income from your network's effort too.`
  },
  {
    q: 'Do commissions expire?',
    a: `No — you earn for as long as the client keeps paying. That's true lifetime income.`
  },
  {
    q: 'How do I sign up for this programmes?',
    a: `Registration for this programme is free of charge, and you can easily sign up by accessing the signup page at the top of this page.

We also offer an Affiliates WhatsApp Group, where you can join and receive support or have any questions addressed.

You may access the group through the following link: https://chat.whatsapp.com/JMh1OUhAxKyEbkaJs3KxBH`
  }
]

const Disclosure = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-blue-100 overflow-hidden shadow-sm">
      <button
        className="flex w-full justify-between items-center px-6 py-4 text-left hover:bg-blue-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-black text-lg">{question}</span>
        <ChevronUpIcon className={`w-6 h-6 text-blue-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-700 leading-relaxed whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 -translate-y-12 translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 translate-y-8 -translate-x-8"></div>

      <div className="relative z-10">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-700">Join Our Affiliate Program</h3>
          </div>
          <p className="text-black font-bold">Your username is your Coupon Code</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="username" className="block text-xs font-semibold text-gray-700 mb-1">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="mt-0.5 w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <label htmlFor="agreeTerms" className="text-xs text-gray-700 leading-relaxed">
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
          >
            Create Account
          </button>

          <div className="text-center">
            <p className="text-xs text-gray-600">
              Already have an Account? <a href="#" className="text-blue-600 font-semibold hover:underline">Please Log-in</a>
            </p>
          </div>
        </form>
      </div>
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

      {/* Registration Form */}
      <section className="px-6 sm:px-10 lg:px-20 -mt-4 mb-10">
        <div className="max-w-2xl mx-auto">
          <RegistrationForm />
        </div>
      </section>

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
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-blue-100 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-700">Program Highlights</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Join for FREE and get your affiliate code embedded into your links.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Up to <strong>20%</strong> tier 1 commissions for direct referrals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>5%</strong> tier 2 commissions for referring influencers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Make up to <strong>USD 200,000</strong> recurring per sale (example-based).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Paid 90 days after payment clearance and no refund/chargeback.</span>
              </li>
            </ul>
          </div>
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-5 text-blue-700">How To Promote</h3>
            <p className="text-gray-700 mb-3">The easiest way to promote aartec.com is simple: use your network. If you know people who can afford the services we offer, you already have what matters most — trust.</p>
            <ul className="list-disc pl-6 text-black font-bold space-y-2 mb-4">
              <li>Leverage your existing relationships — trust converts best.</li>
              <li>Post updates on LinkedIn, Facebook, WhatsApp, Instagram.</li>
              <li>Appear on podcasts — introduce yourself as a cofounder.</li>
              <li>Host events and hand out flyers with your coupon code.</li>
            </ul>

            {/* Added promotional image */}
            <div className="mt-4">
              <img
                src="/Screenshot 2025-08-13 122145.png"
                alt="Promotional Strategy"
                className="w-full h-auto rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Two Ways to Earn</h3>
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

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Get Started Today</h3>
              <p className="text-lg font-bold text-center text-gray-800 mb-6">
                Now get out there. You sell. You earn. We build. Everyone wins.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {/* WhatsApp */}
                <a href="https://api.whatsapp.com/send?phone=447733003930" target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">WhatsApp</span>
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                </a>

                {/* Email */}
                <a href="mailto:imagine@aartec.com"
                  className="group relative flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">Email</span>
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-red-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/aartec/" target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedinIn />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">LinkedIn</span>
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-blue-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/people/Aartec/61561667166483/" target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                    <FaFacebookF />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">Facebook</span>
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/aartec1/#" target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                    <FaInstagram />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">Instagram</span>
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                </a>

                {/* Twitter/X */}
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                    <FaTwitter />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">X/Twitter</span>
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                </a>

                {/* YouTube */}
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                    <FaYoutube />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">YouTube</span>
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-red-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                </a>

                {/* TikTok */}
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300">
                    <FaTiktok />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-700">TikTok</span>
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
                </a>
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

      {/* Need Help Section */}
      <section className="px-6 sm:px-10 lg:px-20 mt-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-700">Need Help?</h2>

          <div className="space-y-4">
            {helpFaqs.map((faq, index) => (
              <Disclosure key={index} question={`${index + 1}. ${faq.q}`} answer={faq.a} />
            ))}
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
            {/* Brand Section */}
            <div>
              <h4 className="text-xl font-bold underline underline-offset-4">aartec.com</h4>
              <p className="text-sm mt-1">imagination to reality</p>
              <div className="mt-4 text-sm">
                <p>Contact: imagine@aartec.com</p>
                <p>Phone: +447733003930</p>
                <p className="mt-2">205 Lavender Hill, London SW11 5TB, United Kingdom</p>
              </div>
            </div>

            {/* Social Section */}
            <div>
              <h5 className="font-semibold mb-4 uppercase tracking-wide">Social Networks</h5>
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.facebook.com/people/Aartec/61561667166483/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-900 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=447733003930"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="whatsapp"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://www.instagram.com/aartec1/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-600 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/aartec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-700 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Browse Section */}
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
