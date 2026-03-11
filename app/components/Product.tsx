export default function Product() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left side - Text */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Product Overview
            </span>
           <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
  Everything you need to{' '}
  <span className="text-blue-600">build, launch, and scale</span>
  {' '}your SaaS
</h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Control users, analytics, and subscriptions in one
              powerful interface designed to grow with your business.
              No more jumping between different tools.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Real-time analytics</span> — Track user behavior and revenue metrics
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Subscription management</span> — Handle plans, upgrades, and cancellations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Team collaboration</span> — Invite team members with role-based access
                </p>
              </div>
            </div>

            <button className="mt-10 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg">
              Explore Dashboard →
            </button>
          </div>

          {/* Right side - Dashboard Preview with REAL CONTENT */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* MacOS-style window controls */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-500 ml-2">Dashboard</span>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-blue-600 font-medium">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">12,345</p>
                    <p className="text-xs text-green-600 mt-1">↑ 12% this week</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <p className="text-sm text-purple-600 font-medium">Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">$49,283</p>
                    <p className="text-xs text-green-600 mt-1">↑ 8% this week</p>
                  </div>
                </div>

                {/* Activity Chart */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">User Activity</p>
                  <div className="flex items-end gap-2 h-24">
                    <div className="w-1/6 bg-blue-500 rounded-t-lg h-16"></div>
                    <div className="w-1/6 bg-blue-500 rounded-t-lg h-20"></div>
                    <div className="w-1/6 bg-blue-500 rounded-t-lg h-24"></div>
                    <div className="w-1/6 bg-blue-500 rounded-t-lg h-16"></div>
                    <div className="w-1/6 bg-blue-500 rounded-t-lg h-12"></div>
                    <div className="w-1/6 bg-blue-500 rounded-t-lg h-20"></div>
                    <div className="w-1/6 bg-blue-500 rounded-t-lg h-8"></div>
                  </div>
                </div>

                {/* Recent Activity List */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">Recent signups</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Sarah Chen</p>
                        <p className="text-xs text-gray-500">sarah@techstart.com</p>
                      </div>
                      <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Michael Okonkwo</p>
                        <p className="text-xs text-gray-500">michael@scaleup.com</p>
                      </div>
                      <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Amina Diallo</p>
                        <p className="text-xs text-gray-500">amina@build.africa</p>
                      </div>
                      <span className="ml-auto text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background blurs */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full -z-10 blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}