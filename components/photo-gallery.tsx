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
    caption: "The cake we always come back to",
    year: "Every year",
    alt: "Homemade birthday cake with lit candles on a wooden table",
  },
  {
    src: "/images/memory-2.jpg",
    caption: "That party we didn't want to end",
    year: "Last spring",
    alt: "Cluster of warm balloons against a soft beige wall",
  },
  {
    src: "/images/memory-3.jpg",
    caption: "Sparklers in the backyard",
    year: "Summer nights",
    alt: "Hands holding glowing sparklers at dusk",
  },
  {
    src: "/images/memory-4.jpg",
    caption: "You always wrap them perfectly",
    year: "Christmas mornings",
    alt: "A gift wrapped in kraft paper with twine and dried flowers",
  },
  {
    src: "/images/memory-5.jpg",
    caption: "The drive we'll never forget",
    year: "Last October",
    alt: "Two silhouetted figures watching a warm sunset over hills",
  },
  {
    src: "/images/memory-6.jpg",
    caption: "Sunday coffee, like always",
    year: "Every weekend",
    alt: "Two cups of coffee on a wooden table in warm afternoon light",
  },
]

export function PhotoGallery() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-serif text-xs tracking-[0.4em] text-primary uppercase">
            Our memories
          </p>
          <h2 className="mt-6 font-serif text-balance text-4xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl">
            A few of <span className="italic text-primary">our favorites</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Some moments deserve to be remembered. Here are a few of mine
            &mdash; little pieces of a lifetime spent being your sibling.
          </p>
          <span aria-hidden="true" className="mt-8 h-px w-24 bg-border" />
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory, index) => (
            <li key={memory.src} className="group flex flex-col">
              <figure className="flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted shadow-sm ring-1 ring-border transition duration-500 group-hover:shadow-xl">
                  <Image
                    src={memory.src || "/placeholder.svg"}
                    alt={memory.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                  <p className="font-serif text-lg italic leading-snug text-foreground">
                    {memory.caption}
                  </p>
                  <span className="shrink-0 font-serif text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figcaption>
                <p className="mt-1 font-serif text-sm text-muted-foreground">
                  {memory.year}
                </p>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
