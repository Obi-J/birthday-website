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
    caption: "Born sharp, bow tie & all",
    era: "Stage 03 / Born Sharp",
    alt: "Baby Early in a floral vest, bow tie and tiny red shoes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.10%20%281%29-lQg4jwYsKsKKYrUdkpPrrnPD5qIyow.jpeg",
    caption: "Grandma's couch, peace signs locked in",
    era: "Stage 04 / Family Tree",
    alt: "Vintage family photo of grandma surrounded by children, with young Early in front in a Bulls jersey throwing a peace sign",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.44%20%281%29-48rVhMA6AqDZ1Qd3u66VTfxOUc7avN.jpeg",
    caption: "Roots",
    era: "Stage 05 / Bloodline",
    alt: "Family photo with grandma in white traditional dress and three children",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.42-rZ1e3zHhtJyeVOA7pmQNeKh2msUjHq.jpeg",
    caption: "Sunday best, gold gele",
    era: "Stage 06 / The Crew",
    alt: "Family portrait with mom in gold gele and three children in formalwear",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.10%20%282%29-KapBLnxFrye6TEyQwYtnHZX7zT9Fte.jpeg",
    caption: "PLC Beach Sports, sunset bench champion",
    era: "Stage 07 / Throwback Mode",
    alt: "Vintage photo of four kids posing with a stuffed black and white cat, young Early in an orange shirt",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.43%20%284%29-QwgDGt8NbplwoyIPiHVELfaGIdrA2W.jpeg",
    caption: "Future broadcaster, confirmed",
    era: "Stage 08 / On Air",
    alt: "Young Early at a radio microphone wearing a navy and grey striped polo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.44%20%282%29-qflJ8Z2RuXCCGwBgYkzFl8k3LGwyEq.jpeg",
    caption: "Stage lights, 2006",
    era: "Stage 09 / Curtain Call",
    alt: "Award presentation on Dramatic Day, 12th July 2006, in a school classroom",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.08%20%281%29-o4HHbFxh6Zocl9AWa0kMwnXrPhZeyt.jpeg",
    caption: "Captain of the cake heist",
    era: "Stage 10 / Cake Boss",
    alt: "Schoolboy Early in a striped shirt with a red scout neckerchief, holding a Manchester United cake on a school field",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.08-ykeF5qhVQCFRyJ5TesVx4YoxTNa56c.jpeg",
    caption: "Same cake, full team",
    era: "Stage 11 / Champions",
    alt: "Early in red plaid school uniform with three schoolgirls posing with a Manchester United cake",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.10-JVx3BU292gnUmCq8E2V7gM8T7qRjit.jpeg",
    caption: "Christmas main character",
    era: "Stage 12 / Holiday Mode",
    alt: "Teen Early grinning in a fluffy red Santa hat and a red plaid shirt",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.14%20%282%29-d2RDflNppNiFjYst3TLNzNAWsLsyE0.jpeg",
    caption: "Press pass era",
    era: "Stage 13 / Backstage",
    alt: "Three young men, Early in the middle wearing a press lanyard and sunglasses",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.11-I2YFkjoANtY8zQjSAE8ppVCAVYCnfG.jpeg",
    caption: "Bowtie boss",
    era: "Stage 14 / Dressed To Impress",
    alt: "Teen Early in a black tuxedo with a bow tie, between two friends in suits",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.08%20%282%29-UMl7Zcc4SAKFdWIQVA3JMFlxWAMnq8.jpeg",
    caption: "White tux energy",
    era: "Stage 15 / Final Form",
    alt: "Early in a white tuxedo with a bow tie, flanked by two friends in black tuxedos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.43%20%282%29-xbsQmIVOqpQzKKNS1ACuzfioSuNIFY.jpeg",
    caption: "Mama's pride",
    era: "Stage 16 / Bonus Round",
    alt: "Early in red graduation robe and sunglasses hugging mom in a pink outfit",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.44%20%283%29-OA42Gaq30kpAS3R1gADJmqpUA8c6lR.jpeg",
    caption: "Graduate. Top score.",
    era: "Stage 17 / Game Cleared",
    alt: "Early in a maroon suit and academic robe at convocation with mom in yellow lace",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.09-bvU34PVSs4GbGsU0bAOquNaMgyr41Q.jpeg",
    caption: "Ancestors approved",
    era: "Stage 18 / Tradition",
    alt: "Family ceremony portrait, Early on the far right in a brown traditional outfit alongside mom, grandma and siblings",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2011.26.30%20%289%29-PvcboUtujAiovvBIXEg1DIxgaFxlA0.jpeg",
    caption: "Grandma's favourite (don't tell the others)",
    era: "Stage 19 / Generations",
    alt: "Adult Early in yellow glasses cheek-to-cheek with grandma in a tiger-print outfit",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2011.26.30%20%2811%29-CUsxdbDAhpVrvcKmwVvUFsBAddCL1n.jpeg",
    caption: "Home base, all loaded in",
    era: "Stage 20 / Save Point",
    alt: "Family group selfie at home with mom, dad, sisters and Early in a black cap",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2011.26.30%20%2817%29-zhQS0RfIzKB6eDghPcG849L3bCYvjg.jpeg",
    caption: "Brothers, no lives lost",
    era: "Stage 21 / Co-op Mode",
    alt: "Adult Early in a purple Abeg sweater hugging a friend in a Kimoyo Fellowship hoodie",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2011.26.30%20%2812%29-hYYqlZmRzVaCLkrquugyXy7Sck3cUK.jpeg",
    caption: "String lights, full crew",
    era: "Stage 22 / Night Mode",
    alt: "Group of friends posing at a beach lounge under string lights at night",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2011.26.30%20%2816%29-cM8iGphE8MHOxL6GPbH0XaPcuaX93x.jpeg",
    caption: "Elevator drip check",
    era: "Stage 23 / Style Points",
    alt: "Early in a dark suit and sunglasses taking an elevator mirror selfie with a friend in a grey suit",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.04.42%20%281%29-QOnfHgFtY7rRZ5R5wscOcnHbNf4yj9.jpeg",
    caption: "The crew, present day",
    era: "Stage 24 / New Game+",
    alt: "Selfie of five friends outside an ATM, Early in the front in an orange shirt and glasses",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.13%20%281%29-eVAsRBEEWIQGEitDcR7psfVUB5jOuO.jpeg",
    caption: "Still rare",
    era: "Stage 25 / Limited Edition",
    alt: "Selfie of Early in a yellow polo with a friend in a 'RARE' cap in a supermarket aisle",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2011.26.30%20%2815%29-wJIBbRuJznx3n0v1RtDDxAvTXJLweR.jpeg",
    caption: "k'eni happy sunday",
    era: "Stage 26 / Player Two Ready",
    alt: "Black and white photo of Early eating jollof rice while a friend plays a video game controller",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2012.10.10%20%283%29-BuWqcgvsOSal1lQP2mKhpvEmwhTf2g.jpeg",
    caption: "Tuned in, headphones on",
    era: "Stage 27 / Now Playing",
    alt: "Recent close-up selfie of Early in clear glasses, big black over-ear headphones and a brown striped cardigan",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2011.26.30-R7BA5ByeN01iPUzNAkkG7GtfTonjfD.jpeg",
    caption: "Cozy season, 30+ confirmed",
    era: "Stage 28 / Endgame",
    alt: "Recent selfie of Early in a cream beanie with a smiley patch, clear glasses and a soft sweater",
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
