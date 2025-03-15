import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center text-white">
        <div
          className="absolute inset-0 bg-black/50 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1200&width=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Perfect Career Path</h1>
            <p className="text-lg mb-8">
              Our AI-powered platform guides you through personalized career exploration based on your unique skills,
              interests, and aspirations.
            </p>
            <Link href="/chat">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-6 text-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Career Compass</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="AI"
              title="AI-Powered Guidance"
              description="Our intelligent conversation system understands your unique profile and provides tailored career recommendations."
            />
            <FeatureCard
              icon="🗺️"
              title="Detailed Roadmaps"
              description="Get step-by-step guidance on how to pursue each suggested career path, including education and skill requirements."
            />
            <FeatureCard
              icon="📊"
              title="Personalized Insights"
              description="Discover careers that truly match your values, aspirations, and income expectations."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-wrap justify-between">
            <StepCard
              number="1"
              title="Start the Conversation"
              description="Begin your journey with our AI-powered career guide."
            />
            <StepCard
              number="2"
              title="Share Your Profile"
              description="Tell us about your interests, skills, and aspirations."
            />
            <StepCard
              number="3"
              title="Get Recommendations"
              description="Receive personalized career suggestions based on your profile."
            />
            <StepCard
              number="4"
              title="Explore Your Path"
              description="Review detailed roadmaps for each suggested career."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Career Compass helped me discover career options I never would have considered. The AI conversation felt natural and the recommendations were spot on!"
              author="Karan, Recent Graduate"
            />
            <TestimonialCard
              quote="I was feeling stuck in my career path. This platform provided me with realistic alternatives that matched my experience and aspirations."
              author="Arjun, Career Changer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Career?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Start your personalized career exploration journey today and discover professional paths aligned with who
            you are.
          </p>
          <Link href="/chat">
            <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-6 text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="w-full md:w-[22%] text-center mb-8 md:mb-0 relative">
      <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
      <p className="italic mb-6">{quote}</p>
      <p className="font-medium">- {author}</p>
    </div>
  )
}

