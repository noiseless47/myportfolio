import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./fonts.css";
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import { Analytics } from "@vercel/analytics/next"

// Local TikTok Sans font
const tiktokSans = localFont({
  src: [
    {
      path: '../../public/fonts/TikTokSans-VariableFont_opsz,slnt,wdth,wght.ttf',
      weight: 'variable',
      style: 'normal',
    }
  ],
  variable: '--font-tiktok-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Asish Kumar Yeleti | Portfolio",
  description: "Personal portfolio of Asish Kumar Yeleti, an aspiring software developer",
  keywords: ["developer", "portfolio", "software engineer", "web developer", "frontend", "backend", "full-stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tiktokSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider>
          <>
            <Background />
            <Navbar />
            <main className="min-h-screen selection:bg-blue-500/20 selection:text-blue-800 dark:selection:bg-blue-500/30 dark:selection:text-blue-200">
              {children}
            </main>
            <Footer />
            <Analytics />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
