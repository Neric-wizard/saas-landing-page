export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Choose the perfect plan for your business stage
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Starter Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
            <p className="text-sm text-gray-500 mt-2">Perfect for small projects</p>
            
            <div className="mt-6 mb-8">
              <span className="text-5xl font-bold text-gray-900">$29</span>
              <span className="text-gray-600 ml-2">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Up to <span className="font-semibold">1,000</span> users</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Basic analytics dashboard</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Email support (24h response)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <span className="text-gray-300 text-xl">✗</span>
                <span>Custom integrations</span>
              </li>
            </ul>

            <button className="w-full py-3 px-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Pro Card (Popular) */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 shadow-lg relative scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
            <p className="text-sm text-gray-500 mt-2">For growing businesses</p>
            
            <div className="mt-6 mb-8">
              <span className="text-5xl font-bold text-gray-900">$79</span>
              <span className="text-gray-600 ml-2">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Up to <span className="font-semibold">10,000</span> users</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Advanced analytics & reports</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Priority support (4h response)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Custom integrations</span>
              </li>
            </ul>

            <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
            <p className="text-sm text-gray-500 mt-2">For large organizations</p>
            
            <div className="mt-6 mb-8">
              <span className="text-5xl font-bold text-gray-900">$199</span>
              <span className="text-gray-600 ml-2">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span><span className="font-semibold">Unlimited</span> users</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Custom analytics & AI insights</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>24/7 phone & email support</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✓</span>
                <span>Dedicated account manager</span>
              </li>
            </ul>

            <button className="w-full py-3 px-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>

        </div>

        {/* Money-back guarantee */}
        <p className="text-center text-gray-600 mt-12">
          🎉 All plans include a 14-day free trial. No credit card required.
        </p>

      </div>
    </section>
  );
}