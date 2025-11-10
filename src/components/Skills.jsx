const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python'],
  Frontend: ['React', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['FastAPI', 'Node', 'MongoDB'],
  Tools: ['Git', 'Figma', 'Vite']
}

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5">
          <h3 className="font-semibold text-slate-900">{group}</h3>
          <ul className="mt-3 space-y-2">
            {items.map((s) => (
              <li key={s} className="text-sm text-slate-700">{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
