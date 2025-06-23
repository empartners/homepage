import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
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

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://empartners.co.kr'),
  title: {
    default: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    template: `%s | ${COMPANY_CONFIG.name}`
  },
  description: COMPANY_CONFIG.seo.description,
  keywords: COMPANY_CONFIG.seo.keywords,
  authors: [{ name: COMPANY_CONFIG.name, url: process.env.NEXT_PUBLIC_SITE_URL || 'https://empartners.co.kr' }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/emfavi.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/images/emfavi.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/images/emfavi.ico',
    apple: [
      { url: '/images/emfavi.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    description: COMPANY_CONFIG.seo.ogDescription,
    type: "website",
    locale: "ko_KR",
    url: '/',
    siteName: COMPANY_CONFIG.name,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_CONFIG.name} - ${COMPANY_CONFIG.seo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@empartners',
    title: `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.seo.title}`,
    description: COMPANY_CONFIG.seo.ogDescription,
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    canonical: '/',
  },
  category: 'business',
  classification: 'Business Services',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} antialiased`}
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
