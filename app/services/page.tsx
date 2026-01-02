export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold text-[color:var(--brand-navy)]">Childcare Services</h1>
      <p className="mt-6 max-w-2xl text-gray-700 leading-relaxed">
        After-school childcare for ages 5–16 in a warm, safe setting. Sessions are structured around
        calm routines, supportive supervision and a friendly environment.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "After-school care",
            desc: "A safe and welcoming space for children to settle after the school day.",
          },
          {
            title: "Supportive routines",
            desc: "A calm structure that helps children feel comfortable and secure.",
          },
          {
            title: "Family-friendly communication",
            desc: "Simple, clear updates and quick responses via phone or email.",
          },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl border p-6 bg-white hover:shadow-sm transition">
            <p className="text-lg font-semibold text-[color:var(--brand-navy)]">{s.title}</p>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border bg-white p-8">
        <h2 className="text-xl font-semibold text-[color:var(--brand-navy)]">Session Times</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="rounded-xl border bg-slate-50 p-4">
            <p className="font-medium">Weekdays</p>
            <p className="mt-1">Monday, Tuesday, Thursday — 17:00–21:15</p>
          </div>
          <div className="rounded-xl border bg-slate-50 p-4">
            <p className="font-medium">Weekend</p>
            <p className="mt-1">Saturday — 09:00–18:15</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-700">
          Prices start from <span className="font-semibold">£12.95</span>.
        </p>
      </div>
    </main>
  );
}

