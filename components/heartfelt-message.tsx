interface HeartfeltMessageProps {
  name: string
  signoff: string
}

export function HeartfeltMessage({ name, signoff }: HeartfeltMessageProps) {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Scanlines */}
      <div
        aria-hidden="true"
        className="scanlines pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-display text-[10px] tracking-[0.4em] text-accent uppercase neon-cyan sm:text-xs">
            Transmission incoming
          </p>
          <h2 className="mt-8 font-display text-balance text-2xl leading-[1.4] text-foreground sm:text-3xl md:text-4xl">
            <span className="neon-magenta text-primary">A letter</span>
            <span className="mt-3 block neon-cyan text-accent">for you</span>
          </h2>
          <span aria-hidden="true" className="mt-10 h-px w-24 bg-primary" />
        </div>

        {/* Terminal window */}
        <article className="mt-16 border border-primary bg-card/60 p-6 neon-border-magenta sm:p-10">
          {/* Window chrome */}
          <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-3 w-3 bg-primary" />
              <span aria-hidden="true" className="h-3 w-3 bg-accent" />
              <span aria-hidden="true" className="h-3 w-3 bg-foreground" />
            </div>
            <p className="font-mono text-base text-muted-foreground sm:text-lg">
              {">"} message_to_{name.toLowerCase()}.txt
            </p>
          </div>

          <div className="space-y-5 font-mono text-xl leading-snug text-foreground sm:text-2xl">
            <p>
              <span className="text-accent neon-cyan">{">"} </span>
              Dear {name}, can you believe another year just hit save? Sitting
              down to write this, I keep thinking about all the side-quests we
              ran together this year &mdash; the late-night calls, the inside
              jokes only we get, the way you can still make me laugh harder
              than anyone in any timeline.
            </p>

            <p>
              <span className="text-accent neon-cyan">{">"} </span>
              Growing up with you taught me what it means to have a permanent
              co-op partner. You&apos;ve been my first friend, my fiercest
              defender, and somehow, even when life puts us on different maps,
              you&apos;re still the one I want to call when I clear a level.
            </p>

            <p>
              <span className="text-accent neon-cyan">{">"} </span>
              I&apos;m so proud of who you&apos;re becoming. Of the kindness
              you carry, even when the world tosses cheap shots. Of the way
              you show up for your friends, our family, and me. Not everyone
              gets a brother like you. I rolled a natural twenty on that.
            </p>

            <p>
              <span className="text-accent neon-cyan">{">"} </span>
              So today: take it easy. Eat the extra slice of cake. Stay up too
              late. Be a little spoiled. You earned the cheat codes. Here&apos;s
              to another year of being exactly, unapologetically you.
            </p>

            <p className="pt-4 text-primary neon-magenta">
              {">"} Happy birthday, brother. I love you.
            </p>

            <p className="pt-2 text-2xl text-accent neon-cyan sm:text-3xl">
              &mdash; {signoff} <span className="animate-blink">_</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
