import Image from "next/image"

interface Memory {
  src: string
  caption: string
  year: string
  alt: string
}

const memories: Memory[] = [
  {
    src: "/images/memory-1.jpg",
    caption: "The arcade we never wanted to leave",
    year: "Stage 01",
    alt: "Vintage 80s arcade cabinets glowing with neon pink and cyan light",
  },
  {
    src: "/images/memory-2.jpg",
    caption: "Mixtapes on repeat all summer",
    year: "Stage 02",
    alt: "Stack of vintage cassette tapes and a walkman with neon lighting",
  },
  {
    src: "/images/memory-3.jpg",
    caption: "Saturday morning cartoons forever",
    year: "Stage 03",
    alt: "Vintage CRT television glowing with static and neon colors",
  },
  {
    src: "/images/memory-4.jpg",
    caption: "Boombox blasting on the back porch",
    year: "Stage 04",
    alt: "Retro 80s boombox lit with neon pink and cyan",
  },
  {
    src: "/images/memory-5.jpg",
    caption: "City lights on the long drive home",
    year: "Stage 05",
    alt: "Glowing magenta and cyan abstract neon shapes",
  },
  {
    src: "/images/memory-6.jpg",
    caption: "Two-player mode, always",
    year: "Stage 06",
    alt: "Vintage handheld game console and joystick with neon rim lighting",
  },
]

export function PhotoGallery() {
  return (
    <section className="relative overflow-hidden bg-card py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="scanlines pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-display text-[10px] tracking-[0.4em] text-accent uppercase neon-cyan sm:text-xs">
            Save files loaded
          </p>
          <h2 className="mt-8 font-display text-balance text-2xl leading-[1.4] text-foreground sm:text-3xl md:text-4xl">
            <span className="neon-magenta text-primary">Greatest</span>
            <span className="mt-3 block neon-cyan text-accent">Hits</span>
          </h2>
          <p className="mt-8 max-w-xl text-pretty font-mono text-xl leading-snug text-muted-foreground sm:text-2xl">
            {">"} Loading memory bank... a few of my favorite levels we&apos;ve
            cleared together. Press any image to remember.
          </p>
          <span aria-hidden="true" className="mt-10 h-px w-24 bg-primary" />
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory, index) => {
            const isCyan = index % 2 === 1
            return (
              <li key={memory.src} className="group flex flex-col">
                <figure className="flex flex-col">
                  <div
                    className={`relative aspect-[4/5] overflow-hidden bg-background transition duration-300 ${
                      isCyan ? "neon-border-cyan" : "neon-border-magenta"
                    }`}
                  >
                    <Image
                      src={memory.src || "/placeholder.svg"}
                      alt={memory.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover saturate-150 transition duration-700 group-hover:scale-[1.04]"
                    />
                    {/* Scanlines on each image */}
                    <div
                      aria-hidden="true"
                      className="scanlines pointer-events-none absolute inset-0 mix-blend-overlay"
                    />
                  </div>

                  <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-b border-border pb-3">
                    <p
                      className={`font-mono text-xl leading-snug sm:text-2xl ${
                        isCyan ? "text-accent neon-cyan" : "text-primary neon-magenta"
                      }`}
                    >
                      {memory.caption}
                    </p>
                    <span className="shrink-0 font-display text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                  <p className="mt-2 font-display text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                    {memory.year}
                  </p>
                </figure>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
