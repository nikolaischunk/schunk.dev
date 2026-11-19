import { Atkinson_Hyperlegible_Mono, Atkinson_Hyperlegible_Next, Mona_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// Panel: Atkinson Hyperlegible, drawn so no two letters can be mistaken for each other.
const atkinson = Atkinson_Hyperlegible_Next({ subsets: ["latin"], variable: "--font-atkinson" });
const atkinsonMono = Atkinson_Hyperlegible_Mono({ subsets: ["latin"], variable: "--font-atkinson-mono" });
// Index: Mona Sans, whose width axis lets the project names stretch to the screen.
const mona = Mona_Sans({ subsets: ["latin"], axes: ["wdth"], variable: "--font-mona" });

export const metadata: Metadata = {
  title: "Nikolai Schunk — Software Engineer",
  description: "Enthusiastic about code. Good with people. Ships things. Frontend engineer based in Zurich.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${atkinson.variable} ${atkinsonMono.variable} ${mona.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
