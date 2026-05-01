type Message = {
  from: string
  date: string
  body: string
}

const MESSAGES: Message[] = [
  {
    from: "Nat",
    date: "Apr 30, 2026",
    body: "Happy Birthday to my darling brother, my number 1 sponsor, and forever backup plan 😂🎉\nYou've been my brother, my friend, my advisor, and sometimes my unpaid therapist 😌\nYou carry this family like say na small thing, always showing up for us and supporting all my wild and random ideas without judging (well… most times 😂).\nThank you for always having my back, for your sacrifices, and for loving me the way you do. I don't say it enough, but I appreciate you more than you know.\nGod bless you with more money (so I can continue to enjoy), more success, peace, and happiness 🙏🏽\nI love you plenty.\nHappy Birthday once again, my favourite person ❤️✨",
  },
  {
    from: "Ib",
    date: "Apr 30, 2026",
    body: "Happy Birthday, Brother. Your life is a testament to what it means to be a strong, supportive, and God-fearing man. As you celebrate today, may you feel the weight of our appreciation for all you do. I pray this year brings you into the fullness of everything God has promised you. The best is truly yet to come! 🎊🙌\nSo today, take a moment to celebrate yourself. Enjoy the love, the laughter, and all the good things that come your way. You deserve every bit of it and more.\nHappy Birthday once again, bro. Here's to more life, more wins, and many more great memories ahead 🥂🎂",
  },
  {
    from: "Mom",
    date: "Apr 30, 2026",
    body: "Its Early Boy's day! 🥳🥳🥳🥳💃🏾💃🏾💃🏾🎂🎂🎂🎈🎉🎊🪄\nNnukwu nwa!\nEarly of God! 😍\nMy first fruit!\nNna, you are born for greatness. You are born to be above always. You are born to impact your world.\nDoors of great favor are opened unto you. Generations shall look up to you. You are not small nwam NO No!\nThe portals are opening to you. Jehovah has put you on that seat to rule in the midst of your enemies.\nI decree and declare, it is well with you. Divine order of health is yours. You will live long and be satisfied. Your joy and peace shall not be taken away. Your generation is blessed of the Lord. Everything you touch is fruitful.\nGod's glory and favour will always go ahead of you. Be fruitful, Multiply, replenish, subdue and then dominate.\nThis new year ushers in great testimonies of what ears, eyes and the mind have never imagined. Wisdom and strength to run through troops and leap over walls is released unto you in Jesus's name.\nI release you into the best of your years yet in the name of GOD THE FATHER, SON and HOLY SPIRIT AMEEEEEEN!!!\nHappy happy 🎂🎂🥳\nI Love you son 😘🥰😍💗💓💙",
  },
  {
    from: "Tee",
    date: "Apr 30, 2026",
    body: "I'm so honoured to have a front row seat to your life and so privileged to be by your side for all of it! May God show you how good it can really get in this new year!\nHappy birthday my EB, I love you forever.\n- Your Tee 🫶🏾",
  },
  {
    from: "Yomi Eluwande",
    date: "Apr 30, 2026",
    body: "Happy birthday Early my g 🎉🥳 Wishing you all the best and all of your heart desires in your new year.\nAs you're now 30+, I pray your knees are kind to you and your back is reinforced with steel.",
  },
  {
    from: "Yinka OS",
    date: "Apr 30, 2026",
    body: "Happy birthday Early!! Wishing a wonderful new year of wins, happiness, and blessings, for you and your family. I'm so excited to hear about all the good things that will happen, and to continue to celebrate with you. It's going to be great! 🎂🥳",
  },
  {
    from: "Dotun",
    date: "Apr 30, 2026",
    body: "Happy birthday EB! Thank you for always bringing the good vibes and energy!!",
  },
  {
    from: "Lade",
    date: "Apr 30, 2026",
    body: "Happy birthday Earlychukwu!\nThank you for all the ways you've shown up these 10 years.\nI am very thankful for you and for the privilege to be a part of your life.\nYou are one of the best people I know and I pray that God's goodness and favour will always follow you everywhere you go.\nMay your light never dim and may your joy always be full.",
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

              <p className="font-mono text-lg leading-relaxed text-foreground text-pretty whitespace-pre-line">{msg.body}</p>

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
