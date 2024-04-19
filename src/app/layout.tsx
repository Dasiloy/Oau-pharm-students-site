
import 'normalize.css';
import './globals.css';
import 'aos/dist/aos.css';
import NavBar from './components/navBar/NavBar';
import React from 'react';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import { Providers } from './providers';
import Navlinks from './components/navBar/navlinks'
import Footer from './components/footer/footer';
import BOOK from './Homepage/BOOK';
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
  const backgroundImageStyle = {
    backgroundImage: 'url(/WholeBackground.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Set the height you want
  };
  /* Unhandled Runtime Error
ChunkLoadError: Loading chunk app/layout failed.
(missing: http://localhost:3000/_next/static/chunks/app/layout.js)*/
  return (
    <html lang='en'>
      <body
        style={backgroundImageStyle}
        className={inter.className}
        >
        <Navlinks />
        <Providers>{children}</Providers>
        <BOOK />
        <Footer />
      </body>
    </html>
  );
}
