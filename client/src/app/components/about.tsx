"use client"

import { useEffect, useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Me</span>
          </h2>
          <div
            className={`h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto transition-all duration-700 delay-200 transform ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div
            className={`md:col-span-5 flex justify-center transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Hexagon shape with gradient border */}
              <div className="absolute inset-0 hexagon bg-gradient-to-br from-purple-500 to-cyan-500 p-1">
                <div className="w-full h-full hexagon-inner bg-gray-900 flex items-center justify-center">
                  {/* Profile image placeholder */}
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    YN
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`md:col-span-7 transition-all duration-1000 delay-500 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Full Stack Developer
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate developer with expertise in building modern web applications. With a strong foundation in
              both frontend and backend technologies, I create seamless, user-friendly experiences that solve real-world
              problems.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I graduated from RBK (ReBootKamp) where I honed my skills in JavaScript, React, and Node.js. I'm
              constantly learning and exploring new technologies to stay at the cutting edge of web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                download
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

