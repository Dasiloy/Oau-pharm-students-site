import 'normalize.css';
import './globals.css';
import 'aos/dist/aos.css';
import NavBar from './components/navBar/NavBar';
import React from 'react';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import { Providers } from './providers';

import Footer from './components/footer/footer';
const inter = Mulish({ subsets: ['latin'] });
//anything placed here stay consistent throughout the whole application//
export const metadata: Metadata = {
  title: 'Pans Oau student Website',
  description: 'Pans Oau student Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
