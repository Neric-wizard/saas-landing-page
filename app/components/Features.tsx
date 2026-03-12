import { Zap, Shield, BarChart3, Rocket, Users, Clock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Lightning Fast",
      description: "Optimized performance that keeps your users engaged and converts better.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-400" />,
      title: "Rock Solid Security",
      description: "Enterprise-grade protection for your data and your users' privacy.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Analytics Ready",
      description: "Track everything that matters with built-in analytics and insights.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      title: "Fast Deployment",
      description: "Launch in days, not months. Vercel deployment with one click.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Team Ready",
      description: "Built for collaboration with role-based access and team features.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: "24/7 Support",
      description: "We're here when you need us. Fast responses, real solutions.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gray-900">
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block bg-purple-500/10 text-purple-300 px-5 py-2 rounded-full text-sm font-semibold border border-purple-500/20 mb-6">
            🚀 WHY CHOOSE US
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Powerful Features
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
              That Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to build, launch, and grow your SaaS product.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/10">
            <span className="text-purple-400 text-xl">✨</span>
            <span className="text-gray-300">All features included in every plan • No limits • No hidden costs</span>
          </div>
        </div>
      </div>
    </section>
  );
}