import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* How It Works Hero */}
      <section className="pt-32 pb-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">How Career Compass Works</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Our simple 4-step process helps you discover and plan your perfect career path through AI-powered guidance
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">The Career Discovery Process</h2>
          <div className="flex flex-wrap justify-between relative">
            {/* Process line */}
            <div className="hidden md:block absolute top-[50px] left-[60px] right-[60px] h-1 bg-blue-600 z-0"></div>

            <ProcessStep
              number="1"
              title="Start the Conversation"
              description="Begin your journey with our AI-powered career guide"
            />
            <ProcessStep
              number="2"
              title="Share Your Profile"
              description="Tell us about your interests, skills, and aspirations"
            />
            <ProcessStep
              number="3"
              title="Get Recommendations"
              description="Receive personalized career suggestions based on your profile"
            />
            <ProcessStep
              number="4"
              title="Explore Your Path"
              description="Review detailed roadmaps for each suggested career"
            />
          </div>
        </div>
      </section>

      {/* Step Details */}
      <section>
        {/* Step 1 */}
        <div className="py-16 bg-white">
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
                <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">Step 1</span>
                <h2 className="text-3xl font-bold mb-4">Start the Conversation</h2>
                <p className="text-gray-700 mb-6">
                  Begin by creating your account and clicking the "Get Started" button. Our AI career guide will
                  introduce itself and explain how the process works. The conversation is designed to be natural and
                  engaging, just like chatting with a career counselor.
                </p>
                <div className="space-y-3">
                  <StepFeature text="User-friendly chat interface" />
                  <StepFeature text="Available on all devices" />
                  <StepFeature text="No time limit - take breaks and resume later" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Profile Sharing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">Step 2</span>
                <h2 className="text-3xl font-bold mb-4">Share Your Profile</h2>
                <p className="text-gray-700 mb-6">
                  The AI will guide you through a series of thoughtful questions about your interests, skills, values,
                  and career aspirations. You'll discuss your hobbies, past experiences, education, income expectations,
                  and what matters most to you in a career.
                </p>
                <div className="space-y-3">
                  <StepFeature text="Adaptive questioning based on your responses" />
                  <StepFeature text="Comprehensive skills assessment" />
                  <StepFeature text="Value and priority mapping" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Career Recommendations"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">Step 3</span>
                <h2 className="text-3xl font-bold mb-4">Get Recommendations</h2>
                <p className="text-gray-700 mb-6">
                  Based on your profile, our AI will generate personalized career recommendations that match your unique
                  combination of skills, interests, and goals. Each suggestion comes with detailed information about the
                  career path.
                </p>
                <div className="space-y-3">
                  <StepFeature text="Multiple career options to explore" />
                  <StepFeature text="Detailed job descriptions and requirements" />
                  <StepFeature text="Salary and growth potential insights" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Career Roadmaps"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">Step 4</span>
                <h2 className="text-3xl font-bold mb-4">Explore Your Path</h2>
                <p className="text-gray-700 mb-6">
                  For each recommended career, you'll receive a detailed roadmap outlining the steps needed to pursue
                  that path. This includes education requirements, skill development, certifications, and potential
                  entry points.
                </p>
                <div className="space-y-3">
                  <StepFeature text="Step-by-step career roadmaps" />
                  <StepFeature text="Education and training recommendations" />
                  <StepFeature text="Resources for further exploration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FaqItem
              question="How accurate are the career recommendations?"
              answer="Our AI uses advanced algorithms and data from career experts to provide highly relevant recommendations based on your unique profile. The more information you share, the more accurate the suggestions will be."
            />
            <FaqItem
              question="Is my data kept private?"
              answer="Yes, we take privacy seriously. Your data is encrypted and never shared with third parties without your explicit consent. We only use your information to provide personalized career guidance."
            />
            <FaqItem
              question="How long does the process take?"
              answer="The initial conversation typically takes 15-20 minutes, but you can take as much time as you need. You can also save your progress and return later to continue where you left off."
            />
            <FaqItem
              question="Can I use Career Compass if I'm already employed?"
              answer="Career Compass is valuable for anyone considering a career change, looking to advance in their current field, or simply exploring options for future growth."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Begin your personalized career exploration today and discover the professional path that's perfect for you.
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

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="w-full md:w-[22%] text-center mb-10 md:mb-0 z-10">
      <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StepFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <div className="w-6 h-6 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
        ✓
      </div>
      <p>{text}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
      <div className="p-5 font-medium text-lg flex justify-between items-center cursor-pointer">
        {question}
        <span className="text-blue-600 text-2xl">+</span>
      </div>
      <div className="px-5 pb-5 pt-0 border-t border-gray-100">
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

