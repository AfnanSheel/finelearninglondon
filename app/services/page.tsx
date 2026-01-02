export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="mt-6 max-w-2xl text-gray-700 leading-relaxed">
        Flexible childcare and early learning support designed around your child
        and your family’s needs.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Early Years Childcare",
            desc: "Structured routines and play-based learning in a calm environment.",
          },
          {
            title: "Small Group Support",
            desc: "Focused support to build confidence, language and independence.",
          },
          {
            title: "Parent Communication",
            desc: "Clear updates, progress notes and guidance on next steps.",
          },
        ].map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border p-6 hover:shadow-sm transition"
          >
            <p className="text-lg font-semibold">{s.title}</p>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
