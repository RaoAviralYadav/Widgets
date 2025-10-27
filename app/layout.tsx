// import './globals.css';
// import type { ReactNode } from 'react';

// export const metadata = {
//   title: 'Widgets — Assignment',
//   description: 'About & Gallery widgets (Next.js + Tailwind + TSX)',
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }

import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Lunacal Widgets Assignment',
  description: 'About & Gallery widgets with neumorphic design - Next.js + TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}