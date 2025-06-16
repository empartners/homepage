import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import FloatingConsultButton from "@/components/common/FloatingConsultButton";
import { COMPANY_CONFIG } from "@/config/company";
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
  title: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
  description: `${COMPANY_CONFIG.business.description} ${COMPANY_CONFIG.name}와 함께하세요.`,
  keywords: `${COMPANY_CONFIG.seo.keywords}, ${COMPANY_CONFIG.name}`,
  openGraph: {
    title: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    description: `${COMPANY_CONFIG.business.description} ${COMPANY_CONFIG.name}와 함께하세요.`,
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <FloatingConsultButton />
      </body>
    </html>
  );
}
