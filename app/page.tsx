import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import HowItWorks from '@/components/HowItWorks';
import PortfolioPreview from '@/components/PortfolioPreview';
import ConnectionOptions from '@/components/ConnectionOptions';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <HowItWorks />
      <PortfolioPreview />
      <ConnectionOptions />
    </>
  );
}
