export default function Pricing() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-purple-500/10 text-purple-300 px-5 py-2 rounded-full text-sm font-semibold border border-purple-500/20 mb-6">
            💎 SIMPLE, TRANSPARENT PRICING
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Choose Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
              Success Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Flat rates, no hidden fees. Start building your dream project today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Starter Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
            
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10 transition-all duration-500"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Perfect for small projects</p>
              
              <div className="mb-8">
                <span className="text-6xl font-black text-white">$299</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "5-page website",
                  "Mobile responsive",
                  "Contact form",
                  "Basic SEO",
                  "2 revisions"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-5 rounded-xl border border-white/20 transition-all duration-300 group-hover:border-purple-500/50">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Card - Popular */}
          <div className="group relative bg-gradient-to-b from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl border-2 border-purple-500/50 p-8 hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/20">
            
          {/* Popular Badge - Fixed */}
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg border border-white/20">
    🔥 MOST POPULAR
  </span>
</div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl -z-10"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-2 mt-4">Pro</h3>
              <p className="text-purple-200 mb-6">For growing businesses</p>
              
              <div className="mb-8">
                <span className="text-6xl font-black text-white">$799</span>
                <span className="text-gray-300 ml-2">one-time</span>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "10-page website",
                  "Custom animations",
                  "Blog integration",
                  "Advanced SEO",
                  "Priority support",
                  "Unlimited revisions"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm">✓</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-5 rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-[1.02]">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
            
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-cyan-600/10 transition-all duration-500"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">Custom solutions</p>
              
              <div className="mb-8">
                <span className="text-6xl font-black text-white">Custom</span>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Unlimited pages",
                  "Custom features",
                  "Dedicated developer",
                  "24/7 phone support",
                  "SLA guarantee",
                  "Training included"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-5 rounded-xl border border-white/20 transition-all duration-300 group-hover:border-blue-500/50">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
            <span className="text-2xl">🛡️</span>
            <span className="text-gray-300">30-day money-back guarantee • Free revisions • No hidden fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}