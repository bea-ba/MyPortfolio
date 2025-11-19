import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Coffee Chat - Free 30-Minute Tech Consultation | Bea',
  description: 'Book a free 30-minute coffee chat to discuss your tech challenge. No pressure, no sales pitch. Just honest conversation about whether I can help.',
  keywords: ['book consultation', 'coffee chat', 'tech consultation Lisbon', 'free tech advice', 'schedule meeting'],
  openGraph: {
    title: 'Book Coffee Chat - Free Tech Consultation | Bea',
    description: 'Book a free 30-minute coffee chat to discuss your tech challenge.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Coffee Chat | Bea',
    description: 'Free 30-minute tech consultation. No pressure.',
  },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
