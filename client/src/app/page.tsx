import Hero from "./components/Hero"
import About from "./components/about"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Achievements from "./Achievements"
import Experience from "./Experience"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />

    </main>
  )
}

