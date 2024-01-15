import type { NextPage } from 'next';
import Hero from '../components/Hero';
import States from '../components/States';
import Validator from '../components/Validatior';


const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <States />
      <Validator />
    </>
  );
};

export default Home;
