import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <Section id="about" eyebrow="About" title="A bit about me">
        <p className="max-w-3xl text-slate-600 text-lg">
          I’m a creative developer focused on building interactive, modern experiences that blend delightful motion, crisp UI, and thoughtful code. I love crafting smooth flows, subtle micro-interactions, and visually engaging 3D moments.
        </p>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Selected Work">
        <Projects />
      </Section>

      <Section id="skills" eyebrow="Skills" title="My Toolkit">
        <Skills />
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s build something great">
        <Contact />
      </Section>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
