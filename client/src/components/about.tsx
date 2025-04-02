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
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>

      {/* Animated blobs */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-pink-500/10 blur-[40px] top-[30%] right-[5%] animate-float"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[40px] bottom-[10%] left-[5%] animate-float animation-delay-2000"></div>
      <div className="absolute w-[150px] h-[150px] rounded-full bg-yellow-500/10 blur-[40px] top-[10%] left-[15%] animate-float animation-delay-4000"></div>

      {/* Dog paw prints */}
      <div className="absolute top-20 right-20 opacity-10 rotate-12">
        <div className="w-8 h-8 flex flex-col items-center">
          <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
          <div className="flex justify-between w-full">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 -rotate-12">
        <div className="w-8 h-8 flex flex-col items-center">
          <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
          <div className="flex justify-between w-full">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div
            className={`md:col-span-5 flex justify-center transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Dog illustration instead of image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Flower decorations */}
              <div className="absolute -top-6 -left-6 z-10">
                <div className="relative w-12 h-12">
                  <div className="absolute w-5 h-5 bg-pink-400 rounded-full top-0 left-3.5"></div>
                  <div className="absolute w-5 h-5 bg-pink-400 rounded-full bottom-0 left-3.5"></div>
                  <div className="absolute w-5 h-5 bg-pink-400 rounded-full left-0 top-3.5"></div>
                  <div className="absolute w-5 h-5 bg-pink-400 rounded-full right-0 top-3.5"></div>
                  <div className="absolute w-5 h-5 bg-yellow-400 rounded-full inset-3.5"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 z-10">
                <div className="relative w-12 h-12">
                  <div className="absolute w-5 h-5 bg-purple-400 rounded-full top-0 left-3.5"></div>
                  <div className="absolute w-5 h-5 bg-purple-400 rounded-full bottom-0 left-3.5"></div>
                  <div className="absolute w-5 h-5 bg-purple-400 rounded-full left-0 top-3.5"></div>
                  <div className="absolute w-5 h-5 bg-purple-400 rounded-full right-0 top-3.5"></div>
                  <div className="absolute w-5 h-5 bg-yellow-400 rounded-full inset-3.5"></div>
                </div>
              </div>

              {/* Animated circles */}
              <div className="absolute inset-0 rounded-full border-2 border-pink-500/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-purple-500/20 animate-pulse animation-delay-2000"></div>
              <div className="absolute inset-8 rounded-full border-2 border-yellow-500/20 animate-pulse animation-delay-4000"></div>

              {/* Dog illustration */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden relative">
                  {/* Stylized dog illustration */}
                  <div className="relative w-48 h-48">
                    {/* Dog body */}
                    <div className="absolute w-40 h-40 bg-pink-400/50 rounded-full left-4 top-8"></div>

                    {/* Dog head */}
                    <div className="absolute w-32 h-32 bg-pink-400/70 rounded-full left-8 top-0"></div>

                    {/* Dog ears */}
                    <div className="absolute w-16 h-20 bg-pink-500/70 rounded-full -top-6 -left-2 rotate-[-30deg]"></div>
                    <div className="absolute w-16 h-20 bg-pink-500/70 rounded-full -top-6 right-0 rotate-[30deg]"></div>

                    {/* Dog eyes */}
                    <div className="absolute w-6 h-6 bg-purple-900 rounded-full left-14 top-10"></div>
                    <div className="absolute w-6 h-6 bg-purple-900 rounded-full right-14 top-10"></div>

                    {/* Dog nose */}
                    <div className="absolute w-8 h-5 bg-purple-800 rounded-full left-20 top-18"></div>

                    {/* Dog mouth */}
                    <div className="absolute w-12 h-1 bg-purple-800 rounded-full left-18 top-22"></div>

                    {/* Flower crown */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex">
                      <div className="relative w-8 h-8 mx-1">
                        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full top-0 left-2.5"></div>
                        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full bottom-0 left-2.5"></div>
                        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full left-0 top-2.5"></div>
                        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full right-0 top-2.5"></div>
                        <div className="absolute w-3 h-3 bg-purple-400 rounded-full inset-2.5"></div>
                      </div>
                      <div className="relative w-8 h-8 mx-1">
                        <div className="absolute w-3 h-3 bg-pink-400 rounded-full top-0 left-2.5"></div>
                        <div className="absolute w-3 h-3 bg-pink-400 rounded-full bottom-0 left-2.5"></div>
                        <div className="absolute w-3 h-3 bg-pink-400 rounded-full left-0 top-2.5"></div>
                        <div className="absolute w-3 h-3 bg-pink-400 rounded-full right-0 top-2.5"></div>
                        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full inset-2.5"></div>
                      </div>
                      <div className="relative w-8 h-8 mx-1">
                        <div className="absolute w-3 h-3 bg-purple-400 rounded-full top-0 left-2.5"></div>
                        <div className="absolute w-3 h-3 bg-purple-400 rounded-full bottom-0 left-2.5"></div>
                        <div className="absolute w-3 h-3 bg-purple-400 rounded-full left-0 top-2.5"></div>
                        <div className="absolute w-3 h-3 bg-purple-400 rounded-full right-0 top-2.5"></div>
                        <div className="absolute w-3 h-3 bg-pink-400 rounded-full inset-2.5"></div>
                      </div>
                    </div>
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
            <div className="relative">
              {/* Small flower decoration */}
              <div className="absolute -top-8 -right-8 opacity-30">
                <div className="relative w-10 h-10">
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-0 left-3"></div>
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full bottom-0 left-3"></div>
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-0 top-3"></div>
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full right-0 top-3"></div>
                  <div className="absolute w-4 h-4 bg-purple-400 rounded-full inset-3"></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
                Full Stack Developer & Dog Enthusiast
              </h3>

              <div className="relative mb-6 p-6 rounded-lg border border-pink-500/20 bg-pink-500/5">
                <p className="text-lg mb-4">
                  I'm a passionate developer with expertise in building modern web applications. With a strong
                  foundation in both frontend and backend technologies, I create seamless, user-friendly experiences
                  that solve real-world problems.
                </p>
                <p className="text-lg">
                  When I'm not coding, you'll find me surrounded by flowers and playing with dogs. This balance between
                  technical work and my love for nature inspires my creative approach to development.
                </p>

                {/* Paw print decoration */}
                <div className="absolute -bottom-3 -right-3 opacity-20 rotate-12">
                  <div className="w-8 h-8 flex flex-col items-center">
                    <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
                    <div className="flex justify-between w-full">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft skills section with flower-inspired design */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">My Soft Skills</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { skill: "Creativity", icon: "🎨" },
                    { skill: "Empathy", icon: "💖" },
                    { skill: "Communication", icon: "💬" },
                    { skill: "Problem Solving", icon: "🧩" },
                    { skill: "Adaptability", icon: "🌱" },
                    { skill: "Team Player", icon: "🤝" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative p-4 rounded-lg border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <span className="font-medium">{item.skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">My Interests</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { interest: "Dogs", color: "pink" },
                    { interest: "Flowers", color: "purple" },
                    { interest: "Hiking", color: "yellow" },
                    { interest: "Photography", color: "pink" },
                    { interest: "Reading", color: "purple" },
                    { interest: "Cooking", color: "yellow" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        item.color === "pink"
                          ? "bg-pink-500/20 text-pink-700"
                          : item.color === "purple"
                            ? "bg-purple-500/20 text-purple-700"
                            : "bg-yellow-500/20 text-yellow-700"
                      }`}
                    >
                      {item.interest}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 hover:opacity-90 text-white font-medium transition-all duration-300 transform hover:scale-105"
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
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/10 text-foreground font-medium transition-all duration-300"
                >
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

