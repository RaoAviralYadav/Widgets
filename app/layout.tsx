import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Widgets — Assignment',
  description: 'About & Gallery widgets (Next.js + Tailwind + TSX)',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
