import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Career Compass
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/features" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/chat">
                <Button className="bg-amber-400 hover:bg-amber-500 text-gray-900">Get Started</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

