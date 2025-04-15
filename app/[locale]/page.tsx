import { Suspense } from 'react';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
// Direct imports for page sections
import Hero from '../../components/Hero';
import JBMart from '../../components/JBMart';
import Validator from '../../components/Validatior';
import WhyJB from '../../components/WhyJB';
import Multichain from '../../components/Multichain';
import BuildOnJB from '../../components/BuildOnJB';
import Ecosystem from '../../components/Ecosystem';
import Partner from '../../components/Partner';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { ContainerScroll } from '../../components/ContainerScroll';
export const metadata: Metadata = {
  title: 'JibChain',
  description: 'Welcome to JibChain',
};

// Generate static params for each locale
export async function generateStaticParams() {
  return ['en', 'th'].map(locale => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Handle params as a Promise in Next.js 15
  const { locale } = await Promise.resolve(params);
  
  // Set the locale using the unstable API
  unstable_setRequestLocale(locale);
  
  return (
    <main>
      {/* Keep a top-level Suspense for initial load feedback */}
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>}>
        <Hero />
        <JBMart />
        
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                E-Commerce on chain <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">Revolutionizing</span>
              </h1>
            </>
          }
        >
        +
        </ContainerScroll>
        
        <Validator />
        <WhyJB />
        <Multichain />
        <BuildOnJB />
        <Ecosystem />
        <Partner />
        <CTA />
        <Footer />
      </Suspense>
    </main>
  );
} 