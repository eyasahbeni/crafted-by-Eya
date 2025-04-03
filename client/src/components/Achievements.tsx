"use client"

import { useEffect, useState } from "react"
import { Award, CheckCircle, Cloud, FileText, Star, Sparkles, Medal, Zap } from "lucide-react"

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("achievements")
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

  const achievements = [
    {
      id: 1,
      title: "RBK Certification",
      organization: "ReBootKamp",
      date: "2023",
      description:
        "Full Stack Web Development certification after completing an intensive 16-week bootcamp focused on MERN stack technologies.",
      icon: "certificate",
      color: "pink",
    },
    {
      id: 2,
      title: "Advanced React & Redux",
      organization: "Udemy",
      date: "2022",
      description:
        "Completed comprehensive course on advanced React patterns, Redux state management, and modern frontend architecture.",
      icon: "award",
      color: "purple",
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "2022",
      description:
        "Certification validating cloud fluency and foundational AWS knowledge including key services, security, architecture, and compliance.",
      icon: "cloud",
      color: "yellow",
    },
    {
      id: 4,
      title: "Hackathon Winner",
      organization: "TechFest 2021",
      date: "2021",
      description:
        "First place in the annual hackathon for developing an innovative solution for remote education during the pandemic.",
      icon: "trophy",
      color: "pink",
    },
  ]

  // Function to render the appropriate icon
  const renderIcon = (iconName, color) => {
    const iconClass = `h-6 w-6 ${
      color === "pink" ? "text-pink-500" : color === "purple" ? "text-purple-500" : "text-yellow-500"
    }`

    switch (iconName) {
      case "certificate":
        return <CheckCircle className={iconClass} />
      case "award":
        return <FileText className={iconClass} />
      case "cloud":
        return <Cloud className={iconClass} />
      case "trophy":
        return <Star className={iconClass} />
      default:
        return <Award className={iconClass} />
    }
  }

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 opacity-10 rotate-12">
        <div className="w-16 h-16 border-2 border-pink-400 rounded-md transform rotate-45"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 -rotate-12">
        <div className="w-16 h-16 border-2 border-purple-400 rounded-full"></div>
      </div>

      {/* Animated blobs */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-pink-500/5 blur-[40px] top-[30%] right-[5%] animate-float"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/5 blur-[40px] bottom-[10%] left-[5%] animate-float animation-delay-2000"></div>
      <div className="absolute w-[150px] h-[150px] rounded-full bg-yellow-500/5 blur-[40px] top-[10%] left-[15%] animate-float animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
                Achievements
              </span>{" "}
              & Certificates
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
            Recognition of my skills, education, and accomplishments in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`relative group transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setActiveCard(achievement.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card background with gradient border */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${
                  achievement.color === "pink"
                    ? "from-pink-500 via-pink-400 to-pink-500"
                    : achievement.color === "purple"
                      ? "from-purple-500 via-purple-400 to-purple-500"
                      : "from-yellow-500 via-yellow-400 to-yellow-500"
                } opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300`}
              ></div>

              <div className="relative border border-gray-200 rounded-xl bg-white shadow-sm p-6 hover:shadow-md transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
                {/* Decorative corner accent */}
                <div
                  className={`absolute -top-10 -right-10 w-20 h-20 rounded-full ${
                    achievement.color === "pink"
                      ? "bg-pink-500/10"
                      : achievement.color === "purple"
                        ? "bg-purple-500/10"
                        : "bg-yellow-500/10"
                  }`}
                ></div>

                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                      achievement.color === "pink"
                        ? "from-pink-500/20 to-pink-500/5"
                        : achievement.color === "purple"
                          ? "from-purple-500/20 to-purple-500/5"
                          : "from-yellow-500/20 to-yellow-500/5"
                    } flex items-center justify-center flex-shrink-0 border border-gray-100 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {renderIcon(achievement.icon, achievement.color)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3
                        className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                          achievement.color === "pink"
                            ? "from-pink-600 to-pink-400"
                            : achievement.color === "purple"
                              ? "from-purple-600 to-purple-400"
                              : "from-yellow-600 to-yellow-400"
                        }`}
                      >
                        {achievement.title}
                      </h3>
                      <div className="flex items-center">
                        {activeCard === achievement.id && (
                          <Medal
                            className={`w-4 h-4 mr-1 ${
                              achievement.color === "pink"
                                ? "text-pink-500"
                                : achievement.color === "purple"
                                  ? "text-purple-500"
                                  : "text-yellow-500"
                            }`}
                          />
                        )}
                        <span className="text-sm text-gray-500 font-medium">{achievement.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 flex items-center">
                      <Zap className="w-3 h-3 mr-1 opacity-70" />
                      {achievement.organization}
                    </p>
                    <p className="mt-3 text-gray-700">{achievement.description}</p>

                    {/* View details link */}
                    <div
                      className={`mt-4 text-sm font-medium ${
                        achievement.color === "pink"
                          ? "text-pink-600"
                          : achievement.color === "purple"
                            ? "text-purple-600"
                            : "text-yellow-600"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center`}
                    >
                      <span>View certificate</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-yellow-400/30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

