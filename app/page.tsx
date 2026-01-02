export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-orange-50 via-white to-sky-50 p-10 md:p-14">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />

            <p className="relative inline-flex items-center rounded-full border bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-navy)]">
              After-school childcare • Ages 5–16 • London
            </p>

            <h1 className="relative mt-6 text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--brand-navy)]">
              Fine Learning London Limited
            </h1>

            <p className="relative mt-5 text-lg md:text-xl max-w-2xl leading-relaxed text-gray-700">
              A warm, safe and welcoming after-school childcare setting where children can unwind,
              feel supported, and enjoy a positive routine — with caring supervision and a calm environment.
            </p>

            <div className="relative mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex justify-center rounded-xl bg-[color:var(--brand-navy)] px-6 py-3 text-white font-semibold hover:opacity-95 transition"
              >
                Enquire / Book a Place
              </a>
              <a
                href="#times"
                className="inline-flex justify-center rounded-xl border px-6 py-3 font-semibold text-[color:var(--brand-navy)] hover:bg-white/60 transition"
              >
                View Session Times
              </a>
            </div>

            <div className="relative mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border bg-white/90 p-6">
                <p className="font-semibold text-[color:var(--brand-navy)]">Ages</p>
                <p className="mt-2 text-sm text-gray-600">5–16 years</p>
              </div>

              <div className="rounded-2xl border bg-white/90 p-6">
                <p className="font-semibold text-[color:var(--brand-navy)]">Prices</p>
                <p className="mt-2 text-sm text-gray-600">
                  Starting from <span className="font-semibold">£12.95</span>
                </p>
              </div>

              <div className="rounded-2xl border bg-white/90 p-6">
                <p className="font-semibold text-[color:var(--brand-navy)]">Location</p>
                <p className="mt-2 text-sm text-gray-600">
                  628–630 Green Lanes, London N8 0SD
                </p>
              </div>
            </div>

            <div id="times" className="relative mt-8 rounded-2xl border bg-white/90 p-6">
              <p className="font-semibold text-[color:var(--brand-navy)]">Session Times</p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="rounded-xl bg-white p-4 border">
                  <p className="font-medium">Weekdays</p>
                  <p className="mt-1">Monday, Tuesday, Thursday — 17:00–21:15</p>
                </div>
                <div className="rounded-xl bg-white p-4 border">
                  <p className="font-medium">Weekends</p>
                  <p className="mt-1">Saturday — 09:00–18:15</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                No social media — contact us by phone or email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[color:var(--brand-navy)]">
            A place to feel safe, settled and supported
          </h2>
          <p className="mt-3 max-w-2xl text-gray-700 leading-relaxed">
            We focus on a friendly atmosphere, consistent routines, and caring supervision —
            helping children feel comfortable after school and giving parents peace of mind.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Warm & welcoming",
                desc: "A calm setting where children can relax and feel at home.",
              },
              {
                title: "Safe supervision",
                desc: "Supportive staff and a child-first approach to wellbeing.",
              },
              {
                title: "Parent peace of mind",
                desc: "Clear communication by phone or email whenever needed.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border p-6 bg-white">
                <p className="text-lg font-semibold text-[color:var(--brand-navy)]">{item.title}</p>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border bg-[color:var(--brand-navy)] p-10 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to enquire?
            </h3>
            <p className="mt-3 max-w-2xl text-white/90">
              Send us a message or call — we’ll be happy to help you find the right session.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex justify-center rounded-xl bg-white px-6 py-3 font-semibold text-[color:var(--brand-navy)] hover:bg-white/90 transition"
              >
                Contact us
              </a>
              <a
                href="/services"
                className="inline-flex justify-center rounded-xl border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                View services
              </a>
            </div>
          </div>
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


