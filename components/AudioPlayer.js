import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { Howl } from 'howler'

export default function AudioPlayer({ src, onNext, autoPlay = false }) {
  const waveformRef = useRef()
  const wavesurferRef = useRef(null)
  const howlRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    // init wavesurfer
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#CBD5E1',
      progressColor: '#0EA5A4',
      responsive: true,
      height: 60,
    })

    // load from URL (need CORS-friendly hosting for cross origin)
    wavesurferRef.current.load(src)

    wavesurferRef.current.on('ready', () => {
      // create howler instance after wavesurfer is ready
      if (howlRef.current) {
        howlRef.current.unload()
      }
      howlRef.current = new Howl({
        src: [src],
        html5: true,
        onend() {
          setPlaying(false)
          if (onNext) onNext()
        },
      })
      if (autoPlay) {
        howlRef.current.play()
        setPlaying(true)
      }
    })

    wavesurferRef.current.on('audioprocess', () => {
      // optional: sync progress if you want
    })

    return () => {
      try { wavesurferRef.current.destroy() } catch(e){}
      if (howlRef.current) try { howlRef.current.unload() } catch(e){}
    }
  }, [src])

  const toggle = () => {
    if (!howlRef.current) return
    if (howlRef.current.playing()) {
      howlRef.current.pause()
      setPlaying(false)
    } else {
      howlRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div>
      <div ref={waveformRef} />
      <div className="flex items-center gap-3 mt-3">
        <button onClick={toggle} className="px-3 py-1 border rounded">
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={() => {
            if (howlRef.current) {
              howlRef.current.stop()
              setPlaying(false)
              if (onNext) onNext()
            }
          }}
          className="px-3 py-1 border rounded"
        >
          Skip
        </button>
      </div>
    </div>
  )
}
