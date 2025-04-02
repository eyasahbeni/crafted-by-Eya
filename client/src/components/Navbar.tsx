"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Award, Briefcase, Code, FolderKanban, Mail, Sparkles } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Achievements", href: "#achievements", icon: <Award className="w-4 h-4" /> },
    { name: "Experience", href: "#experience", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Tech Stack", href: "#tech-stack", icon: <Code className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <FolderKanban className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-pink-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex-shrink-0 font-bold text-xl relative"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <Link
              href="#home"
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: isHovering ? [0, 15, -15, 0] : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Sparkles className="w-5 h-5 text-pink-400" />
              </motion.div>
              <motion.span
                initial={{ opacity: 1 }}
                whileHover={{
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0px 0px 0px rgba(255,255,255,0)",
                    "0px 0px 8px rgba(255,105,180,0.5)",
                    "0px 0px 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              >
                PixelMuse
              </motion.span>
            </Link>

            {/* Animated flower decoration */}
            <motion.div
              className="absolute -top-1 -right-6 opacity-70 scale-75"
              animate={{
                rotate: isHovering ? 360 : 0,
                scale: isHovering ? [0.75, 0.85, 0.75] : 0.75,
              }}
              transition={{
                rotate: { duration: 3, ease: "linear" },
                scale: { duration: 1, repeat: isHovering ? Number.POSITIVE_INFINITY : 0, repeatType: "reverse" },
              }}
            >
              <div className="relative w-6 h-6">
                <motion.div
                  className="absolute w-2 h-2 bg-pink-400 rounded-full top-0 left-2"
                  animate={{ scale: isHovering ? [1, 1.2, 1] : 1 }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                    delay: 0,
                  }}
                ></motion.div>
                <motion.div
                  className="absolute w-2 h-2 bg-pink-400 rounded-full bottom-0 left-2"
                  animate={{ scale: isHovering ? [1, 1.2, 1] : 1 }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                    delay: 0.2,
                  }}
                ></motion.div>
                <motion.div
                  className="absolute w-2 h-2 bg-pink-400 rounded-full left-0 top-2"
                  animate={{ scale: isHovering ? [1, 1.2, 1] : 1 }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                    delay: 0.4,
                  }}
                ></motion.div>
                <motion.div
                  className="absolute w-2 h-2 bg-pink-400 rounded-full right-0 top-2"
                  animate={{ scale: isHovering ? [1, 1.2, 1] : 1 }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                    delay: 0.6,
                  }}
                ></motion.div>
                <motion.div
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full inset-2"
                  animate={{
                    scale: isHovering ? [1, 1.3, 1] : 1,
                    backgroundColor: isHovering ? ["#facc15", "#ec4899", "#facc15"] : "#facc15",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group flex items-center gap-1.5 ${
                    activeSection === link.href.substring(1)
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400"
                      : "hover:text-pink-400"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: [0, -3, 0] }}
                    transition={{ duration: 0.5 }}
                    className={activeSection === link.href.substring(1) ? "text-pink-500" : ""}
                  >
                    {link.icon}
                  </motion.div>
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 transition-all duration-300 ${
                      activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-pink-400 hover:bg-pink-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-colors duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute block h-0.5 w-6 bg-current transform"
                  style={{ transformOrigin: "center" }}
                ></motion.span>
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute block h-0.5 w-6 bg-current transform top-[10px]"
                ></motion.span>
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute block h-0.5 w-6 bg-current transform top-[20px]"
                  style={{ transformOrigin: "center" }}
                ></motion.span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md shadow-lg border-b border-pink-500/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                className="absolute top-5 right-5 opacity-10"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                }}
              >
                <div className="w-8 h-8 flex flex-col items-center">
                  <div className="w-4 h-4 bg-pink-400 rounded-full mb-1"></div>
                  <div className="flex justify-between w-full">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-5 left-5 opacity-10"
                animate={{
                  rotate: [0, -360],
                  x: [0, 5, 0],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  x: { duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                }}
              >
                <div className="relative w-10 h-10">
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-0 left-3"></div>
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full bottom-0 left-3"></div>
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full left-0 top-3"></div>
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full right-0 top-3"></div>
                  <div className="absolute w-4 h-4 bg-purple-400 rounded-full inset-3"></div>
                </div>
              </motion.div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center gap-3 ${
                      activeSection === link.href.substring(1)
                        ? "bg-pink-500/10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400"
                        : "hover:text-pink-400 hover:bg-pink-500/5"
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`${activeSection === link.href.substring(1) ? "text-pink-500" : ""}`}
                    >
                      {link.icon}
                    </motion.div>
                    {link.name}

                    {activeSection === link.href.substring(1) && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} className="ml-auto">
                        <Sparkles className="w-4 h-4 text-pink-400" />
                      </motion.div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

