import { HeroSection } from '@/sections/HeroSection'
import { WhySection } from '@/sections/WhySection'
import { PhilosophySection } from '@/sections/PhilosophySection'
import { ProductsSection } from '@/sections/ProductsSection'
import { CollaborateSection } from '@/sections/CollaborateSection'
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
      <ProductsSection />
      <Divider />
      <CollaborateSection />
      <Divider />
      <FaqSection />
    </>
  )
}
