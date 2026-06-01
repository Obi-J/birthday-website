import Image from "next/image"

interface Memory {
  src: string
  caption: string
  era: string
  alt: string
}

const memories: Memory[] = [
  {
    src: "https://drive.google.com/uc?export=view&id=14XYdoBAquQbZRM2fzienvT4x93lF6SZm",
    caption: "Day one, already a star",
    era: "Stage 01 / The Origin",
    alt: "Baby Early crawling in a teal and white striped onesie",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1J1mscXk7Wr5DpbuZoBu0oNMTzGKvyp4p",
    caption: "First adventures",
    era: "Stage 02 / Rookie Year",
    alt: "Toddler Early in a red shirt next to an old teal car",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1LQcN3Nx3-ixPk0a_-PuScLw-9vyzavb_",
    caption: "Born sharp, bow tie & all",
    era: "Stage 03 / Born Sharp",
    alt: "Baby Early in a floral vest, bow tie and tiny red shoes",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1Mdceke4J1zyReUYPLHkMUSU4eVV_0_4j",
    caption: "Grandma's couch, peace signs locked in",
    era: "Stage 04 / Family Tree",
    alt: "Vintage family photo of grandma surrounded by children, with young Early in front in a Bulls jersey throwing a peace sign",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1ZCDXSi10SlqQX9ZtYgCoDKssKzTzp1u0",
    caption: "Roots",
    era: "Stage 05 / Bloodline",
    alt: "Family photo with grandma in white traditional dress and three children",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1egxB-aOVvZjUGdgvGlkxFRJGEMIYMJ65",
    caption: "Sunday best, gold gele",
    era: "Stage 06 / The Crew",
    alt: "Family portrait with mom in gold gele and three children in formalwear",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1j1WcoPPsXod_PHV42jWEX9HlhvXQS3-a",
    caption: "PLC Beach Sports, sunset bench champion",
    era: "Stage 07 / Throwback Mode",
    alt: "Vintage photo of four kids posing with a stuffed black and white cat, young Early in an orange shirt",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1klDQyC7cWbX8bRxYKQmYbj38Z_Wmwock",
    caption: "Future broadcaster, confirmed",
    era: "Stage 08 / On Air",
    alt: "Young Early at a radio microphone wearing a navy and grey striped polo",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1uVvZemjWJsXeHze7nhVeqlj9kMsLROnU",
    caption: "Stage lights, 2006",
    era: "Stage 09 / Curtain Call",
    alt: "Award presentation on Dramatic Day, 12th July 2006, in a school classroom",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=11DDDICaDQYjkd9tJeV_iCw44-HvNZSlP",
    caption: "Captain of the cake heist",
    era: "Stage 10 / Cake Boss",
    alt: "Schoolboy Early in a striped shirt with a red scout neckerchief, holding a Manchester United cake on a school field",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=11WVC1qgYOe6ZaF3LvWT1vJRJ0SUxANPh",
    caption: "Same cake, full team",
    era: "Stage 11 / Champions",
    alt: "Early in red plaid school uniform with three schoolgirls posing with a Manchester United cake",
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
