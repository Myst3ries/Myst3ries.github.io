"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, User, Bot } from "lucide-react"

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI career guide. I'm here to help you discover career paths that align with your interests, skills, and aspirations. To get started, I'll ask you a series of questions about yourself. Let's begin! What are some of your hobbies and interests?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = getAIResponse(input, messages.length)
      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Chat header */}
      <header className="bg-white border-b p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-semibold text-blue-600">Career Compass AI Guide</h1>
        </div>
      </header>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] md:max-w-[70%] rounded-lg p-4 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white border rounded-bl-none"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    {message.role === "assistant" ? (
                      <Bot className="h-5 w-5 mr-2 text-blue-600" />
                    ) : (
                      <User className="h-5 w-5 mr-2 text-white" />
                    )}
                    <span className={`font-medium ${message.role === "user" ? "text-white" : "text-blue-600"}`}>
                      {message.role === "user" ? "You" : "Career Guide"}
                    </span>
                  </div>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] md:max-w-[70%] rounded-lg p-4 bg-white border rounded-bl-none">
                  <div className="flex items-center">
                    <Bot className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-medium text-blue-600">Career Guide</span>
                  </div>
                  <div className="mt-2 flex space-x-1">
                    <div
                      className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Chat input */}
      <div className="border-t bg-white p-4">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

// Helper function to simulate AI responses
function getAIResponse(userInput: string, messageCount: number): string {
  // This is a simple simulation - in a real app, you would call your AI API here
  const responses = [
    "Thanks for sharing! Could you tell me about your educational background and any skills you've developed?",
    "That's helpful information. What are some of your career goals or aspirations? Where do you see yourself in 5-10 years?",
    "Great! What's most important to you in a career? For example: work-life balance, income potential, creativity, helping others, etc.",
    "Based on what you've shared, I think these career paths might be a good fit for you:\n\n1. **UX/UI Designer**\n- Combines creativity with technical skills\n- Growing field with good income potential\n- Allows for both independent and team work\n\n2. **Data Analyst**\n- Leverages your analytical skills\n- High demand across industries\n- Can lead to advanced roles in data science\n\nWould you like more details about either of these paths?",
    "Here's a roadmap for becoming a UX/UI Designer:\n\n1. **Education**\n- Complete a degree or bootcamp in UX/UI design\n- Take courses in user research, visual design, and prototyping\n\n2. **Essential Skills**\n- Learn industry tools like Figma, Adobe XD, and Sketch\n- Develop understanding of user psychology and research methods\n\n3. **Building Experience**\n- Create a portfolio with personal projects\n- Consider freelance work or internships\n\n4. **Career Progression**\n- Junior Designer → Mid-level Designer → Senior Designer → Lead Designer\n\nDoes this path interest you?",
  ]

  // Return different responses based on conversation progress
  return responses[Math.min(messageCount - 1, responses.length - 1)]
}

interface Message {
  role: "user" | "assistant"
  content: string
}

