import { BirthdayHero } from "@/components/birthday-hero"
import { HeartfeltMessage } from "@/components/heartfelt-message"
import { PhotoGallery } from "@/components/photo-gallery"
import { BirthdayFooter } from "@/components/birthday-footer"

// Swap these placeholders for your brother's real details.
const BROTHER_NAME = "Daniel"
const BROTHER_AGE = 28
const YOUR_NAME = "Your sibling"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <BirthdayHero name={BROTHER_NAME} age={BROTHER_AGE} />
      <HeartfeltMessage name={BROTHER_NAME} signoff={YOUR_NAME} />
      <PhotoGallery />
      <BirthdayFooter name={BROTHER_NAME} />
    </main>
  )
}
