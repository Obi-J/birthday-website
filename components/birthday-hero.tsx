import Image from "next/image"

interface BirthdayHeroProps {
  name: string
  age: number
}

export function BirthdayHero({ name, age }: BirthdayHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-candles.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background"
        />
      </div>

      {/* Synthwave grid floor */}
      <div
        aria-hidden="true"
        className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%] opacity-90"
      />

      {/* Scanlines overlay */}
      <div
        aria-hidden="true"
        className="scanlines pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
      />

      <div className="relative mx-auto flex min-h-[100vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Top status bar */}
        <div className="mb-10 flex w-full max-w-2xl items-center justify-between font-mono text-base text-accent sm:text-lg">
          <span className="neon-cyan">1UP</span>
          <span className="neon-cyan tracking-[0.3em]">
            HI-SCORE {String(age).padStart(2, "0")}000000
          </span>
          <span className="neon-cyan">2UP</span>
        </div>

        <p className="font-display text-[10px] tracking-[0.4em] text-accent uppercase neon-cyan sm:text-xs">
          Player one ready
        </p>

        <h1 className="mt-10 font-display text-balance text-3xl leading-[1.4] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block neon-magenta text-primary">Happy</span>
          <span className="mt-4 block neon-cyan text-accent">Birthday</span>
          <span className="mt-6 block text-foreground neon-magenta">{name}</span>
        </h1>

        <div className="mt-12 flex items-center gap-4 font-mono text-2xl text-foreground sm:text-3xl">
          <span aria-hidden="true" className="h-px w-12 bg-primary" />
          <p className="neon-magenta tracking-widest">
            LEVEL {String(age).padStart(2, "0")} UNLOCKED
          </p>
          <span aria-hidden="true" className="h-px w-12 bg-primary" />
        </div>

        <p className="mt-10 max-w-xl text-pretty font-mono text-xl leading-snug text-muted-foreground sm:text-2xl">
          Insert coin to celebrate the legend, the high-scorer, the player one
          of our crew. This save file is dedicated entirely to you.
        </p>

        <div className="mt-16 flex flex-col items-center gap-3">
          <span className="font-display text-[10px] tracking-[0.3em] text-accent uppercase neon-cyan">
            <span className="animate-blink">{">"}</span> Press start
          </span>
          <span aria-hidden="true" className="h-12 w-px bg-accent" />
        </div>
      </div>
    </section>
  )
}
