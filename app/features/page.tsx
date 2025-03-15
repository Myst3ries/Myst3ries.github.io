import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Features Hero */}
      <section className="pt-32 pb-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Powerful Features to Guide Your Career Journey</h1>
          <p className="max-w-3xl mx-auto text-lg mb-10">
            Explore our comprehensive platform designed to help you discover and pursue your perfect career path
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CategoryTab label="All Features" active={true} />
            <CategoryTab label="AI Conversation" active={false} />
            <CategoryTab label="Career Recommendations" active={false} />
            <CategoryTab label="Roadmaps" active={false} />
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="💬"
              title="AI Conversation"
              description="Engage in a natural conversation with our AI that understands your unique profile and preferences."
            />
            <FeatureCard
              icon="🔍"
              title="Skills Assessment"
              description="Discover your strengths and areas for development through our comprehensive skills analysis."
            />
            <FeatureCard
              icon="📊"
              title="Personalized Recommendations"
              description="Receive career suggestions tailored to your skills, interests, and aspirations."
            />
            <FeatureCard
              icon="🗺️"
              title="Career Roadmaps"
              description="Follow detailed step-by-step guides to achieve your career goals."
            />
            <FeatureCard
              icon="💰"
              title="Income Insights"
              description="Understand potential earnings and growth opportunities for recommended career paths."
            />
            <FeatureCard
              icon="🔄"
              title="Save & Share"
              description="Save your results and share them with mentors, advisors, or friends for feedback."
            />
          </div>
        </div>
      </section>

      {/* Conversation Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Conversation Interface"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Intelligent AI Conversation</h2>
              <p className="text-gray-700 mb-8">
                Our conversation interface uses advanced AI to understand your unique profile and guide you through a
                personalized career exploration journey.
              </p>
              <div className="space-y-6">
                <FeatureItem
                  icon="✨"
                  title="Natural Conversation"
                  description="Engage in a flowing dialogue that feels like talking to a career counselor."
                />
                <FeatureItem
                  icon="🧠"
                  title="Adaptive Questioning"
                  description="Questions adapt based on your previous responses for deeper insights."
                />
                <FeatureItem
                  icon="🔄"
                  title="Real-time Processing"
                  description="Immediate response and analysis of your inputs for a seamless experience."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Your Career Options?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Start your personalized career journey today and discover the path that's right for you.
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

function CategoryTab({ label, active }: { label: string; active: boolean }) {
  return (
    <div
      className={`px-6 py-3 rounded-full cursor-pointer ${active ? "bg-amber-400 text-gray-900" : "bg-white/20 hover:bg-white/30"}`}
    >
      {label}
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="h-48 bg-blue-600 flex items-center justify-center text-white text-4xl">{icon}</div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

