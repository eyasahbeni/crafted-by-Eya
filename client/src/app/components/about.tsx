"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function About() {
  const [activeTab, setActiveTab] = useState("bio")

  return (
    <section id="about" className="py-20 px-4 md:px-6 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-dots-pattern"></div>
      
      {/* Decorative elements */}
      <div className="blob w-[300px] h-[300px] bg-theme-blue/10 top-[10%] right-[5%]"></div>
      <div className="blob w-[250px] h-[250px] bg-theme-purple/10 bottom-[10%] left-[5%]"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gradient">About Me</h2>
          <div className="mt-1 h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="w-full">
              <div className="flex w-full max-w-md mx-auto mb-8">
                <div className="grid w-full grid-cols-4">
                  <button 
                    onClick={() => setActiveTab("bio")} 
                    className={`px-3 py-2 text-sm font-medium rounded-l-md ${activeTab === "bio" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 inline-block">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Bio
                  </button>
                  <button 
                    onClick={() => setActiveTab("experience")} 
                    className={`px-3 py-2 text-sm font-medium ${activeTab === "experience" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 inline-block">
                      <path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.09.11.39.39 0 0 0-.06.09.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8z"></path>
                      <path d="M12 22V12"></path>
                      <path d="m2 8 10 4 10-4"></path>
                    </svg>
                    Experience
                  </button>
                  <button 
                    onClick={() => setActiveTab("education")} 
                    className={`px-3 py-2 text-sm font-medium ${activeTab === "education" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 inline-block">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    Education
                  </button>
                  <button 
                    onClick={() => setActiveTab("interests")} 
                    className={`px-3 py-2 text-sm font-medium rounded-r-md ${activeTab === "interests" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 inline-block">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    Interests
                  </button>
                </div>
              </div>
              
              <div className="mt-4">
                {activeTab === "bio" && (
                  <div className="space-y-4">
                    <p className="text-lg">
                      Hello! I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                      I graduated from RBK (Re:Coded Boot Camp) where I honed my skills in JavaScript, React, and Node.js.
                    </p>
                    <p className="text-lg">
                      My journey in tech started with a curiosity about how websites work, which led me to explore various 
                      programming languages and frameworks. I enjoy solving complex problems and creating intuitive, 
                      user-friendly applications.
                    </p>
                    <div className="pt-4">
                      <a href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-secondary hover:opacity-90 transition-opacity text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <path d="M12 18v-6"></path>
                          <path d="M8 18v-1"></path>
                          <path d="M16 18v-3"></path>
                        </svg>
                        Download Resume
                      </a>
                    </div>
                  </div>
                )}
                
                {activeTab === "experience" && (
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm animated-border p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">Senior Frontend Developer</h3>
                          <p className="text-theme-blue">TechCorp Inc.</p>
                        </div>
                        <div className="text-sm text-muted-foreground">2021 - Present</div>
                      </div>
                      <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Led the development of the company's flagship web application</li>
                        <li>Implemented responsive designs and improved performance by 40%</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </div>
                    
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">Web Developer</h3>
                          <p className="text-theme-purple">Digital Solutions LLC</p>
                        </div>
                        <div className="text-sm text-muted-foreground">2019 - 2021</div>
                      </div>
                      <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Developed and maintained client websites using React and Node.js</li>
                        <li>Collaborated with designers to implement pixel-perfect UIs</li>
                        <li>Integrated third-party APIs and services</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === "education" && (
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm animated-border p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">Full Stack Web Development</h3>
                          <p className="text-theme-pink">RBK (Re:Coded Boot Camp)</p>
                        </div>
                        <div className="text-sm text-muted-foreground">2019</div>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        Intensive 16-week bootcamp focused on JavaScript, React, Node.js, and modern web development practices.
                      </p>
                    </div>
                    
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">Bachelor of Science in Computer Science</h3>
                          <p className="text-theme-blue">University Name</p>
                        </div>
                        <div className="text-sm text-muted-foreground">2015 - 2019</div>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        Studied algorithms, data structures, software engineering principles, and computer networks.
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === "interests" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border bg-gradient-to-br from-theme-purple/10 to-theme-pink/10 border-none p-6 text-center">
                      <div className="text-4xl mb-2">🏃‍♂️</div>
                      <h3 className="font-medium">Fitness & Running</h3>
                    </div>
                    
                    <div className="rounded-lg border bg-gradient-to-br from-theme-blue/10 to-theme-cyan/10 border-none p-6 text-center">
                      <div className="text-4xl mb-2">📚</div>
                      <h3 className="font-medium">Reading</h3>
                    </div>
                    
                    <div className="rounded-lg border bg-gradient-to-br from-theme-orange/10 to-theme-yellow/10 border-none p-6 text-center">
                      <div className="text-4xl mb-2">🎮</div>
                      <h3 className="font-medium">Gaming</h3>
                    </div>
                    
                    <div className="rounded-lg border bg-gradient-to-br from-theme-teal/10 to-theme-cyan/10 border-none p-6 text-center">
                      <div className="text-4xl mb-2">✈️</div>
                      <h3 className="font-medium">Traveling</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-theme-purple opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-theme-pink opacity-60"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden animated-border glow">
                <Image 
                  src="/placeholder.svg?height=320&width=320" 
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-card px-4 py-2 rounded-full shadow-lg border border-primary/20 animate-float">
                <span className="text-sm font-medium text-gradient">5+ Years Experience</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card px-4 py-2 rounded-full shadow-lg border border-primary/20 animate-float animation-delay-1000">
                <span className="text-sm font-medium text-gradient-blue">Problem Solver</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
