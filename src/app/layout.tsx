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
  authors: [{ name: COMPANY_CONFIG.name }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/emfavi.ico',
    shortcut: '/images/emfavi.ico',
    apple: '/images/emfavi.ico',
  },
  openGraph: {
    title: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    description: `${COMPANY_CONFIG.business.description} ${COMPANY_CONFIG.name}와 함께하세요.`,
    type: "website",
    locale: "ko_KR",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://empartners.co.kr',
    siteName: COMPANY_CONFIG.name,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_CONFIG.name} - ${COMPANY_CONFIG.seo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    description: `${COMPANY_CONFIG.business.description} ${COMPANY_CONFIG.name}와 함께하세요.`,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: {
      'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://empartners.co.kr',
  },
  category: 'business',
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
