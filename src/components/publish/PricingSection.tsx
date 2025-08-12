export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Packages & Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect package for your publishing journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Package */}
          <div className="bg-white/90 border border-blue-100 rounded-3xl shadow-xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Standard Publishing Package</h3>
            <div className="text-3xl font-bold text-gray-900 mb-2">USD 6,500 <span className="text-base font-normal">/ One-time</span></div>
            <div className="text-gray-500 mb-2">or 3 Monthly Payments of 3,000</div>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>Ghostwriter to help bring your concepts to life</li>
              <li>Either ghost-written or taking your manuscript and putting it online</li>
              <li>Proofreading and editing</li>
              <li>Typesetting and formatting as per publishing standards</li>
              <li>Simple cover design (front, back & spine)</li>
              <li>3 versions: eBook, Paperback, Hardcover</li>
              <li>Book will be published on Amazon</li>
            </ul>
            <div className="flex flex-col gap-2 mt-auto">
              <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Buy Now (One Time)</button>
              <button className="border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">Buy Now (3 Months)</button>
            </div>
          </div>
          {/* Elite Package */}
          <div className="bg-white/90 border border-purple-100 rounded-3xl shadow-xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Elite Publishing Package</h3>
            <div className="text-3xl font-bold text-gray-900 mb-2">USD 9,500 <span className="text-base font-normal">/ One-time</span></div>
            <div className="text-gray-500 mb-2">or 3 Monthly Payments of 4,000</div>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>Ghostwriter to help bring your concepts to life</li>
              <li>Either ghost-written or taking your manuscript and putting it online</li>
              <li>Proofreading and editing</li>
              <li>Basic Website and Audio Book</li>
              <li>Typesetting and formatting as per publishing standards</li>
              <li>Simple cover design (front, back & spine)</li>
              <li>3 versions: eBook, Paperback, Hardcover</li>
              <li>Book will be published on Amazon</li>
            </ul>
            <div className="flex flex-col gap-2 mt-auto">
              <button className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">Buy Now (One Time)</button>
              <button className="border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition">Buy Now (3 Months)</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
