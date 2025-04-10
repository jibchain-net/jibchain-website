'use client'
import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Validator from '../components/Validatior';
import Footer from '../components/Footer';
import WhyJB from '../components/WhyJB';
import Multichain from '../components/Multichain';
import BuildOnJB from '../components/BuildOnJB';
import Ecosystem from '../components/Ecosystem';
import Partner from '../components/Partner';
import CTA from '../components/CTA';
import JBMart from '../components/JBMart';


const Home: NextPage = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
