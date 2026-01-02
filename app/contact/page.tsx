export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold text-[color:var(--brand-navy)]">Contact</h1>
      <p className="mt-6 max-w-2xl text-gray-700 leading-relaxed">
        Enquiries and bookings are handled by phone or email (no social media).
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="rounded-2xl border p-6">
          <p className="text-lg font-semibold text-[color:var(--brand-navy)]">Fine Learning London Limited</p>

          <div className="mt-5 space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Address:</span> 628–630 Green Lanes, London N8 0SD
            </p>
            <p>
              <span className="font-semibold">Email:</span> finelearninglondonlimited@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +44 7474 897951 / 07900000465
            </p>
            <p>
              <span className="font-semibold">Ages:</span> 5+
            </p>
            <p>
              <span className="font-semibold">Prices:</span> starting from £12.95
            </p>
          </div>

          <div className="mt-8 rounded-xl border bg-slate-50 p-5">
            <p className="font-semibold text-[color:var(--brand-navy)]">Session Times</p>
            <p className="mt-2 text-sm text-gray-700">Mon, Tue, Thu — 17:00–21:15</p>
            <p className="mt-1 text-sm text-gray-700">Saturday — 09:00–18:15</p>
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold text-[color:var(--brand-navy)]">Send a message</h2>
          <p className="mt-2 text-sm text-gray-600">
            This form is a placeholder right now. Next we’ll connect it so it sends emails to the business.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="mt-1 w-full rounded-xl border px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)]"
                placeholder="Tell us what you’re looking for..."
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-[color:var(--brand-navy)] px-6 py-3 text-white font-semibold hover:opacity-95 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

