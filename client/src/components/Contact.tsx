"use client"

import type React from "react"

import { useEffect, useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ top: string; left: string; animation: string; delay: string }>>([])

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array.from({ length: 15 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `float ${5 + Math.random() * 10}s infinite linear`,
      delay: `${Math.random() * 5}s`,
    }))
    setParticles(newParticles)

    const handleScroll = () => {
      const section = document.getElementById("contact")
      if (section) {
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated particles - client-side only */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-500/30"
            style={{
              top: particle.top,
              left: particle.left,
              animation: particle.animation,
              animationDelay: particle.delay,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Me</span>
          </h2>
          <div
            className={`h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 transition-all duration-700 delay-200 transform ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            className={`border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm p-6 transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-6">Fill out the form and I'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Location</h3>
                  <p className="text-gray-400">Your City, Country</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-gray-400">
                    <a href="mailto:your.email@example.com" className="hover:text-purple-400 transition-colors">
                      your.email@example.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-gray-400">
                    <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors">
                      +123 456 7890
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-medium text-lg mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="p-3 rounded-full border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

