export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">SaaSify</h3>
          <p className="text-gray-400 text-sm">
            Build better SaaS products faster.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Demo</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        © 2026 SaaSify. All rights reserved.
      </div>
    </footer>
  );
}