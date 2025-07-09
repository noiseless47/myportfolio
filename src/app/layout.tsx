import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';

// Poppins font for headings
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Inter font for body text
const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider>
          <>
            <Background />
            <Navbar />
            <main className="min-h-screen selection:bg-blue-500/20 selection:text-blue-800 dark:selection:bg-blue-500/30 dark:selection:text-blue-200">
              {children}
            </main>
            <Footer />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
