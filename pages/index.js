import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 space-y-8">
      <h1 className="text-4xl font-bold">NA Collective</h1>

      {/* Spotify Embed */}
      <iframe
        src="https://open.spotify.com/embed/artist/6ys1HX75sDG7Bf4izo8t6g?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg"
      ></iframe>

      {/* Merch Button */}
      <Link legacyBehavior href="/merch">
        <a className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Shop Merch
        </a>
      </Link>
    </main>
  )
}

