export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border bg-gradient-to-br from-orange-50 via-white to-sky-50 p-10 md:p-14">
            <p className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-navy)]">
              Get in touch • No social media
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
              Contact Fine Learning London Limited
            </h1>

            <p className="mt-4 max-w-2xl text-gray-700 leading-relaxed">
              We’re happy to answer questions and help you find the right session for your child.
              Contact us by phone or email and we’ll respond as soon as possible.
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact card */}
              <div className="rounded-2xl border bg-white/90 p-8">
                <h2 className="text-xl font-semibold text-[color:var(--brand-navy)]">
                  Contact details
                </h2>

                <div className="mt-6 space-y-5 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold text-[color:var(--brand-navy)]">Address</p>
                    <p className="mt-1">628–630 Green Lanes, London N8 0SD</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[color:var(--brand-navy)]">Email</p>
                    <a
                      className="mt-1 inline-block text-[color:var(--brand-navy)] underline underline-offset-4 hover:opacity-80"
                      href="mailto:admin@finelearninglondon.co.uk"
                    >
                      admin@finelearninglondon.co.uk
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-[color:var(--brand-navy)]">Phone</p>
                    <p className="mt-1">+44 7474 897951 / 07900000465</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-xl border bg-slate-50 p-4">
                      <p className="font-semibold text-[color:var(--brand-navy)]">Ages</p>
                      <p className="mt-1 text-gray-700">5–16 years</p>
                    </div>
                    <div className="rounded-xl border bg-slate-50 p-4">
                      <p className="font-semibold text-[color:var(--brand-navy)]">Prices</p>
                      <p className="mt-1 text-gray-700">
                        Starting from <span className="font-semibold">£12.95</span>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-white p-6">
                    <p className="font-semibold text-[color:var(--brand-navy)]">Session Times</p>
                    <div className="mt-3 space-y-2 text-sm text-gray-700">
                      <p>
                        <span className="font-medium">Weekdays:</span> Monday, Tuesday, Thursday — 17:00–21:15
                      </p>
                      <p>
                        <span className="font-medium">Saturday:</span> 09:00–18:15
                      </p>
                    </div>
                    <p className="mt-3 text-xs text-gray-500">
                      No social media — contact us by phone or email.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form card */}
              <div className="rounded-2xl border bg-white/90 p-8">
                <h2 className="text-xl font-semibold text-[color:var(--brand-navy)]">
                  Send an enquiry
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Leave your details and a short message. Next, we’ll connect this form so it sends directly to
                  <span className="font-medium"> admin@finelearninglondon.co.uk</span>.
                </p>

                <form className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[color:var(--brand-navy)]">Parent/Guardian name</label>
                    <input
                      className="mt-1 w-full rounded-xl border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[color:var(--brand-navy)]">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[color:var(--brand-navy)]">Child’s age</label>
                      <input
                        className="mt-1 w-full rounded-xl border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]"
                        placeholder="e.g. 9"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[color:var(--brand-navy)]">Preferred day</label>
                      <input
                        className="mt-1 w-full rounded-xl border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]"
                        placeholder="e.g. Tuesday"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[color:var(--brand-navy)]">Message</label>
                    <textarea
                      className="mt-1 w-full rounded-xl border bg-white px-4 py-3 min-h-[130px] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]"
                      placeholder="Tell us what you’re looking for, and any questions you have..."
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-xl bg-[color:var(--brand-navy)] px-6 py-3 text-white font-semibold hover:opacity-95 transition"
                  >
                    Send enquiry
                  </button>

                  <p className="text-xs text-gray-500">
                    If you’d prefer, you can email us directly at{" "}
                    <a
                      className="text-[color:var(--brand-navy)] underline underline-offset-4 hover:opacity-80"
                      href="mailto:admin@finelearninglondon.co.uk"
                    >
                      admin@finelearninglondon.co.uk
                    </a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


