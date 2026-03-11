export default function Hero() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          Build, Launch, and Scale
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your SaaS Product
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          The complete platform for SaaS founders — from first line of code 
          to thousands of paying customers.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 text-lg">
            Get Started Free
          </button>

          <button className="border-2 border-gray-900 px-8 py-4 rounded-lg font-medium text-gray-900 hover:bg-gray-100 text-lg">
            Watch Demo →
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          No credit card required • 14-day free trial
        </p>

      </div>
    </section>
  );
}