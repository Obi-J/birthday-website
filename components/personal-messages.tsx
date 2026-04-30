type Message = {
  from: string
  date: string
  body: string
}

// Add your personal messages here. They'll appear in order, newest first.
const MESSAGES: Message[] = [
  {
    from: "Mom",
    date: "Apr 30, 2026",
    body: "Happy birthday to my sweet boy. I still remember the day you were born like it was yesterday. So proud of the man you've become. Love you to the moon.",
  },
  {
    from: "Aunt Linda",
    date: "Apr 30, 2026",
    body: "Wishing you the brightest year yet. Don't forget to call your favorite aunt once in a while. Big hugs from across the country.",
  },
  {
    from: "Jake",
    date: "Apr 29, 2026",
    body: "Bro. Another year older, still can't beat me at Mario Kart. Have an amazing one. We're celebrating hard this weekend.",
  },
  {
    from: "Sam",
    date: "Apr 29, 2026",
    body: "From the dorm room days to now, you've always been the best hype man a friend could ask for. Cheers to you, legend.",
  },
]

export function PersonalMessages() {
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="absolute inset-0 scanlines pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-[10px] tracking-[0.4em] text-accent uppercase neon-cyan sm:text-xs">
            {">> INCOMING TRANSMISSIONS"}
          </p>
          <h2 className="mt-8 font-display text-balance text-2xl leading-[1.4] text-foreground sm:text-3xl md:text-4xl">
            <span className="neon-magenta text-primary">Messages</span>
            <span className="mt-3 block neon-cyan text-accent">from the Crew</span>
          </h2>
          <p className="font-mono text-lg text-foreground/70 max-w-xl text-pretty leading-relaxed">
            Birthday wishes beamed in from the people who love you.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {MESSAGES.map((msg, i) => (
            <li
              key={i}
              className="group relative bg-card p-6 md:p-7 transition-transform hover:-translate-y-1"
              style={{
                border: `2px solid ${i % 2 === 0 ? "var(--secondary)" : "var(--primary)"}`,
                boxShadow: `4px 4px 0 0 ${i % 2 === 0 ? "var(--primary)" : "var(--secondary)"}`,
              }}
            >
              {/* Pixel corners */}
              <span
                className="absolute -top-1 -left-1 h-2 w-2"
                style={{ background: i % 2 === 0 ? "var(--secondary)" : "var(--primary)" }}
                aria-hidden="true"
              />
              <span
                className="absolute -top-1 -right-1 h-2 w-2"
                style={{ background: i % 2 === 0 ? "var(--secondary)" : "var(--primary)" }}
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-1 -left-1 h-2 w-2"
                style={{ background: i % 2 === 0 ? "var(--secondary)" : "var(--primary)" }}
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-1 -right-1 h-2 w-2"
                style={{ background: i % 2 === 0 ? "var(--secondary)" : "var(--primary)" }}
                aria-hidden="true"
              />

              <header className="mb-3 flex items-center justify-between gap-3 border-b border-border pb-3">
                <span className={`font-display text-[10px] uppercase tracking-[0.2em] ${i % 2 === 0 ? "text-accent neon-cyan" : "text-primary neon-magenta"}`}>
                  {`From: ${msg.from}`}
                </span>
                <time className="font-mono text-sm text-foreground/60">{msg.date}</time>
              </header>

              <p className="font-mono text-lg leading-relaxed text-foreground text-pretty">{msg.body}</p>

              <footer className="mt-4 flex items-center gap-2 font-display text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                <span
                  className="inline-block h-2 w-2 animate-pulse"
                  style={{ background: i % 2 === 0 ? "var(--accent)" : "var(--primary)" }}
                  aria-hidden="true"
                />
                <span>{"TRANSMISSION RECEIVED"}</span>
              </footer>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center font-mono text-sm text-foreground/50">
          {"// More messages incoming. Stay tuned."}
        </p>
      </div>
    </section>
  )
}
