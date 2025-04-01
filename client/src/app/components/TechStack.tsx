"use client"

import { useEffect, useState } from "react"

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ top: string; left: string; animation: string; delay: string }>>([])

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `float ${5 + Math.random() * 10}s infinite linear`,
      delay: `${Math.random() * 5}s`,
    }))
    setParticles(newParticles)

    const handleScroll = () => {
      const section = document.getElementById("tech-stack")
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

  const technologies = [
    { name: "Next.js", icon: "nextjs-icon" },
    { name: "TypeScript", icon: "typescript-icon" },
    { name: "Tailwind CSS", icon: "tailwind-icon" },
    { name: "Angular", icon: "angular-icon" },
    { name: "JavaScript", icon: "javascript-icon" },
    { name: "Express.js", icon: "express-icon" },
    { name: "React", icon: "react-icon" },
    { name: "Node.js", icon: "nodejs-icon" },
  ]

  return (
    <section
      id="tech-stack"
      className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated particles - client-side only */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-500/30"
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
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Stack</span>
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
            These are the technologies I work with to build modern, responsive, and scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-500 transform hover:scale-105 hover:shadow-glow ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-0.5">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  {/* This would be replaced with actual icons in a real implementation */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {tech.name.charAt(0)}
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-center">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

