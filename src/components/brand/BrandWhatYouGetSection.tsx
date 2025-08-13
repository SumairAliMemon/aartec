"use client";

export default function BrandWhatYouGetSection() {
  const services = [
    {
      title: "Hosting & Domain Setup",
      description: "We'll set up everything behind the scenes:",
      details: [
        "Hosting on SiteGround (or another provider you prefer)",
        "Domain name registration",
        "SSL certificate and secure setup"
      ],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      title: "Custom Website",
      description: "A fully responsive WordPress site, built around your brand",
      details: [
        "Looks great on phones, tablets, and desktops",
        "Designed for performance, clarity, and ease of use"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Website Security",
      description: "",
      details: [
        "Security plugins and firewall setup",
        "Regular backups and malware protection",
        "Ongoing monitoring to keep your site safe and running"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      title: "Basic SEO Setup",
      description: "",
      details: [
        "On-page SEO: headlines, images, metadata",
        "Sitemap creation and indexing with Google",
        "Google Analytics and Search Console integration"
      ],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Visual Branding",
      description: "",
      details: [
        "Custom logo design and complete brand kit",
        "Fonts, colors, and style guide for a cohesive look",
        "Matching visuals for your website and social channels"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Ongoing Support",
      description: "",
      details: [
        "6 to 12 months of tech support — your choice",
        "Plugin and theme updates",
        "Help when something breaks or needs a change"
      ],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Flexible Revisions",
      description: "",
      details: [
        "Unlimited updates for 6–12 months",
        "Quick turnaround",
        "Your site grows and adapts as your business evolves"
      ],
      color: "from-teal-500 to-teal-700"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-left">What You Get</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${service.color} p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white min-h-[280px] flex flex-col`}
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              {service.description && (
                <p className="text-white/90 mb-3 text-sm">{service.description}</p>
              )}
              <ul className="space-y-2 text-white/80 text-sm flex-grow">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
