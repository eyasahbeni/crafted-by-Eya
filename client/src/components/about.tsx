"use client"

import { useEffect, useState } from "react"
import {
  Award,
  BookOpen,
  Camera,
  Coffee,
  Compass,
  Cpu,
  FileText,
  Lightbulb,
  Mail,
  MessageSquare,
  Puzzle,
  Users,
  Code,
  Database,
  Palette,
  Zap,
  Monitor,
  ArrowRight,
} from "lucide-react"
const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeNode, setActiveNode] = useState<number | null>(null)
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about")
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

  // Animation for process flow
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % 7) // 0-6 (6 is reset state)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  // Web development process nodes
  const processNodes = [
    {
      name: "Planning",
      icon: <Lightbulb className="w-5 h-5" />,
      color: "pink",
      description: "Requirements gathering and project planning",
    },
    {
      name: "Design",
      icon: <Palette className="w-5 h-5" />,
      color: "purple",
      description: "UI/UX design and prototyping",
    },
    {
      name: "Frontend",
      icon: <Monitor className="w-5 h-5" />,
      color: "yellow",
      description: "Building the user interface with React",
    },
    {
      name: "Backend",
      icon: <Database className="w-5 h-5" />,
      color: "pink",
      description: "Server-side logic and API development",
    },
    {
      name: "Testing",
      icon: <Puzzle className="w-5 h-5" />,
      color: "purple",
      description: "Quality assurance and bug fixing",
    },
    {
      name: "Deployment",
      icon: <Zap className="w-5 h-5" />,
      color: "yellow",
      description: "Launching the application to production",
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>

      {/* Animated blobs */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-pink-500/10 blur-[40px] top-[30%] right-[5%] animate-float"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[40px] bottom-[10%] left-[5%] animate-float animation-delay-2000"></div>
      <div className="absolute w-[150px] h-[150px] rounded-full bg-yellow-500/10 blur-[40px] top-[10%] left-[15%] animate-float animation-delay-4000"></div>

      {/* Abstract geometric decorations */}
      <div className="absolute top-20 right-20 opacity-10 rotate-12">
        <div className="w-16 h-16 border-2 border-pink-400 rounded-md transform rotate-45"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 -rotate-12">
        <div className="w-16 h-16 border-2 border-purple-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
              Me
            </span>
          </h2>
          <div
            className={`h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 mx-auto transition-all duration-700 delay-200 transform ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Enhanced Web Development Lifecycle Visualization */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Central node - You */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div
                className={`w-28 h-28 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 p-1 shadow-lg ${
                  animationStep === 6 ? "animate-pulse-fast" : ""
                }`}
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-8 h-8 mx-auto mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400" />
                    <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[320px] h-[320px] border-2 border-dashed border-pink-500/20 rounded-full animate-spin-slow"></div>
              <div className="w-[340px] h-[340px] border border-purple-500/10 rounded-full animate-reverse-spin"></div>
            </div>

            {/* Process flow animation indicator */}
            {animationStep < 6 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <svg width="340" height="340" viewBox="0 0 340 340" className="absolute left-0 top-0">
                  <path
                    id="flowPath"
                    d={`M 170,50 
                       A 120 120 0 0 1 ${170 + 120 * Math.cos(Math.PI / 3)},${170 - 120 * Math.sin(Math.PI / 3)} 
                       A 120 120 0 0 1 ${170 + 120 * Math.cos((2 * Math.PI) / 3)},${170 + 120 * Math.sin(Math.PI / 3)} 
                       A 120 120 0 0 1 ${170},${170 + 120} 
                       A 120 120 0 0 1 ${170 - 120 * Math.cos((2 * Math.PI) / 3)},${170 + 120 * Math.sin(Math.PI / 3)} 
                       A 120 120 0 0 1 ${170 - 120 * Math.cos(Math.PI / 3)},${170 - 120 * Math.sin(Math.PI / 3)} 
                       A 120 120 0 0 1 ${170},${50}`}
                    fill="none"
                    stroke="url(#flowGradient)"
                    strokeWidth="4"
                    strokeDasharray="5,5"
                    className="opacity-0"
                  />
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#facc15" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Animated arrow that follows the path */}
                <div
                  className="absolute w-8 h-8 -ml-4 -mt-4 z-30 animate-pulse"
                  style={{
                    left: (() => {
                      const angle = (animationStep * (360 / 6) * Math.PI) / 180
                      return 170 + 120 * Math.cos(angle) + "px"
                    })(),
                    top: (() => {
                      const angle = (animationStep * (360 / 6) * Math.PI) / 180
                      return 170 - 120 * Math.sin(angle) + "px"
                    })(),
                  }}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      animationStep === 0
                        ? "bg-pink-500"
                        : animationStep === 1
                          ? "bg-purple-500"
                          : animationStep === 2
                            ? "bg-yellow-500"
                            : animationStep === 3
                              ? "bg-pink-500"
                              : animationStep === 4
                                ? "bg-purple-500"
                                : "bg-yellow-500"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Process nodes */}
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              {processNodes.map((node, index) => {
                // Calculate position on the circle
                const angle = (index * (360 / processNodes.length) * Math.PI) / 180
                const radius = 160 // Distance from center
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                const isActive = animationStep === index

                return (
                  <div
                    key={index}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10 ${
                      isActive ? "scale-125 z-20" : activeNode === index ? "scale-110" : "scale-100"
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                    onMouseEnter={() => setActiveNode(index)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div
                      className={`w-20 h-20 rounded-full shadow-lg ${
                        isActive ? "shadow-lg shadow-" + node.color + "-500/30" : ""
                      } ${
                        node.color === "pink"
                          ? "bg-gradient-to-br from-pink-500 to-pink-600"
                          : node.color === "purple"
                            ? "bg-gradient-to-br from-purple-500 to-purple-600"
                            : "bg-gradient-to-br from-yellow-500 to-yellow-600"
                      } p-0.5 transition-all duration-300`}
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative">
                        {/* Number badge */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background flex items-center justify-center border-2 border-current text-xs font-bold">
                          {index + 1}
                        </div>

                        <div className="text-center">
                          <div className={`${isActive ? "animate-bounce-small" : ""}`}>{node.icon}</div>
                          <span className="text-xs font-medium block mt-1">{node.name}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description tooltip - always visible when active in animation */}
                    {(activeNode === index || isActive) && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 p-2 bg-background/90 backdrop-blur-sm border border-pink-500/20 rounded-md shadow-lg text-xs z-30">
                        {node.description}
                      </div>
                    )}

                    {/* Connection line to center */}
                    <div
                      className={`absolute top-1/2 left-1/2 h-0.5 origin-left ${isActive ? "h-1 animate-pulse" : ""} ${
                        node.color === "pink"
                          ? "bg-gradient-to-r from-pink-500/50 to-transparent"
                          : node.color === "purple"
                            ? "bg-gradient-to-r from-purple-500/50 to-transparent"
                            : "bg-gradient-to-r from-yellow-500/50 to-transparent"
                      }`}
                      style={{
                        width: `${radius - 10}px`,
                        transform: `rotate(${angle + Math.PI}rad)`,
                      }}
                    ></div>
                  </div>
                )
              })}
            </div>

            {/* Lifecycle label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-center">
              <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
                Web Development Lifecycle
              </span>
            </div>

            {/* Current stage indicator */}
            {animationStep < 6 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-center">
                <span className="text-sm font-medium">
                  Current Stage:{" "}
                  <span className="font-bold">{animationStep < 6 ? processNodes[animationStep].name : "Complete"}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* About content - Centered */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
            Full Stack Developer & Creative Technologist
          </h3>

          <div className="relative mb-10 p-6 rounded-lg border border-pink-500/20 bg-pink-500/5">
            <p className="text-lg mb-4">
              I'm a passionate developer with expertise in building modern web applications. With a strong foundation in
              both frontend and backend technologies, I create seamless, user-friendly experiences that solve real-world
              problems.
            </p>
            <p className="text-lg">
              When I'm not coding, you'll find me exploring new technologies and creative design approaches. This
              balance between technical work and creative exploration inspires my innovative approach to development.
            </p>

            {/* Geometric decorations */}
            <div className="absolute -top-3 -left-3 opacity-20 rotate-12">
              <div className="w-8 h-8 border-2 border-pink-400 rounded-md transform rotate-45"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 opacity-20 -rotate-12">
              <div className="w-8 h-8 border-2 border-purple-400 rounded-md transform rotate-45"></div>
            </div>
          </div>

          {/* Skills section */}
          <div className="mb-10">
            <h4 className="text-xl font-semibold mb-5 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 mr-2 text-pink-500" />
              Professional Skills
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { skill: "Creativity", icon: <Lightbulb className="w-4 h-4" />, color: "pink" },
                { skill: "Communication", icon: <MessageSquare className="w-4 h-4" />, color: "purple" },
                { skill: "Problem Solving", icon: <Puzzle className="w-4 h-4" />, color: "yellow" },
                { skill: "Adaptability", icon: <Compass className="w-4 h-4" />, color: "pink" },
                { skill: "Team Collaboration", icon: <Users className="w-4 h-4" />, color: "purple" },
                { skill: "Critical Thinking", icon: <Cpu className="w-4 h-4" />, color: "yellow" },
                { skill: "Time Management", icon: <Award className="w-4 h-4" />, color: "pink" },
                { skill: "Leadership", icon: <Users className="w-4 h-4" />, color: "purple" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative p-3 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                    item.color === "pink"
                      ? "border-pink-500/20 bg-pink-500/5 hover:bg-pink-500/10"
                      : item.color === "purple"
                        ? "border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10"
                        : "border-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <span
                      className={`mb-2 ${
                        item.color === "pink"
                          ? "text-pink-500"
                          : item.color === "purple"
                            ? "text-purple-500"
                            : "text-yellow-500"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm">{item.skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests section */}
          <div className="mb-10">
            <h4 className="text-xl font-semibold mb-5 flex items-center justify-center">
              <Award className="w-5 h-5 mr-2 text-yellow-500" />
              Interests
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { interest: "Web Design", icon: <Cpu className="w-3 h-3 mr-1" />, color: "pink" },
                { interest: "UI/UX", icon: <Palette className="w-3 h-3 mr-1" />, color: "purple" },
                { interest: "Hiking", icon: <Compass className="w-3 h-3 mr-1" />, color: "yellow" },
                { interest: "Photography", icon: <Camera className="w-3 h-3 mr-1" />, color: "pink" },
                { interest: "Reading", icon: <BookOpen className="w-3 h-3 mr-1" />, color: "purple" },
                { interest: "Coffee", icon: <Coffee className="w-3 h-3 mr-1" />, color: "yellow" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
                    item.color === "pink"
                      ? "bg-pink-500/20 text-pink-700"
                      : item.color === "purple"
                        ? "bg-purple-500/20 text-purple-700"
                        : "bg-yellow-500/20 text-yellow-700"
                  }`}
                >
                  {item.icon}
                  {item.interest}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 hover:opacity-90 text-white font-medium transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/10 text-foreground font-medium transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

