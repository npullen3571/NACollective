import AudioPlayer from '../components/AudioPlayer'

const TRACKS = [
  { id: 't1', title: 'Preview 1', src: '/audio/track1.wav' },
  { id: 't2', title: 'Preview 2', src: '/audio/track2.wav' }
]

export default function Music() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Music</h2>

      <div className="mb-8">
        <h3 className="mb-2">Listen on Spotify</h3>
        <div style={{ left: 0, width: '100%', height: 380, position: 'relative' }}>
          <iframe
            src="https://open.spotify.com/embed/artist/6ys1HX75sDG7Bf4izo8t6g"
            style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
            allow="encrypted-media; clipboard-write"
            title="Spotify Artist"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-2">Site previews</h3>
        <div className="space-y-6">
          {TRACKS.map(t => (
            <div key={t.id} className="p-4 border rounded">
              <div className="font-medium mb-2">{t.title}</div>
              <AudioPlayer src={t.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
