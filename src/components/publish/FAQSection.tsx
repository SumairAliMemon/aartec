"use client";

const faqs = [
  {
    question: "Why should I write a book?",
    answer:
      "Writing a book gives you the opportunity to impart your expertise, relate your experience, and become recognized as a leader in your field. It can also help you connect with a wider audience and make a lasting impact.",
  },
  {
    question: "How can my book help me in my career?",
    answer:
      "A book can position you as an expert, attract more clients, and create new career opportunities. It can also serve as a powerful networking tool, opening doors to speaking engagements, partnerships, and other professional growth.",
  },
  {
    question: "Will people know it is ghostwritten?",
    answer:
      "Typically, no. Ghostwriters work discreetly, ensuring the book reads as if you wrote it. The process is confidential so that readers will see it as your authentic work.",
  },
  {
    question: "Who will publish it?",
    answer:
      "aartec will handle the publishing process for you. Our team will assist with everything from editing and design to distribution, ensuring your book reaches the right audience.",
  },
  {
    question: "Can the book help me with my marketing strategy?",
    answer:
      "Absolutely. By expanding your brand's reach, attracting new readers, and offering insightful material for your marketing channels, a book can greatly enhance your marketing efforts. It also increases your field presence and credibility.",
  },
  {
    question: "How long will the process take?",
    answer:
      "The process of writing and publishing a book can take several months, depending on the complexity of the content and your availability. We will work with you to create a timeline that fits your schedule and ensures a high-quality final product.",
  },
  {
    question: "How does the ghostwriting work?",
    answer:
      "Ghostwriting involves you providing the ideas and information and a professional writer crafting the book in your voice and style. You will have regular input and review opportunities to ensure the book accurately represents your vision and message. Our team at Aartec will guide you through each step, making the process smooth and collaborative.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
        <div className="mb-6">
          <label htmlFor="faq-select" className="block mb-2 text-lg font-semibold text-blue-700">Select a question:</label>
          <select
            id="faq-select"
            className="w-full border border-blue-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 bg-white text-gray-900"
            style={{ color: '#111827' }}
            onChange={e => {
              const answerDiv = document.getElementById('faq-answer');
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
        <div id="faq-answer" className="bg-white border border-blue-100 rounded-xl p-6 text-gray-900 shadow-sm min-h-[80px] text-base leading-relaxed">
          {faqs[0].answer}
        </div>
      </div>
    </section>
  );
}
