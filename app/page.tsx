import Hero from '@/components/home/Hero'
import IconRow from '@/components/home/IconRow'
import Collage from '@/components/home/Collage'
import Impact from '@/components/home/Impact'
import Stories from '@/components/home/Stories'
import ProgramsBlock from '@/components/home/ProgramsBlock'
import InsightsBlock from '@/components/home/InsightsBlock'
import LabsBlock from '@/components/home/LabsBlock'
import CtaBand from '@/components/home/CtaBand'

// Static port of the approved design. TODO: bind Stories to outreachReport and Insights to latest posts from Sanity.
export default function Home() {
  return (
    <>
      <Hero />
      <IconRow />
      <Collage />
      <Impact />
      <Stories />
      <ProgramsBlock />
      <InsightsBlock />
      <LabsBlock />
      <CtaBand />
    </>
  )
}
