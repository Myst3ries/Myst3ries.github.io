import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">Career Compass</div>
            <p className="text-gray-300 mb-4">
              AI-powered career guidance platform helping individuals discover their perfect professional path.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>career@woxsen.example</li>
              <li>+91 1234567890</li>
              <li>Woxsen Univeristy</li>
              <li>Hyderabad, Telangana 502345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Career Compass. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

