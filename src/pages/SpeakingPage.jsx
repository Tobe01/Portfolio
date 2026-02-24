import profile from '../data/profile'
import SpeakingSection from '../components/sections/SpeakingSection'

function SpeakingPage() {
  return (
    <SpeakingSection
      description={profile.pageHeaders.speaking.description}
      id="speaking"
      title={profile.pageHeaders.speaking.title}
    />
  )
}
export default SpeakingPage
