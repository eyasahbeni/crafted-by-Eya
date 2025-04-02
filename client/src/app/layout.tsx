// src/app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: " Eya Sahbeni | Portfolio",
  description: "Full Stack Developer specializing in modern web applications",
  icons: { rel: "icon", url: "/image.png" }, // ✅ Correct favicon path
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
       <head>
       <link rel="icon" href={metadata.icons.url} type="image/png" />
      </head>
          <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
