import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
              Interactive • Tech • Playful
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Hi, I’m Your Name
              </span>
              <br />
              <span className="text-slate-800">Creative Developer & Designer</span>
            </h1>
            <p className="mt-6 text-slate-600 text-lg">
              I build modern, delightful experiences with code, motion, and 3D.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#projects" className="px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow hover:shadow-lg transition-shadow">
                View Work
              </a>
              <a href="#contact" className="px-5 py-3 rounded-full font-semibold bg-white/80 border border-slate-200 backdrop-blur hover:bg-white">Contact</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
