"use client"

import { motion } from "framer-motion"
import { useState } from "react"

// Sample tech stack data - replace with your actual skills
const techStack = [
  { name: "Next.js", icon: "⚛️", category: "Frontend", level: 90, color: "blue" },
  { name: "React", icon: "⚛️", category: "Frontend", level: 95, color: "cyan" },
  { name: "Angular", icon: "🅰️", category: "Frontend", level: 80, color: "red" },
  { name: "JavaScript", icon: "📜", category: "Language", level: 95, color: "yellow" },
  { name: "TypeScript", icon: "📘", category: "Language", level: 85, color: "blue" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling", level: 90, color: "cyan" },
  { name: "SCSS", icon: "🎨", category: "Styling", level: 85, color: "pink" },
  { name: "Node.js", icon: "🟢", category: "Backend", level: 85, color: "green" },
  { name: "Express.js", icon: "🚂", category: "Backend", level: 80, color: "gray" },
  { name: "MongoDB", icon: "🍃", category: "Database", level: 75, color: "green" },
  { name: "PostgreSQL", icon: "🐘", category: "Database", level: 70, color: "blue" },
  { name: "Git", icon: "📊", category: "Tool", level: 85, color: "orange" },
  { name: "GitHub", icon: "🐙", category: "Tool", level: 90, color: "purple" },
  { name: "Docker", icon: "🐳", category: "Tool", level: 65, color: "blue" },
  { name: "Figma", icon: "🎨", category: "Tool", level: 75, color: "purple" },
]

// Group tech stack by category
const groupedTechStack = techStack.reduce(
  (acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  },
  {} as Record<string, typeof techStack>,
)

// Category icons
const categoryIcons = {
  Frontend: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="m18 16 4-4-4-4"></path>
      <path d="m6 8-4 4 4 4"></path>
      <path d="m14.5 4-5 16"></path>
    </svg>
  ),
  Backend: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
      <line x1="6" x2="6" y1="6" y2="6"></line>
      <line x1="6" x2="6" y1="18" y2="18"></line>
    </svg>
  ),
  Database: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  Styling: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 19c-4.3 0-7.8-3.4-7.8-7.7 0-2 .8-3.8 2-5.1.3-.3.5-.7.6-1.1.1-.4 0-.8-.3-1.1-.2-.2-.5-.3-.8-.3-.3 0-.6.1-.8.3C2.4 6.5 1 9.7 1 13c0 6.1 4.9 11 11 11s11-4.9 11-11c0-3.4-1.5-6.5-3.9-8.6-.3-.2-.6-.3-.9-.3-.3 0-.6.1-.8.3-.3.3-.4.7-.3 1.1.1.4.3.8.6 1.1 1.3 1.3 2 3.1 2 5.1.1 4.3-3.4 7.7-7.7 7.7z"></path>
      <path d="M12 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
  ),
  Language: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="m18 16 4-4-4-4"></path>
      <path d="m6 8-4 4 4 4"></path>
      <path d="m14.5 4-5 16"></path>
    </svg>
  ),
  Tool: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section id="tech-stack" className="py-20 px-4 md:px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30"></div>

      {/* Decorative elements */}
      <div className="blob w-[300px] h-[300px] bg-theme-teal/10 top-[10%] right-[5%]"></div>
      <div className="blob w-[250px] h-[250px] bg-theme-orange/10 bottom-[10%] left-[5%]"></div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
            <span>Skills & Technologies</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gradient">My Tech Stack</h2>
          <div className="mt-1 h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the technologies and tools I work with to build modern, responsive, and scalable applications.
          </p>
        </motion.div>

        <div className="w-full max-w-md mx-auto grid grid-cols-3 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${activeTab === "all" ? "bg-gradient-primary text-white" : "bg-muted text-muted-foreground"}`}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-4 py-2 text-sm font-medium ${activeTab === "frontend" ? "bg-gradient-secondary text-white" : "bg-muted text-muted-foreground"}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${activeTab === "backend" ? "bg-gradient-tertiary text-white" : "bg-muted text-muted-foreground"}`}
          >
            Backend
          </button>
        </div>

        {activeTab === "all" && (
          <div className="space-y-10">
            {Object.entries(groupedTechStack).map(([category, techs], categoryIndex) => (
              <div key={category}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center mb-6"
                >
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h3 className="text-xl font-semibold text-gradient">{category}</h3>
                  <div className="h-px flex-grow bg-border ml-4"></div>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="tech-card"
                    >
                      <div
                        className={`rounded-lg border bg-card text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-t-4 border-theme-${tech.color}`}
                      >
                        <div className="flex flex-col items-center justify-center p-6">
                          <span className="text-3xl mb-3">{tech.icon}</span>
                          <span className="font-medium text-center mb-3">{tech.name}</span>
                          <div className="w-full bg-muted rounded-full h-2 mt-2">
                            <div
                              className={`bg-theme-${tech.color} h-2 rounded-full`}
                              style={{ width: `${tech.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "frontend" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStack
              .filter((tech) => ["Frontend", "Styling"].includes(tech.category))
              .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="tech-card"
                >
                  <div
                    className={`rounded-lg border bg-card text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-t-4 border-theme-${tech.color}`}
                  >
                    <div className="flex flex-col items-center justify-center p-6">
                      <span className="text-3xl mb-3">{tech.icon}</span>
                      <span className="font-medium text-center mb-3">{tech.name}</span>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div
                          className={`bg-theme-${tech.color} h-2 rounded-full`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {activeTab === "backend" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStack
              .filter((tech) => ["Backend", "Database", "Language"].includes(tech.category))
              .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="tech-card"
                >
                  <div
                    className={`rounded-lg border bg-card text-card-foreground shadow-sm h-full hover:shadow-md transition-shadow border-t-4 border-theme-${tech.color}`}
                  >
                    <div className="flex flex-col items-center justify-center p-6">
                      <span className="text-3xl mb-3">{tech.icon}</span>
                      <span className="font-medium text-center mb-3">{tech.name}</span>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div
                          className={`bg-theme-${tech.color} h-2 rounded-full`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl bg-gradient-to-r from-theme-purple/10 to-theme-pink/10 border border-primary/20"
        >
          <div className="grid md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-2 text-gradient">Always Learning</h3>
              <p className="text-muted-foreground">
                I'm constantly expanding my skill set and exploring new technologies. Currently, I'm diving deeper into
                cloud services, serverless architecture, and AI/ML integration in web applications.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="text-4xl animate-float">🚀</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

