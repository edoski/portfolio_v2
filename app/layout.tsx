import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Update the site metadata to reflect Edo's personal portfolio.
  // These values are used by the browser and search engines.
  title: "edo's portfolio",
  description:
      "my portfolio, a software engineer showcasing projects and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Attach the `dark` class to the html element so that the dark colour
    // palette defined in globals.css is used by default. This avoids the
    // need for a toggle and makes the entire site use the dark theme. The
    // `min-h-screen` on the body ensures the footer sits at the bottom of
    // the viewport when there isn’t enough content to push it down.
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}