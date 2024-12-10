import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ParticleBackground from '@/components/ui/ParticleBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ComboHub - Digital Shopping & Entertainment Ecosystem',
  description: 'Your all-in-one platform for shopping, entertainment, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}