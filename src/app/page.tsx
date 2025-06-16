import HeroSection from '@/components/sections/HeroSection';
import ScrollingBanner from '@/components/sections/ScrollingBanner';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScrollingBanner />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <FAQSection />
    </main>
  );
}
