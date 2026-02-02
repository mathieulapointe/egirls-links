import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params

  // demo fallback
  if (username === 'demo') {
    return (
      <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-violet-100 text-slate-900">
        <div className="mx-auto max-w-md px-6 py-12">
          <div className="rounded-3xl border border-pink-200 bg-white p-8 shadow">
            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-pink-400 to-violet-500" />
              <h1 className="mt-4 text-2xl font-black">@demo</h1>
              <p className="mt-2 text-sm text-slate-600">Streamer • Creator • Mods</p>
            </div>
            <div className="mt-6 space-y-3">
              {[
                ['My Shop', 'https://example.com'],
                ['Twitch', 'https://twitch.tv'],
                ['Instagram', 'https://instagram.com'],
              ].map(([t, u]) => (
                <a
                  key={t}
                  href={u}
                  target="_blank"
                  className="block rounded-2xl bg-white px-4 py-4 text-center font-semibold text-slate-900 shadow-sm ring-1 ring-pink-200 hover:bg-pink-50"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }

  const user = await prisma.user.findUnique({
    where: { username },
    include: { links: { where: { visible: true }, orderBy: { position: 'asc' } } },
  })

  if (!user) return notFound()

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-violet-100 text-slate-900">
      <div className="mx-auto max-w-md px-6 py-12">
        <div className="rounded-3xl border border-pink-200 bg-white p-8 shadow">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-pink-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {user.avatarUrl ? <img src={user.avatarUrl} alt="avatar" className="h-full w-full object-cover" /> : null}
            </div>
            <h1 className="mt-4 text-2xl font-black">@{user.username}</h1>
            {user.bio ? <p className="mt-2 text-sm text-slate-600">{user.bio}</p> : null}
          </div>
          <div className="mt-6 space-y-3">
            {user.links.map((l) => (
              <a
                key={l.id}
                href={l.url}
                target="_blank"
                className="block rounded-2xl bg-white px-4 py-4 text-center font-semibold text-slate-900 shadow-sm ring-1 ring-pink-200 hover:bg-pink-50"
              >
                {l.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
