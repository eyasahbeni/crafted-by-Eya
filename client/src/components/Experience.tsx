"use client"

import { useEffect, useState } from "react"

const Experience = () => {
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
      const section = document.getElementById("experience")
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

  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "TechSolutions Inc.",
      period: "Jun 2023 - Sep 2023",
      description:
        "Developed and maintained responsive web applications using React and TypeScript. Collaborated with the design team to implement UI/UX improvements. Participated in code reviews and agile development processes.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
    },
    {
      id: 2,
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "Jan 2022 - Present",
      description:
        "Designed and developed custom websites for small businesses and startups. Implemented e-commerce solutions, content management systems, and responsive designs. Provided ongoing maintenance and support.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 3,
      role: "Junior Backend Developer",
      company: "DataFlow Systems",
      period: "Oct 2022 - Mar 2023",
      description:
        "Built RESTful APIs and microservices using Node.js and Express. Implemented database schemas and optimized queries. Worked on authentication systems and data validation.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    },
  ]

  return (
    <section
      id="experience"
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
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Experience
            </span>
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
            My professional journey and work history in the tech industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-gray-800 pl-8 ml-4">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`mb-12 relative transition-all duration-1000 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 -left-11 top-1.5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                </div>

                <div className="border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-glow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      {experience.role}
                    </h3>
                    <span className="text-sm text-gray-500 mt-1 md:mt-0">{experience.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{experience.company}</p>
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

