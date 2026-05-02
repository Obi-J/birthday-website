import { BirthdayHero } from "@/components/birthday-hero"
import { HeartfeltMessage } from "@/components/heartfelt-message"
import { PersonalMessages } from "@/components/personal-messages"
import { VideoMessages } from "@/components/video-messages"
import { PhotoGallery } from "@/components/photo-gallery"
import { BirthdayFooter } from "@/components/birthday-footer"
import { MusicPlayer } from "@/components/music-player"

// Swap these placeholders for your brother's real details.
const BROTHER_NAME = "Early"
const BROTHER_AGE = "30+"
const YOUR_NAME = "Obi"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <BirthdayHero name={BROTHER_NAME} age={BROTHER_AGE} />
      <HeartfeltMessage name={BROTHER_NAME} signoff={YOUR_NAME} />
      <PersonalMessages />
      <VideoMessages />
      <PhotoGallery />
      <BirthdayFooter name={BROTHER_NAME} />
      <MusicPlayer src="/audio/birthday-song.mp3" trackName="Birthday Anthem" />
    </main>
  )
}
