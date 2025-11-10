import { motion } from 'framer-motion'

const data = [
  {
    title: 'Interactive 3D Portfolio',
    desc: 'A playful 3D-first portfolio experience powered by Spline and React.',
    tags: ['React', 'Spline', 'Framer Motion'],
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Beautiful charts, clean typography, and accessible UI patterns.',
    tags: ['React', 'Tailwind', 'Radix'],
  },
  {
    title: 'AI Micro-App',
    desc: 'A tiny tool that uses LLM APIs to automate a daily workflow.',
    tags: ['FastAPI', 'LLM', 'MongoDB'],
  },
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {data.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">{p.title}</h3>
            <span className="text-xs text-slate-500">{i + 1}</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
            ))}
          </div>
          <button className="mt-5 text-sm font-semibold text-indigo-700 group-hover:underline">View project →</button>
        </motion.div>
      ))}
    </div>
  )
}
