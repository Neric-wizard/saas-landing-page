export default function Product() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header - Now with white text on dark bg */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Powerful Dashboard
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Everything you need to manage your SaaS in one beautiful interface
          </p>
        </div>

        {/* Main Content - Two columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Feature List with Icons */}
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Real-time Analytics</h3>
                <p className="text-purple-200">Track user behavior, revenue, and growth metrics as they happen</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Subscription Hub</h3>
                <p className="text-purple-200">Manage plans, upgrades, cancellations all in one place</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Team Access</h3>
                <p className="text-purple-200">Invite team members with custom roles and permissions</p>
              </div>
            </div>

            <button className="mt-8 bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-100 transition-all shadow-2xl">
              Explore Dashboard →
            </button>
          </div>

          {/* Right side - Dashboard Preview Card */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-white/20 px-6 py-4 flex items-center gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-white/70 ml-2 font-medium">Dashboard</span>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                
                {/* Stats Cards Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                    <p className="text-white/70 text-sm mb-1">Total Users</p>
                    <p className="text-4xl font-bold text-white">12.3K</p>
                    <p className="text-green-300 text-xs mt-2 flex items-center gap-1">
                      ↑ +12% this month
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                    <p className="text-white/70 text-sm mb-1">Revenue</p>
                    <p className="text-4xl font-bold text-white">$49.2K</p>
                    <p className="text-green-300 text-xs mt-2 flex items-center gap-1">
                      ↑ +8% this month
                    </p>
                  </div>
                </div>

                {/* Activity Chart */}
                <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-white font-medium">User Activity</p>
                    <p className="text-white/60 text-xs">Last 30 days</p>
                  </div>
                  <div className="flex items-end justify-between gap-1 h-28">
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg h-16"></div>
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg h-20"></div>
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg h-28"></div>
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg h-24"></div>
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg h-20"></div>
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg h-16"></div>
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t-lg h-12"></div>
                  </div>
                </div>

                {/* Recent Users */}
                <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                  <p className="text-white font-medium mb-3">Recent Users</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center text-white font-bold">
                        SC
                      </div>
                      <div>
                        <p className="text-white font-medium">Sarah Chen</p>
                        <p className="text-white/60 text-sm">sarah@techstart.com</p>
                      </div>
                      <span className="ml-auto bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center text-white font-bold">
                        MO
                      </div>
                      <div>
                        <p className="text-white font-medium">Michael Okonkwo</p>
                        <p className="text-white/60 text-sm">michael@scaleup.com</p>
                      </div>
                      <span className="ml-auto bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-white font-bold">
                        AD
                      </div>
                      <div>
                        <p className="text-white font-medium">Amina Diallo</p>
                        <p className="text-white/60 text-sm">amina@build.africa</p>
                      </div>
                      <span className="ml-auto bg-yellow-500/20 text-yellow-300 text-xs px-3 py-1 rounded-full border border-yellow-500/30">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}