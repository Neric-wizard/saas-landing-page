export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo - bright white */}
          <h1 className="text-2xl font-bold text-white">SaaSify</h1>

          {/* Desktop Menu - better contrast */}
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Testimonials</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white border border-gray-700 p-2 rounded-lg">
            ☰
          </button>

          {/* Desktop Button */}
          <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}