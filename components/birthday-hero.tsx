import Image from "next/image"

interface BirthdayHeroProps {
  name: string
  age: number
}

export function BirthdayHero({ name, age }: BirthdayHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-candles.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"
        />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-serif text-sm tracking-[0.4em] text-primary uppercase">
          A celebration for
        </p>

        <h1 className="mt-6 font-serif text-balance text-6xl font-light leading-[0.95] text-foreground sm:text-7xl md:text-8xl lg:text-[9rem]">
          Happy Birthday,
          <span className="mt-2 block italic text-primary">{name}</span>
        </h1>

        <div className="mt-10 flex items-center gap-6">
          <span className="h-px w-16 bg-border" />
          <p className="font-serif text-2xl italic text-muted-foreground">
            {age} years of you
          </p>
          <span className="h-px w-16 bg-border" />
        </div>

        <p className="mt-10 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Today we celebrate the brother, the friend, the heart of so many
          stories. This little corner of the internet is just for you.
        </p>

        <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-serif text-xs tracking-[0.3em] uppercase">
            Scroll to read
          </span>
          <span aria-hidden="true" className="h-12 w-px bg-border" />
        </div>
      </div>
    </section>
  )
}
