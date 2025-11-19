import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Logs - Quick Notes on Solutions & Discoveries | Bea',
  description: 'Short posts on problems solved, tools discovered, boundaries set, and wins celebrated. Learning in public, one small post at a time.',
  keywords: ['learning logs', 'tech blog', 'problem solving', 'developer notes', 'technical discoveries'],
  openGraph: {
    title: 'Learning Logs | Bea',
    description: 'Short notes on problems solved, tools discovered, and wins celebrated.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning Logs | Bea',
    description: 'Short notes on problems solved and tools discovered.',
  },
};

export default function LogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
