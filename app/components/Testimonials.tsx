export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, TechFlow",
      content: "Neric built our entire landing page in 3 days. Fast, professional, and exactly what we needed. Will definitely work with him again.",
      rating: 5,
      initials: "SJ",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Michael Chen",
      role: "CEO, ScaleUp",
      content: "The dashboard he built for us handles thousands of users daily. Clean code, great communication, delivered early.",
      rating: 5,
      initials: "MC",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Amina Diallo",
      role: "CTO, BuildAfrica",
      content: "Understood our requirements immediately. The pricing section alone increased our conversions by 30%.",
      rating: 5,
      initials: "AD",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "David Okafor",
      role: "Product Lead, PayStack",
      content: "One of the most responsive developers I've worked with. Fixed issues before I even noticed them.",
      rating: 5,
      initials: "DO",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gray-900">
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-purple-500/10 text-purple-300 px-5 py-2 rounded-full text-sm font-semibold border border-purple-500/20 mb-6">
            💬 CLIENT LOVE
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Trusted by
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
              Amazing Founders
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take my word for it — hear from people I've worked with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  "{t.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{t.name}</h4>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">24h</div>
            <div className="text-gray-400">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}