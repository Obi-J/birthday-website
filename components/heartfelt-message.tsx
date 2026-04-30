interface HeartfeltMessageProps {
  name: string
  signoff: string
}

export function HeartfeltMessage({ name, signoff }: HeartfeltMessageProps) {
  return (
    <section className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-serif text-xs tracking-[0.4em] text-primary uppercase">
            A letter for you
          </p>
          <h2 className="mt-6 font-serif text-balance text-4xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl">
            From me <span className="italic text-primary">to you</span>
          </h2>
          <span aria-hidden="true" className="mt-8 h-px w-24 bg-border" />
        </div>

        <article className="mt-16 space-y-6 font-serif text-lg leading-relaxed text-foreground sm:text-xl">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-medium first-letter:leading-[0.85] first-letter:text-primary">
            Dear {name}, it&apos;s hard to believe another year has passed.
            Sitting down to write this, I keep thinking about all the tiny
            moments that made this year ours &mdash; the late-night phone calls,
            the inside jokes that nobody else would ever understand, the way
            you can still make me laugh harder than anyone else on earth.
          </p>

          <p>
            Growing up with you taught me what it means to have someone in your
            corner. You&apos;ve been my first friend, my fiercest defender, and
            somehow, even when life pulls us in different directions, you are
            always the person I want to call first when something good happens.
          </p>

          <p>
            I&apos;m so proud of who you&apos;re becoming. Of the kindness you
            carry, even when the world isn&apos;t kind back. Of the way you
            show up &mdash; for your friends, for our family, for me. Not
            everyone gets a brother like you. I won the lottery on that one.
          </p>

          <p>
            So today, take it easy. Eat the extra slice of cake. Stay up too
            late. Be a little spoiled. You deserve all of it and more. Here&apos;s
            to another year of being exactly, unapologetically you.
          </p>

          <p className="pt-4 italic text-muted-foreground">
            Happy birthday, brother. I love you.
          </p>

          <p className="pt-2 font-serif text-2xl italic text-primary">
            &mdash; {signoff}
          </p>
        </article>
      </div>
    </section>
  )
}
