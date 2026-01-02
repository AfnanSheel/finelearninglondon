export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">About Fine Learning London</h1>
      <p className="mt-6 max-w-2xl text-gray-700 leading-relaxed">
        Fine Learning London provides a warm, safe, and stimulating environment
        where children learn through play, routine, and curiosity. We support
        families with dependable childcare and clear communication.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Child-first care", desc: "Safe, supportive routines and nurturing guidance." },
          { title: "Learning & development", desc: "Play-based activities that build confidence." },
          { title: "Family partnership", desc: "Regular updates and a collaborative approach." },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border p-6">
            <p className="font-semibold">{c.title}</p>
            <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
