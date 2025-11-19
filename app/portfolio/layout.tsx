import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Real Tech Solutions for Small Businesses | Bea',
  description: 'See how I\'ve helped small businesses solve tech problems: automation workflows, data clarity tools, quick fixes, and custom solutions. Real projects, real results.',
  keywords: ['portfolio', 'case studies', 'automation projects', 'small business solutions', 'tech consulting examples'],
  openGraph: {
    title: 'Portfolio - Real Tech Solutions | Bea',
    description: 'See how I\'ve helped small businesses solve tech problems with automation, data tools, and quick fixes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Real Tech Solutions | Bea',
    description: 'See how I\'ve helped small businesses solve tech problems.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
