export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">SaaSify</h1>

        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </nav>
  );
}