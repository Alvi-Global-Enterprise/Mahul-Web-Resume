import type { Metadata } from "next";
import { Questrial, Space_Mono, Prosto_One, Press_Start_2P } from "next/font/google";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const prostoOne = Prosto_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prosto",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahul Ruparelia | Senior Product Manager & Quality Engineering",
  description: "Payments · FinTech · Web3 · AI Capital Markets · Quality Engineering. Delivering product visions through a quality engineering lens.",
  icons: {
    icon: [
      { url: "/images/logo.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${questrial.variable} ${spaceMono.variable} ${prostoOne.variable} ${pressStart2P.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-black text-white antialiased overflow-x-hidden selection:bg-[#EC0116] selection:text-white">
        {children}
      </body>
    </html>
  );
}
