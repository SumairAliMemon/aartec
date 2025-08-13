import BrandHeroSection from '@/components/brand/BrandHeroSection';
import BrandPricingSection from '@/components/brand/BrandPricingSection';
import BrandWhatYouGetSection from '@/components/brand/BrandWhatYouGetSection';
import BrandWhoItsForSection from '@/components/brand/BrandWhoItsForSection';
import BrandWhyClientsLoveItSection from '@/components/brand/BrandWhyClientsLoveItSection';
import Footer from '@/components/publish/Footer';

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-blue-50">
      <BrandHeroSection />
      <BrandWhoItsForSection />
      <BrandWhatYouGetSection />
      <BrandPricingSection />
      <BrandWhyClientsLoveItSection />
      <Footer />
    </div>
  );
}
