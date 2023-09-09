"use client";

import React from "react";
import AOS from "aos";

export function Providers({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
}
