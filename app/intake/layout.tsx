import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick Request Form - Get Help with Your Tech Problem | Bea',
  description: 'Submit a quick request to get help with your tech challenge. Just 3 simple fields. I\'ll respond within 24 hours to see if I can help.',
  keywords: ['contact form', 'request help', 'tech support form', 'get tech help', 'consultation request'],
  openGraph: {
    title: 'Quick Request Form | Bea',
    description: 'Submit a quick request. Just 3 fields. Response within 24 hours.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick Request Form | Bea',
    description: 'Get help with your tech problem. Response within 24 hours.',
  },
};

export default function IntakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
