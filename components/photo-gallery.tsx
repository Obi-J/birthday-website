import Image from "next/image"

interface Memory {
  src: string
  caption: string
  era: string
  alt: string
}

const memories: Memory[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.14-UpXThNORUz1ZrDCYhU4eNpsyax3BrR.jpeg",
    caption: "Day one, already a star",
    era: "Stage 01 / The Origin",
    alt: "Baby Early crawling in a teal and white striped onesie",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.42%20%282%29-BC3ZwQA3Uz0HgX0wFp2iHGsi6RPvP6.jpeg",
    caption: "First adventures",
    era: "Stage 02 / Rookie Year",
    alt: "Toddler Early in a red shirt next to an old teal car",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.13%20%282%29-5miqd5LDmbFAVtLLyTawRjdysRr3BU.jpeg",
    caption: "Born ready, bow tie & all",
    era: "Stage 03 / Born Sharp",
    alt: "Baby Early in a floral vest, bow tie and tiny red shoes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.44%20%281%29-48rVhMA6AqDZ1Qd3u66VTfxOUc7avN.jpeg",
    caption: "Family always",
    era: "Stage 04 / Roots",
    alt: "Family photo with grandma in white traditional dress and three children",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.42-rZ1e3zHhtJyeVOA7pmQNeKh2msUjHq.jpeg",
    caption: "Sunday best, gold gele",
    era: "Stage 05 / The Crew",
    alt: "Family portrait with mom in gold gele and three children in formalwear",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.43%20%284%29-QwgDGt8NbplwoyIPiHVELfaGIdrA2W.jpeg",
    caption: "Future broadcaster confirmed",
    era: "Stage 06 / On Air",
    alt: "Young Early at a radio microphone wearing a navy and grey striped polo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.13-XClJbCz2c0ffHgLT1f6gd7l0to7Qm8.jpeg",
    caption: "Schooldays, green & white",
    era: "Stage 07 / Class Of",
    alt: "Class school photo with many children in green and white uniforms",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.44%20%282%29-qflJ8Z2RuXCCGwBgYkzFl8k3LGwyEq.jpeg",
    caption: "Stage lights, 2006",
    era: "Stage 08 / Curtain Call",
    alt: "Award presentation on Dramatic Day, 12th July 2006, in a school classroom",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.12-pqpA1A174aSDyiURkQdDhdbdEP513i.jpeg",
    caption: "The OG squad",
    era: "Stage 09 / Squad Goals",
    alt: "Childhood group photo with kids posing in front of a stone wall, one in a Lakers jersey",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.14%20%282%29-d2RDflNppNiFjYst3TLNzNAWsLsyE0.jpeg",
    caption: "Press pass era",
    era: "Stage 10 / Backstage",
    alt: "Three young men, Early in the middle wearing a press lanyard and sunglasses",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.12%20%281%29-BI7yORxqkPgnAKbbrPg6XVUw42irA9.jpeg",
    caption: "Suited and booted",
    era: "Stage 11 / Final Boss",
    alt: "Early in a black tuxedo with a bow tie next to a friend in a white traditional outfit",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.43%20%282%29-xbsQmIVOqpQzKKNS1ACuzfioSuNIFY.jpeg",
    caption: "Mama's pride",
    era: "Stage 12 / Bonus Round",
    alt: "Early in red graduation robe and sunglasses hugging mom in a pink outfit",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.44%20%283%29-OA42Gaq30kpAS3R1gADJmqpUA8c6lR.jpeg",
    caption: "Graduate. Top score.",
    era: "Stage 13 / Game Cleared",
    alt: "Early in a maroon suit and academic robe at convocation with mom in yellow lace",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.42%20%281%29-QOnfHgFtY7rRZ5R5wscOcnHbNf4yj9.jpeg",
    caption: "The crew, present day",
    era: "Stage 14 / New Game+",
    alt: "Selfie of five friends outside an ATM, Early in the front in an orange shirt and glasses",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.13%20%281%29-eVAsRBEEWIQGEitDcR7psfVUB5jOuO.jpeg",
    caption: "Still rare",
    era: "Stage 15 / Endgame",
    alt: "Selfie of Early in a yellow polo with a friend in a 'RARE' cap in a supermarket aisle",
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
            {">"} Loading memory bank... three decades of stages cleared, all
            with the same player one. Press any image to remember.
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
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
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
                    {memory.era}
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
