import Image from 'next/image'
import React from 'react';
import JibButton from './Button';
import logoJB from '../public/img/Logo-wide.png';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-500 to-violet-600 opacity-10"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 shadow-2xl shadow-black/50"
        >
          <div className="relative isolate overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
            {/* Decorative corners */}
            <div className="absolute -top-32 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1074/804] w-[67.125rem] bg-gradient-to-r from-primary-500/30 to-violet-600/30"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
            
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={logoJB}
                  width={140}
                  height={60}
                  alt='JB'
                  className="h-16 w-auto mb-8"
                />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              >
                Code the New Paradigm
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 text-lg text-gray-300 max-w-xl"
              >
                Architect the future of decentralized finance and tokenized economies. 
                Our developer tools empower you to craft groundbreaking blockchain solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <JibButton text='Craft Contracts Now'/>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
