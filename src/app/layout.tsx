import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Nikolai Schunk — Software Engineer",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ── Aurora tuning — edit values here ───────────────────────────
            blob1: teal  · blob2: indigo  · blob3: amber
            opacity: 0–1 · blur: px · duration: CSS time string
            drift values live in globals.css @keyframes aurora-1/2/3
        ──────────────────────────────────────────────────────────── */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full mix-blend-screen"
            style={{
              background: "radial-gradient(circle at center, #78c2ad 0%, transparent 70%)",
              opacity: 0.18,
              filter: "blur(120px)",
              animation: "aurora-1 12s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute -bottom-1/4 -right-1/4 w-[65vw] h-[65vw] rounded-full mix-blend-screen"
            style={{
              background: "radial-gradient(circle at center, #6366f1 0%, transparent 70%)",
              opacity: 0.14,
              filter: "blur(140px)",
              animation: "aurora-2 16s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute -top-1/3 -right-1/3 w-[50vw] h-[50vw] rounded-full mix-blend-screen"
            style={{
              background: "radial-gradient(circle at center, #f59e0b 0%, transparent 70%)",
              opacity: 0.08,
              filter: "blur(100px)",
              animation: "aurora-3 20s ease-in-out infinite alternate",
            }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
