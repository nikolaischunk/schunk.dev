import { Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Nikolai Schunk - Software Engineer",
  description: "Enthusiastic about code. Good with people. Ships things. Frontend engineer based in Zurich.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
