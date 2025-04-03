"use client"

import { useEffect, useState } from "react"
import { Briefcase, Code, Globe, Calendar, Building, Star, ArrowRight, ExternalLink, Sparkles } from "lucide-react"

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<
    Array<{ top: string; left: string; animation: string; delay: string; size: string; color: string }>
  >([])
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array.from({ length: 25 }).map(() => {
      const colors = ["pink", "purple", "yellow"]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const size = 1 + Math.random() * 2

      return {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `float ${5 + Math.random() * 10}s infinite linear`,
        delay: `${Math.random() * 5}s`,
        size: `${size}px`,
        color: randomColor,
      }
    })

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
      role: "Frontend Developer",
      company: "CodeLogic",
      location: "Tunisia",
      period: "Jan 2025 - Mar 2025",
      description:
        "Developed and maintained responsive web applications using React and TypeScript. Collaborated with the design team to implement UI/UX improvements. Participated in code reviews and agile development processes.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
      color: "pink",
    },
    {
      id: 2,
      role: "Frontend Developer (Part-time)",
      company: "Drivin Up",
      location: "Canada (Remote)",
      period: "Apr 7, 2025 - Jul 7, 2025",
      description:
        "Worked remotely with a Canadian team to develop user interfaces for a transportation application. Implemented responsive designs and interactive features. Collaborated in an international team environment.",
      technologies: ["React", "Redux", "SCSS", "Figma"],
      color: "purple",
    },
    {
      id: 3,
      role: "Frontend Developer (React Native)",
      company: "ABC",
      location: "Tunisia",
      period: "Apr 2025 - Jul 2025",
      description:
        "Developed mobile applications using React Native. Created cross-platform UI components and implemented app functionality. Worked on performance optimization and user experience improvements.",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
      color: "yellow",
    },
  ]

  return (
    <section id="experience" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 opacity-5 rotate-12">
        <div className="w-16 h-16 border-2 border-pink-400 rounded-md transform rotate-45"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-5 -rotate-12">
        <div className="w-16 h-16 border-2 border-purple-400 rounded-full"></div>
      </div>

      {/* Animated blobs */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-pink-500/5 blur-[40px] top-[30%] right-[5%] animate-float"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/5 blur-[40px] bottom-[10%] left-[5%] animate-float animation-delay-2000"></div>
      <div className="absolute w-[150px] h-[150px] rounded-full bg-yellow-500/5 blur-[40px] top-[10%] left-[15%] animate-float animation-delay-4000"></div>

      {/* Animated particles - client-side only */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              particle.color === "pink"
                ? "bg-pink-500/20"
                : particle.color === "purple"
                  ? "bg-purple-500/20"
                  : "bg-yellow-500/20"
            }`}
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animation: particle.animation,
              animationDelay: particle.delay,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
                Experience
              </span>
            </h2>

            {/* Decorative sparkles */}
            <div className="absolute -top-6 -right-6 opacity-70 animate-pulse">
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="absolute -bottom-2 -left-6 opacity-70 animate-pulse animation-delay-2000">
              <Sparkles className="w-4 h-4 text-pink-400" />
            </div>
          </div>

          <div
            className={`h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 mx-auto mb-6 transition-all duration-700 delay-200 transform ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            My professional journey and work history in the tech industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-yellow-400 opacity-30"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`mb-16 relative transition-all duration-1000 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
                onMouseEnter={() => setActiveCard(experience.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-4 -translate-x-1/2 top-10 z-20">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                      experience.color === "pink"
                        ? "from-pink-500 to-pink-600"
                        : experience.color === "purple"
                          ? "from-purple-500 to-purple-600"
                          : "from-yellow-500 to-yellow-600"
                    } flex items-center justify-center shadow-md`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>

                  {/* Pulse animation ring */}
                  <div
                    className={`absolute inset-0 rounded-full ${
                      experience.color === "pink"
                        ? "bg-pink-500"
                        : experience.color === "purple"
                          ? "bg-purple-500"
                          : "bg-yellow-500"
                    } opacity-30 animate-ping-slow`}
                  ></div>
                </div>

                {/* Date badge */}
                <div
                  className={`absolute left-0 top-10 -translate-y-1/2 -translate-x-[calc(100%+16px)] bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200 text-xs font-medium ${
                    experience.color === "pink"
                      ? "text-pink-600"
                      : experience.color === "purple"
                        ? "text-purple-600"
                        : "text-yellow-600"
                  } hidden md:flex items-center`}
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {experience.period}
                </div>

                {/* Content card with offset from timeline */}
                <div className="ml-12 relative group">
                  {/* Card background with gradient border on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl ${
                      activeCard === experience.id
                        ? `bg-gradient-to-br ${
                            experience.color === "pink"
                              ? "from-pink-500 via-pink-400 to-pink-500"
                              : experience.color === "purple"
                                ? "from-purple-500 via-purple-400 to-purple-500"
                                : "from-yellow-500 via-yellow-400 to-yellow-500"
                          } opacity-[0.03]`
                        : ""
                    } transition-opacity duration-300`}
                  ></div>

                  <div className="border border-gray-200 rounded-xl bg-white shadow-sm p-6 hover:shadow-md transition-all duration-500 transform hover:scale-[1.01] overflow-hidden">
                    {/* Decorative corner accent */}
                    <div
                      className={`absolute -top-10 -right-10 w-20 h-20 rounded-full ${
                        experience.color === "pink"
                          ? "bg-pink-500/10"
                          : experience.color === "purple"
                            ? "bg-purple-500/10"
                            : "bg-yellow-500/10"
                      }`}
                    ></div>

                    {/* Company logo placeholder */}
                    <div
                      className={`absolute top-6 right-6 w-12 h-12 rounded-lg bg-gradient-to-br ${
                        experience.color === "pink"
                          ? "from-pink-500/20 to-pink-500/5"
                          : experience.color === "purple"
                            ? "from-purple-500/20 to-purple-500/5"
                            : "from-yellow-500/20 to-yellow-500/5"
                      } flex items-center justify-center border border-gray-100`}
                    >
                      <span className="text-lg font-bold text-gray-700">{experience.company.charAt(0)}</span>
                    </div>

                    <div className="mb-6 pr-16">
                      <h3
                        className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                          experience.color === "pink"
                            ? "from-pink-600 to-pink-400"
                            : experience.color === "purple"
                              ? "from-purple-600 to-purple-400"
                              : "from-yellow-600 to-yellow-400"
                        } flex items-center`}
                      >
                        <Briefcase className="w-5 h-5 mr-2 text-gray-700" />
                        {experience.role}
                      </h3>

                      <div className="flex flex-wrap items-center mt-2 gap-x-4 gap-y-2">
                        <p className="text-gray-700 text-sm flex items-center">
                          <Building className="w-4 h-4 mr-1 text-gray-500" />
                          <span className="font-medium">{experience.company}</span>
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <Globe className="w-4 h-4 mr-1 text-gray-500" />
                          {experience.location}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center md:hidden">
                          <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                          {experience.period}
                        </p>
                      </div>
                    </div>

                    {/* Description with styled quote marks */}
                    <div className="relative mb-6 pl-4 border-l-2 border-gray-200">
                      <div className="absolute -top-2 -left-2 text-4xl text-gray-200">"</div>
                      <p className="text-gray-700 relative z-10">{experience.description}</p>
                      <div className="absolute -bottom-4 -right-2 text-4xl text-gray-200">"</div>
                    </div>

                    {/* Technologies with animated hover */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${
                            experience.color === "pink"
                              ? "from-pink-500/5 to-pink-500/10 hover:from-pink-500/10 hover:to-pink-500/20"
                              : experience.color === "purple"
                                ? "from-purple-500/5 to-purple-500/10 hover:from-purple-500/10 hover:to-purple-500/20"
                                : "from-yellow-500/5 to-yellow-500/10 hover:from-yellow-500/10 hover:to-yellow-500/20"
                          } text-gray-700 border border-gray-200 flex items-center transition-all duration-300 hover:scale-105`}
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          <Code className="w-3 h-3 mr-1 text-gray-500" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View more link that appears on hover */}
                    <div
                      className={`mt-4 text-sm font-medium ${
                        experience.color === "pink"
                          ? "text-pink-600"
                          : experience.color === "purple"
                            ? "text-purple-600"
                            : "text-yellow-600"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center`}
                    >
                      <span>View details</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>

                  {/* Connecting arrow from timeline to card */}
                  <div className="absolute left-0 top-10 -translate-x-[calc(100%+4px)] -translate-y-1/2 hidden md:block">
                    <ArrowRight
                      className={`w-4 h-4 ${
                        experience.color === "pink"
                          ? "text-pink-500"
                          : experience.color === "purple"
                            ? "text-purple-500"
                            : "text-yellow-500"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Timeline end marker */}
            <div className="absolute left-4 -translate-x-1/2 bottom-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 flex items-center justify-center shadow-md">
              <Star className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-yellow-400/30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Experience

