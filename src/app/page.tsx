import HeroSection from '@/components/sections/HeroSection';
import ScrollingBanner from '@/components/sections/ScrollingBanner';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FAQSection from '@/components/sections/FAQSection';
import StructuredData from '@/components/seo/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="website" />
    <main className="min-h-screen">
      <HeroSection />
      <ScrollingBanner />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <FAQSection />
    </main>
    </>
  );
}
