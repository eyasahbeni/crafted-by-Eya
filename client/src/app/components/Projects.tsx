"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Sample project data - you would replace this with your actual projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product listings, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-ecommerce-site.vercel.app",
    featured: true,
    color: "purple",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-app.vercel.app",
    featured: true,
    color: "blue",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts based on user location.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Angular", "SCSS", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://your-weather-app.vercel.app",
    featured: false,
    color: "teal",
  },
  {
    id: 4,
    title: "Personal Blog",
    description: "A modern blog built with Next.js featuring a custom CMS, dark mode, and responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/yourusername/blog",
    liveUrl: "https://your-blog.vercel.app",
    featured: false,
    color: "pink",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A creative portfolio website showcasing my projects and skills with interactive elements.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
    featured: true,
    color: "orange",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Socket.io", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://your-chat-app.vercel.app",
    featured: false,
    color: "cyan",
  },
]

// Technology filter options
const allTechnologies = [
  "All",
  "Next.js",
  "React",
  "Angular",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Firebase",
  "MongoDB",
]

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filteredProjects =
    filter === "All" ? projectsData : projectsData.filter((project) => project.technologies.includes(filter))

  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background"></div>

      {/* Decorative elements */}
      <div className="blob w-[300px] h-[300px] bg-theme-purple/10 top-[20%] left-[10%]"></div>
      <div className="blob w-[250px] h-[250px] bg-theme-blue/10 bottom-[30%] right-[10%]"></div>

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
            <span>My Recent Work</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gradient">Featured Projects</h2>
          <div className="mt-1 h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTechnologies.map((tech) => (
            <span
              key={tech}
              onClick={() => setFilter(tech)}
              className={`cursor-pointer text-sm py-1 px-3 rounded-full ${
                filter === tech
                  ? "bg-gradient-primary text-white"
                  : "bg-transparent border border-input text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`h-full flex flex-col overflow-hidden group rounded-lg border bg-card text-card-foreground shadow-sm ${project.featured ? "animated-border" : ""}`}
              >
                <div className="relative h-48 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-2 right-2 z-10 bg-gradient-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 mr-1"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        <path d="M13.5 1.5 12 3l1.5 1.5"></path>
                        <path d="M21 10.5 19.5 12l-1.5-1.5"></path>
                      </svg>
                      Featured
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-theme-${project.color}/20 mix-blend-multiply`}></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className={`border-t-4 border-theme-${project.color} p-4`}>
                  <h3 className={`text-lg font-semibold text-theme-${project.color}`}>{project.title}</h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-full bg-theme-${project.color}/10 text-theme-${project.color}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full border border-input">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="p-4 flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2 hover:bg-theme-${project.color}/10 hover:text-theme-${project.color}`}
                  >
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
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 py-2 bg-theme-${project.color} hover:bg-theme-${project.color}/90 text-white`}
                  >
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-secondary hover:opacity-90 transition-opacity text-white"
          >
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
              className="mr-2 h-5 w-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

