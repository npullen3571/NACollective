export default function AudioConsent({ onEnable }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md text-center">
        <h3 className="text-xl font-semibold mb-2">Press to experience sound</h3>
        <p className="mb-4 text-sm text-gray-600">Tap once to enable audio and visuals for the site.</p>
        <button
          onClick={onEnable}
          className="px-4 py-2 bg-black text-white rounded hover:opacity-90"
        >
          Enable Audio
        </button>
      </div>
    </div>
  )
}
