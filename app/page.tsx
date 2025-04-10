import { Suspense } from 'react';

// Direct imports for page sections
import Hero from '../components/Hero';
import JBMart from '../components/JBMart';
import Validator from '../components/Validatior';
import WhyJB from '../components/WhyJB';
import Multichain from '../components/Multichain';
import BuildOnJB from '../components/BuildOnJB';
import Ecosystem from '../components/Ecosystem';
import Partner from '../components/Partner';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      {/* Keep a top-level Suspense for initial load feedback */}
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>}>
        <Hero />
        <JBMart />
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