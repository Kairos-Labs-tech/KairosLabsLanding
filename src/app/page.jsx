import { HeroSection } from '@/sections/HeroSection'
import { WhySection } from '@/sections/WhySection'
import { PhilosophySection } from '@/sections/PhilosophySection'
import { ProductsSection } from '@/sections/ProductsSection'
import { PerspectiveSection } from '@/sections/PerspectiveSection'
import { CollaborateSection } from '@/sections/CollaborateSection'
import { ReachOutSection } from '@/sections/ReachOutSection'
import { FaqSection } from '@/sections/FaqSection'

function Divider() {
  return <div className="page-divider" aria-hidden="true">&#8258;</div>
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Divider />
      <WhySection />
      <Divider />
      <PhilosophySection />
      <Divider />
      <CollaborateSection />
      <Divider />
      <ProductsSection />
      <Divider />
      <PerspectiveSection />
      <Divider />
      <ReachOutSection />
      <Divider />
      <FaqSection />
    </>
  )
}
