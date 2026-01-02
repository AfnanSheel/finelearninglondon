export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-6 max-w-2xl text-gray-700 leading-relaxed">
        Send an enquiry and we’ll get back to you as soon as possible.
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="rounded-2xl border p-6">
          <p className="font-semibold">Email</p>
          <p className="mt-1 text-gray-700">admin@finelearninglondon.co.uk</p>

          <p className="mt-6 font-semibold">Location</p>
          <p className="mt-1 text-gray-700">London</p>

          <p className="mt-6 text-sm text-gray-600">
            Prefer a call? Add a phone number here once confirmed by the client.
          </p>
        </div>

        <form className="rounded-2xl border p-6 space-y-4">
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
            Next step: connect this form to a real email endpoint.
          </p>
        </form>
      </div>
    </main>
  );
}
