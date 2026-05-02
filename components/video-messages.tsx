import { Play } from "lucide-react"

type VideoMessage = {
  from: string
  src: string
  thumbnail?: string
}

const VIDEO_MESSAGES: VideoMessage[] = [
  // Add your video messages here
  // {
  //   from: "Mom",
  //   src: "/videos/mom-message.mp4",
  //   thumbnail: "/videos/thumbnails/mom-message.jpg",
  // },
]

export function VideoMessages() {
  if (VIDEO_MESSAGES.length === 0) {
    return null
  }

  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="absolute inset-0 scanlines pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-[10px] tracking-[0.4em] text-accent uppercase neon-cyan sm:text-xs">
            {">> VIDEO TRANSMISSIONS"}
          </p>
          <h2 className="mt-8 font-display text-balance text-2xl leading-[1.4] text-foreground sm:text-3xl md:text-4xl">
            <span className="neon-magenta text-primary">Video</span>
            <span className="mt-3 block neon-cyan text-accent">Messages</span>
          </h2>
          <p className="font-mono text-lg text-foreground/70 max-w-xl text-pretty leading-relaxed">
            Watch special birthday wishes from those who couldn't send text alone.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {VIDEO_MESSAGES.map((msg, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-card"
              style={{
                border: `2px solid ${i % 2 === 0 ? "var(--secondary)" : "var(--primary)"}`,
                boxShadow: `4px 4px 0 0 ${i % 2 === 0 ? "var(--primary)" : "var(--secondary)"}`,
              }}
            >
              <span
                className="absolute -top-1 -left-1 h-2 w-2 z-10"
                style={{ background: i % 2 === 0 ? "var(--secondary)" : "var(--primary)" }}
                aria-hidden="true"
              />
              <span
                className="absolute -top-1 -right-1 h-2 w-2 z-10"
                style={{ background: i % 2 === 0 ? "var(--secondary)" : "var(--primary)" }}
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-1 -left-1 h-2 w-2 z-10"
                style={{ background: i % 2 === 0 ? "var(--secondary)" : "var(--primary)" }}
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-1 -right-1 h-2 w-2 z-10"
                style={{ background: i % 2 === 0 ? "var(--secondary)" : "var(--primary)" }}
                aria-hidden="true"
              />

              <div className="relative aspect-video bg-black overflow-hidden">
                <video
                  src={msg.src}
                  poster={msg.thumbnail}
                  controls
                  className="w-full h-full object-cover"
                />

                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Play video from ${msg.from}`}
                >
                  <Play className="w-12 h-12 text-white fill-white" />
                </button>
              </div>

              <div className="p-4 border-t border-border">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-primary neon-magenta">
                  {`From: ${msg.from}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
