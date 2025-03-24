"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-hero-pattern"></div>
      
      {/* Animated blobs */}
      <div className="blob w-[300px] h-[300px] bg-theme-purple/20 top-[20%] left-[15%] animate-float"></div>
      <div className="blob w-[250px] h-[250px] bg-theme-pink/20 bottom-[20%] right-[15%] animate-float animation-delay-2000"></div>
      <div className="blob w-[200px] h-[200px] bg-theme-blue/20 bottom-[30%] left-[20%] animate-float animation-delay-4000"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 left-20 w-64 h-64 border border-primary/20 rounded-full animate-rotate opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border border-theme-pink/20 rounded-full animate-rotate opacity-20"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl relative z-10"
      >
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
            <path d="M15 4V2"></path>
            <path d="M15 16v-2"></path>
            <path d="M8 9h2"></path>
            <path d="M20 9h2"></path>
            <path d="M17.7 11.7l1.5-1.5"></path>
            <path d="M15 9h0"></path>
            <path d="M2 12h2"></path>
            <path d="M8.3 20.4l-1.5-1.5"></path>
            <path d="M8.3 3.6l-1.5 1.5"></path>
            <path d="M20.4 16.7l-1.5 1.5"></path>
            <path d="M4.7 4.7l1.5 1.5"></path>
          </svg>
          <span>Full Stack Developer</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-gradient glow-text">Your Name</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          I build <span className="text-gradient-blue font-semibold">innovative</span> and 
          <span className="text-gradient-orange font-semibold"> beautiful</span> web applications 
          that solve real-world problems.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <Link href="#projects" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg text-white">
            View Projects 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
          <Link href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground animated-border">
            Contact Me
          </Link>
        </div>
        
        <div className="flex justify-center gap-4 pt-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
