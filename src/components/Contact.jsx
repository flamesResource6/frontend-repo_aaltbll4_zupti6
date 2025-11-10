import { useState } from 'react'

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6">
      {sent ? (
        <div className="text-center py-10">
          <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Thanks! I’ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input required className="mt-1 w-full rounded-xl border border-slate-200 p-3 focus:ring-2 focus:ring-indigo-500 outline-none" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" required className="mt-1 w-full rounded-xl border border-slate-200 p-3 focus:ring-2 focus:ring-indigo-500 outline-none" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea required rows={4} className="mt-1 w-full rounded-xl border border-slate-200 p-3 focus:ring-2 focus:ring-indigo-500 outline-none" value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} />
          </div>
          <button className="mt-2 px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow hover:shadow-lg transition-shadow">Send</button>
        </form>
      )}
    </div>
  )
}
