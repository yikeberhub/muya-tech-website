// src/components/layout/MainContent.tsx
import HeroSection from './HeroSection';
import Services from './Services';
import Projects from './Projects';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';

export default function MainContent() {
  return (
    <main className="space-y-32">
      <HeroSection />
      <Services />
      <Projects />
      <FeaturedProducts />
      <Testimonials />
    </main>
  );
}
