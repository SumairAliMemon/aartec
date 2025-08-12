'use client';

export default function MBCFAQSection() {
  const faqs = [
    {
      question: "Is this an academic degree?",
      answer: "No. This is a real-world business creation accelerator. You won't get a diploma — you'll get a business."
    },
    {
      question: "Who are the team members?",
      answer: "You'll get vetted, full-time staff (from aartec.com) across tech, content, operations, and marketing — assigned based on your needs."
    },
    {
      question: "What kind of business can I build?",
      answer: "Tech platforms, service-based startups, ecommerce brands, coaching empires, or niche SaaS — we've done them all."
    },
    {
      question: "Do I need to be in Islamabad?",
      answer: "Only the MBC ($100K) includes in-person residency. MBC Lite and Elite can be remote or hybrid."
    },
    {
      question: "What happens if I don't have an idea yet?",
      answer: "We'll help you refine or choose one based on your background and market needs."
    },
    {
      question: "Can I bring co-founders?",
      answer: "Yes, MBC and Elite tiers support teams. Ask us about co-founder structuring during the onboarding."
    },
    {
      question: "Is there an interview or application process?",
      answer: "Yes. We only accept serious applicants ready to commit time and capital. Apply now, and we'll schedule a discovery call."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="mb-6">
          <label htmlFor="mbc-faq-select" className="block mb-2 text-lg font-semibold text-blue-700">Select a question:</label>
          <select
            id="mbc-faq-select"
            className="w-full border border-blue-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 bg-white text-gray-900"
            style={{ color: '#111827' }}
            onChange={e => {
              const answerDiv = document.getElementById('mbc-faq-answer');
              if (answerDiv) {
                answerDiv.innerText = faqs[e.target.selectedIndex].answer;
              }
            }}
          >
            {faqs.map((faq, idx) => (
              <option key={idx} value={idx} className="text-gray-900" style={{ color: '#111827' }}>{faq.question}</option>
            ))}
          </select>
        </div>
        <div id="mbc-faq-answer" className="bg-white border border-blue-100 rounded-xl p-6 text-gray-900 shadow-sm min-h-[120px] text-base leading-relaxed">
          {faqs[0].answer}
        </div>
      </div>
    </section>
  );
}
