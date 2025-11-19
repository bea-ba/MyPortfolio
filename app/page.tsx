import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import TwoWaysToWork from '@/components/TwoWaysToWork';
import PortfolioPreview from '@/components/PortfolioPreview';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Bea - Tech Problem Solver in Lisbon | Quick Fixes & Custom Solutions',
  description: 'Get your tech unstuck with quick, focused solutions. I help small businesses and passionate people in Lisbon solve technical bottlenecks. Coffee chat or quick form.',
  keywords: ['tech problem solver', 'technical consultant Lisbon', 'small business tech help', 'custom automation', 'quick tech fixes'],
  openGraph: {
    title: 'Bea - Tech Problem Solver in Lisbon',
    description: 'Get your tech unstuck with quick, focused solutions. I help small businesses solve technical bottlenecks.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Bea - Tech Problem Solver',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bea - Tech Problem Solver in Lisbon',
    description: 'Get your tech unstuck with quick, focused solutions.',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <TrustSignals />
      <TwoWaysToWork />
      <PortfolioPreview />
    </>
  );
}
