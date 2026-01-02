export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border bg-gradient-to-br from-slate-50 to-white p-10 md:p-14">
            <p className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-navy)]">
              Tutoring & Childcare • Ages 5+
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--brand-navy)]">
              Fine Learning London Limited
            </h1>

            <p className="mt-5 text-lg md:text-xl max-w-2xl leading-relaxed text-gray-700">
              Supportive tutoring and childcare in a calm learning environment — helping children build
              confidence, consistency and strong foundations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex justify-center rounded-xl bg-[color:var(--brand-navy)] px-6 py-3 text-white font-semibold hover:opacity-95 transition"
              >
                Enquire / Book a Session
              </a>
              <a
                href="/services"
                className="inline-flex justify-center rounded-xl border px-6 py-3 font-semibold text-[color:var(--brand-navy)] hover:bg-gray-50 transition"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border bg-white p-6">
                <p className="font-semibold text-[color:var(--brand-navy)]">Ages</p>
                <p className="mt-2 text-sm text-gray-600">5+ years</p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <p className="font-semibold text-[color:var(--brand-navy)]">Prices</p>
                <p className="mt-2 text-sm text-gray-600">
                  Sessions start from <span className="font-semibold">£12.95</span>
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <p className="font-semibold text-[color:var(--brand-navy)]">Location</p>
                <p className="mt-2 text-sm text-gray-600">
                  628–630 Green Lanes, London N8 0SD
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border bg-white p-6">
              <p className="font-semibold text-[color:var(--brand-navy)]">Session Times</p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="rounded-xl bg-slate-50 p-4 border">
                  <p className="font-medium">Weekdays</p>
                  <p className="mt-1">Mon, Tue, Thu — 17:00–21:15</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border">
                  <p className="font-medium">Weekends</p>
                  <p className="mt-1">Saturday — 09:00–18:15</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                (No social media — contact us by phone or email.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Value */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Supportive environment",
              desc: "A calm approach that helps children feel comfortable and focused.",
            },
            {
              title: "Reliable scheduling",
              desc: "Clear time slots across weekdays and Saturday sessions.",
            },
            {
              title: "Parent-friendly communication",
              desc: "Simple updates and fast responses via email or phone.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border p-6">
              <p className="text-lg font-semibold text-[color:var(--brand-navy)]">{item.title}</p>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Fine Learning London Limited.</p>
          <p className="text-gray-500">No social media • Contact via phone or email</p>
        </div>
      </footer>
    </main>
  );
}

