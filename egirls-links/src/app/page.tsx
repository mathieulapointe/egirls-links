import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-violet-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-3xl border border-pink-200 bg-white/70 p-10 shadow-sm backdrop-blur">
          <h1 className="text-4xl font-black tracking-tight">
            Egirls Links
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Your cute public profile + linklist. Share <span className="font-semibold">one</span> link everywhere.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="rounded-full bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700"
            >
              Create your profile
            </Link>
            <Link
              href="/u/demo"
              className="rounded-full border border-pink-300 bg-white px-6 py-3 font-semibold text-pink-700 hover:bg-pink-50"
            >
              View demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            MVP: public profiles + themes. Shop/servers next.
          </p>
        </div>
      </div>
    </main>
  )
}
