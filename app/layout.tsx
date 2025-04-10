import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Metadata, Viewport } from 'next';
import Navbar from '../components/Navbar';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import React from 'react';
import { Providers } from './providers';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://jibchain.net'),
  title: 'The JB Community Powered, Developer Focused',
  description: 'JB Chain, an EVM-based platform, is powered by a community of developers and secured by at-home stakers globally. It offers familiar tooling and is soon introducing trustless bridges to major blockchains, ensuring a seamless and secure experience.',
  openGraph: {
    title: 'The JB Community Powered, Developer Focused',
    description: 'JB Chain, an EVM-based platform, is powered by a community of developers and secured by at-home stakers globally. It offers familiar tooling and is soon introducing trustless bridges to major blockchains, ensuring a seamless and secure experience.',
    type: 'website',
    images: ['/img/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The JB Community Powered, Developer Focused',
    description: 'JB Chain, an EVM-based platform, is powered by a community of developers and secured by at-home stakers globally. It offers familiar tooling and is soon introducing trustless bridges to major blockchains, ensuring a seamless and secure experience.',
    images: ['/img/og.png'],
  },
  applicationName: 'JB Chain',
  appleWebApp: {
    title: 'JB Chain',
    statusBarStyle: 'default',
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
};

export const viewport: Viewport = {
  themeColor: '#13254d',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${poppins.variable}`}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
} 