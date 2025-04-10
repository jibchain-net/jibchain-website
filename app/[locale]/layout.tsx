import '../../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css'; 
import { Metadata, Viewport } from 'next';
import Navbar from '../../components/Navbar';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import React from 'react';
import { Providers } from '../providers';
import { WalletProviders } from '../wallet-providers';
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

// Font setup
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Metadata export with complete information
export const metadata: Metadata = {
  metadataBase: new URL('https://jibchain.net'),
  title: {
    default: 'JB Chain - Community Powered, Developer Focused',
    template: '%s | JB Chain'
  },
  description: 'JB Chain, an EVM-based platform, is powered by a community of developers and secured by at-home stakers globally. It offers familiar tooling and is soon introducing trustless bridges to major blockchains, ensuring a seamless and secure experience.',
  keywords: ['blockchain', 'jibchain', 'web3', 'ecommerce', 'cryptocurrency', 'decentralized', 'jbmart'],
  authors: [{ name: 'JB Chain Team' }],
  creator: 'JB Chain',
  publisher: 'JB Chain',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'th_TH',
    url: 'https://jibchain.net',
    siteName: 'JB Chain',
    title: 'JB Chain - Community Powered, Developer Focused',
    description: 'An EVM-based platform, powered by a community of developers and secured by at-home stakers globally. Soon introducing trustless bridges to major blockchains.',
    images: [
      {
        url: '/img/og.png',
        width: 1200,
        height: 630,
        alt: 'JB Chain'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JB Chain - Community Powered, Developer Focused',
    description: 'An EVM-based platform, powered by a community of developers and secured by at-home stakers globally.',
    creator: '@jibchain',
    images: ['/img/og.png'],
  },
  applicationName: 'JB Chain',
  appleWebApp: {
    title: 'JB Chain',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#13254d' }
    ]
  },
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

// Viewport export
export const viewport: Viewport = {
  themeColor: '#13254d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Function to generate props with locale parameter
export async function generateStaticParams() {
  return ['en', 'th'].map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Handle params as a Promise in Next.js 15
  const { locale } = await Promise.resolve(params);
  
  // Set the locale using the unstable API
  unstable_setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await import(`../../messages/${locale}.json`);

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${poppins.variable}`}>
      <body>
        {/* Wallet providers are outside the i18n providers to avoid reinitializing on language change */}
        <WalletProviders>
          <NextIntlClientProvider locale={locale} messages={messages.default}>
            <Providers>
              <Navbar />
              {children}
            </Providers>
          </NextIntlClientProvider>
        </WalletProviders>
      </body>
    </html>
  )
} 