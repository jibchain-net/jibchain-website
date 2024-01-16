import type { NextPage } from 'next';
import Hero from '../components/Hero';
import States from '../components/States';
import Validator from '../components/Validatior';
import Footer from '../components/Footer';


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <States />
      <Validator />
      <Footer />
    </>
  );
};

export default Home;
