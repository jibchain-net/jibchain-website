import type { NextPage } from 'next';
import Hero from '../components/Hero';
import States from '../components/States';
import Validator from '../components/Validatior';
import Footer from '../components/Footer';
import WhyJBC from '../components/WhyJBC';
import Multichain from '../components/Multichain';
import BuildOnJBC from '../components/BuildOnJBC';


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <States />
      <Validator />
      <WhyJBC />
      <Multichain />
      <BuildOnJBC />
      <Footer />
      
    </>
  );
};

export default Home;
