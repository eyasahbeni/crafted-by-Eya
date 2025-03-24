import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-dots-pattern opacity-30"></div>

      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-gradient">YourName</span>
            <span className="hidden sm:inline text-muted-foreground">| Developer</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Building beautiful, functional web experiences
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-theme-purple transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-theme-blue transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-theme-pink transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground flex items-center">
            Made with <Heart className="h-3 w-3 mx-1 text-theme-pink" /> using Next.js and Tailwind CSS
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-4 justify-center md:justify-end mt-2">
            <Link href="#" className="text-xs hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-primary"></div>
    </footer>
  )
}

