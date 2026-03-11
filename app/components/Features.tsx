import { Zap, Shield, BarChart3 } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER - Made much bolder */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Everything you need to launch and grow your SaaS product.
          </p>
        </div>

        {/* FEATURE CARDS - Clearer headings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all">
            <Zap className="w-14 h-14 text-blue-600 mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Fast Performance
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our platform is optimized for speed so your product always runs smoothly.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all">
            <Shield className="w-14 h-14 text-blue-600 mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Secure Infrastructure
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Built with security in mind to protect your users and data at all times.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all">
            <BarChart3 className="w-14 h-14 text-blue-600 mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Analytics Dashboard
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Track performance, users, and growth with powerful analytics tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}