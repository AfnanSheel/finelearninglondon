import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 p-10 md:p-14 shadow-sm border">
            <p className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium border">
              Early Years • Childcare • London
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
              Fine Learning London
            </h1>

            <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl">
              A warm, safe and stimulating environment where children learn through
              play, curiosity and routine — supporting families with dependable,
              high-quality childcare.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex justify-center rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
              >
                Enquire / Book a Visit
              </a>
              <a
                href="#services"
                className="inline-flex justify-center rounded-xl border px-6 py-3 font-semibold hover:bg-gray-50 transition"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white p-5 border">
                <p className="font-semibold">Safe & nurturing</p>
                <p className="mt-1 text-sm text-gray-600">
                  Child-first routines, calm spaces, supportive care.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 border">
                <p className="font-semibold">Learning through play</p>
                <p className="mt-1 text-sm text-gray-600">
                  Activities designed to build confidence and curiosity.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 border">
                <p className="font-semibold">Family focused</p>
                <p className="mt-1 text-sm text-gray-600">
                  Clear communication and flexible support for parents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-3 text-gray-700 max-w-2xl">
            We offer flexible childcare and early learning support. Replace the
            items below once the client confirms details.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Early Years Care",
                desc: "Structured routines with play-based learning and gentle support.",
              },
              {
                title: "Private / Small Group Support",
                desc: "Focused sessions to support confidence, language and development.",
              },
              {
                title: "Parent Updates",
                desc: "Simple communication, progress notes and next-step guidance.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border p-6 hover:shadow-sm transition">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 bg-gray-50 border-t">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="mt-3 text-gray-700">
              Want to enquire or arrange a visit? Send a message and we’ll reply as soon as possible.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Email:</span> admin@finelearninglondon.co.uk</p>
              <p><span className="font-semibold">Location:</span> London</p>
            </div>
          </div>

          <form className="rounded-2xl bg-white p-6 border shadow-sm space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="mt-1 w-full rounded-xl border px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="Tell us what you’re looking for..."
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
            >
              Send message
            </button>

            <p className="text-xs text-gray-500">
              This form is a placeholder. Next we’ll connect it to a real form endpoint.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Fine Learning London. All rights reserved.</p>
          <p className="text-gray-500">Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
