import "normalize.css";
import "./globals.css";
import "aos/dist/aos.css";

import React from "react";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Providers } from "./providers";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pans Oau student Website",
  description: "Pans Oau student Website",
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
      </body>
    </html>
  );
}
