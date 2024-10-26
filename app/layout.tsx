import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Portal - Secure Document Management',
  description: 'Secure client portal for managing and sharing business documents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "min-h-screen bg-background antialiased"
      )}>
        {children}
      </body>
    </html>
  );
}