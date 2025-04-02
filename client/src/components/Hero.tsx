"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-dot-pattern"></div>

      {/* Animated blobs */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-pink-500/20 blur-[40px] top-[20%] left-[15%] animate-float"></div>
      <div className="absolute w-[250px] h-[250px] rounded-full bg-purple-500/20 blur-[40px] bottom-[20%] right-[15%] animate-float animation-delay-2000"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full bg-yellow-500/20 blur-[40px] bottom-[30%] left-[20%] animate-float animation-delay-4000"></div>

      {/* Animated circles */}
      <div className="absolute top-20 left-20 w-64 h-64 border border-pink-500/20 rounded-full animate-rotate opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border border-purple-500/20 rounded-full animate-rotate opacity-20"></div>

      {/* Dog paw prints scattered around - using static positioning to avoid hydration errors */}
      <div className="absolute top-[15%] left-[25%] opacity-20 rotate-12">
        <div className="w-8 h-8 flex flex-col items-center">
          <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
          <div className="flex justify-between w-full">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-[45%] right-[15%] opacity-20 rotate-45">
        <div className="w-8 h-8 flex flex-col items-center">
          <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
          <div className="flex justify-between w-full">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[25%] left-[35%] opacity-20 -rotate-12">
        <div className="w-8 h-8 flex flex-col items-center">
          <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
          <div className="flex justify-between w-full">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Flower elements scattered around - using static positioning */}
      <div className="absolute top-[30%] right-[30%] opacity-20">
        <div className="relative w-10 h-10">
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-0 left-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full bottom-0 left-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-0 top-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full right-0 top-3"></div>
          <div className="absolute w-4 h-4 bg-purple-400 rounded-full inset-3"></div>
        </div>
      </div>
      <div className="absolute bottom-[40%] right-[40%] opacity-20">
        <div className="relative w-10 h-10">
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-0 left-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full bottom-0 left-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-0 top-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full right-0 top-3"></div>
          <div className="absolute w-4 h-4 bg-purple-400 rounded-full inset-3"></div>
        </div>
      </div>
      <div className="absolute top-[60%] left-[10%] opacity-20">
        <div className="relative w-10 h-10">
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-0 left-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full bottom-0 left-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-0 top-3"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full right-0 top-3"></div>
          <div className="absolute w-4 h-4 bg-purple-400 rounded-full inset-3"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-left md:order-1 order-2"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/5 text-sm text-pink-500 mb-4">
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
              <path d="M10 16l-6-6 6-6"></path>
              <path d="M20 21V5a2 2 0 0 0-2-2h-7l2 3h2"></path>
            </svg>
            <span>Dog Lover & Full Stack Developer</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
               Eya Sahbeni you can call me yoyo 
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground">
            I build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600 font-semibold">
              creative
            </span>{" "}
            and
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 font-semibold">
              {" "}
              beautiful
            </span>{" "}
            web applications surrounded by
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 font-semibold">
              {" "}
              flowers
            </span>{" "}
            and dogs.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:opacity-90 transition-opacity shadow-lg text-white"
            >
              View Projects
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
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground relative overflow-hidden"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex gap-4 pt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm border border-pink-500/20 hover:bg-pink-500/10"
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
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm border border-purple-500/20 hover:bg-purple-500/10"
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Professional Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:order-2 order-1 mb-8 md:mb-0"
        >
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute w-full h-full rounded-full border-2 border-pink-500/20 animate-pulse"></div>
              <div className="absolute w-[90%] h-[90%] top-[5%] left-[5%] rounded-full border-2 border-purple-500/20 animate-pulse animation-delay-2000"></div>
              <div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] rounded-full border-2 border-yellow-500/20 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Flower decorations */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="relative w-10 h-10">
                <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-0 left-3"></div>
                <div className="absolute w-4 h-4 bg-yellow-400 rounded-full bottom-0 left-3"></div>
                <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-0 top-3"></div>
                <div className="absolute w-4 h-4 bg-yellow-400 rounded-full right-0 top-3"></div>
                <div className="absolute w-4 h-4 bg-purple-400 rounded-full inset-3"></div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 z-10">
              <div className="relative w-10 h-10">
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full top-0 left-3"></div>
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full bottom-0 left-3"></div>
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full left-0 top-3"></div>
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full right-0 top-3"></div>
                <div className="absolute w-4 h-4 bg-yellow-400 rounded-full inset-3"></div>
              </div>
            </div>

            {/* Professional image with gradient border */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                {/* Replace with your actual image */}
                <Image
  src="/DALL·E 2025-03-02 15.43.48 - A realistic digital painting of a mystical female character who is half wolf, half vampire, and half witch. She has long, flowing black hair and pierc.webp"
  alt="Mystical female character"
  width={300}
  height={300}
  className="w-full h-full object-cover"
/>
              </div>
            </div>

            {/* Dog ears */}
            <div className="absolute -top-8 -left-4 w-12 h-16 bg-pink-400 rounded-[50%] rotate-[-30deg] z-10"></div>
            <div className="absolute -top-8 -right-4 w-12 h-16 bg-pink-400 rounded-[50%] rotate-[30deg] z-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Custom dog paw scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex flex-col items-center">
            <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
            <div className="flex justify-between w-full">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

