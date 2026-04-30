interface BirthdayFooterProps {
  name: string
}

export function BirthdayFooter({ name }: BirthdayFooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-primary bg-background">
      <div
        aria-hidden="true"
        className="scanlines pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-16 text-center">
        <p className="font-display text-[10px] tracking-[0.4em] text-accent uppercase neon-cyan sm:text-xs">
          {">"} Game complete
        </p>
        <p className="font-display text-xl leading-[1.4] text-foreground neon-magenta sm:text-2xl">
          Happy birthday, {name}
        </p>
        <p className="max-w-md text-pretty font-mono text-xl leading-snug text-muted-foreground sm:text-2xl">
          {">"} Thanks for playing. Insert another coin to continue
          adventuring &mdash; here&apos;s to your highest score yet.
        </p>
        <p className="mt-4 font-display text-[10px] tracking-[0.4em] text-primary uppercase neon-magenta animate-blink">
          {">"} Press start to continue
        </p>
      </div>
    </footer>
  )
}
