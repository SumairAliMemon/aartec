import AboutSection from '@/components/publish/AboutSection';
import FAQSection from '@/components/publish/FAQSection';
import Footer from '@/components/publish/Footer';
import HeroSection from '@/components/publish/HeroSection';
import HowItWorksSection from '@/components/publish/HowItWorksSection';
import PricingSection from '@/components/publish/PricingSection';
import WhyChooseUsSection from '@/components/publish/WhyChooseUsSection';

export default function PublishPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <PricingSection />
      <WhyChooseUsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
