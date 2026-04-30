interface BirthdayFooterProps {
  name: string
}

export function BirthdayFooter({ name }: BirthdayFooterProps) {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center">
        <p className="font-serif text-xs tracking-[0.4em] text-primary uppercase">
          With all my love
        </p>
        <p className="font-serif text-3xl italic text-foreground sm:text-4xl">
          Happy birthday, {name}.
        </p>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          Made with love, just for you. Here&apos;s to the year ahead &mdash;
          may it be the kindest one yet.
        </p>
      </div>
    </footer>
  )
}
