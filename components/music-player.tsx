"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

type Props = {
  src?: string
  trackName?: string
}

export function MusicPlayer({ src = "/audio/birthday-song.mp3", trackName = "Birthday Anthem" }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onReady = () => setIsReady(true)
    const onError = () => setIsReady(false)
    const onEnd = () => setIsPlaying(false)
    audio.addEventListener("canplay", onReady)
    audio.addEventListener("error", onError)
    audio.addEventListener("ended", onEnd)
    return () => {
      audio.removeEventListener("canplay", onReady)
      audio.removeEventListener("error", onError)
      audio.removeEventListener("ended", onEnd)
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
      }
    } catch (err) {
      console.log("[v0] audio play error:", err)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        disabled={!isReady}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="group flex items-center gap-3 border border-primary bg-card px-4 py-3 font-display text-[9px] uppercase tracking-[0.2em] text-primary neon-border-magenta transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span
          className="flex h-7 w-7 items-center justify-center"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
          aria-hidden="true"
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5" fill="currentColor" /> : <Play className="h-3.5 w-3.5" fill="currentColor" />}
        </span>
        <span className="hidden sm:inline">
          {!isReady ? "No track loaded" : isPlaying ? `Playing: ${trackName}` : `Play: ${trackName}`}
        </span>
        {isPlaying && (
          <span className="hidden sm:flex items-end gap-0.5" aria-hidden="true">
            <span className="block w-1 bg-secondary animate-eq-1" style={{ height: "10px" }} />
            <span className="block w-1 bg-secondary animate-eq-2" style={{ height: "14px" }} />
            <span className="block w-1 bg-secondary animate-eq-3" style={{ height: "8px" }} />
          </span>
        )}
      </button>
    </div>
  )
}
