// src/app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  link: 
    { rel: "icon", href: "/client/rocket icon.png" },
  title: " 🚀 Eya Sahbeni | Portfolio",
  description: "Full Stack Developer specializing in modern web applications",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
