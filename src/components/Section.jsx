export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 bg-[radial-gradient(60%_50%_at_50%_0%,theme(colors.indigo.100),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{eyebrow}</p>
        )}
        {title && (
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
        )}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}
