export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Founders
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            See what other SaaS builders say about our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 text-yellow-400 mb-4">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "This platform helped us launch 3x faster than building from scratch. 
              The components are well-built and the documentation is excellent."
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="font-semibold text-gray-900">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Founder, TechFlow</p>
            </div>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 text-yellow-400 mb-4">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "The analytics dashboard alone saved us months of development work. 
              Clean code, great performance, and the team is super responsive."
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="font-semibold text-gray-900">Michael Chen</p>
              <p className="text-sm text-gray-500">CEO, LaunchPad</p>
            </div>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 text-yellow-400 mb-4">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "We migrated our entire infrastructure and the transition was seamless. 
              Worth every penny for the time it saved our engineering team."
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="font-semibold text-gray-900">Alex Rivera</p>
              <p className="text-sm text-gray-500">CTO, ScaleUp</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}