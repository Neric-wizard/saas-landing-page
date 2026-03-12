export default function Contact() {
  return (
    <section className="py-32 relative overflow-hidden">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 animate-gradient-xy"></div>
      
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 mb-6">
            📬 Let's Connect
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-white/90">
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          
          {/* Decorative top bar with gradient */}
          <div className="h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
          
          <div className="p-8 md:p-12">

            {/* Name + Email Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">
                Tell Me About Your Project
              </label>
              <textarea 
                rows={5}
                placeholder="What kind of website do you need? What's your timeline? Any specific features?"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            {/* Budget Range */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-white mb-2">
                Budget Range
              </label>
              <select className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all">
                <option className="bg-gray-800 text-white">Select estimated budget</option>
                <option className="bg-gray-800 text-white">$500 - $1,000</option>
                <option className="bg-gray-800 text-white">$1,000 - $2,500</option>
                <option className="bg-gray-800 text-white">$2,500 - $5,000</option>
                <option className="bg-gray-800 text-white">$5,000+</option>
              </select>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 text-gray-900 font-bold py-6 px-6 rounded-xl text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-[1.02]">
              🚀 Send Message
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-300 text-xl">✓</span>
                </div>
                <span className="text-white font-medium">Reply in 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-300 text-xl">✓</span>
                </div>
                <span className="text-white font-medium">Free consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-300 text-xl">✓</span>
                </div>
                <span className="text-white font-medium">No obligation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-white/80">
            📱 DM me on X: <a href="https://x.com/n3_neric" className="text-white font-bold hover:underline hover:text-yellow-300 transition">@n3_neric</a>
          </p>
        </div>
      </div>
    </section>
  );
}