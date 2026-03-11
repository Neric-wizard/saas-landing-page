export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-xl font-bold">SaaSify</h1>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:flex gap-6">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
          </div>

          {/* Mobile Menu Button (simple for now) */}
          <button className="md:hidden border p-2 rounded-lg">
            ☰
          </button>

          {/* Desktop Button - Hidden on mobile */}
          <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}