'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Button } from '../app/components/ui/Button';

const features = [
  {
    name: 'Enhanced Security',
    description: 'Shop with greater peace of mind knowing that transactions on jbmart are secured by the transparent and immutable JBChain.',
    color: 'from-palette-yellow/20 to-palette-yellow/5'
  },
  {
    name: 'Transparent Transactions',
    description: 'Experience a new level of clarity in your purchases, with the potential for transparent tracking and secure payment verification.',
    color: 'from-palette-amber/20 to-palette-amber/5'
  },
  {
    name: 'Tokenized Rewards (Future)',
    description: 'Look forward to exciting possibilities with token-based loyalty programs that truly reward your engagement on jbmart.',
    color: 'from-palette-orange/20 to-palette-orange/5'
  },
  {
    name: 'Seamless User Experience',
    description: 'jbmart is designed with you in mind, offering a user-friendly interface for effortless browsing and purchasing.',
    color: 'from-palette-coral/20 to-palette-coral/5'
  },
  {
    name: 'Powered by JBChain',
    description: 'Benefit from the underlying power of JBChain, ensuring a robust and innovative platform for both buyers and sellers.',
    color: 'from-primary-500/20 to-primary-500/5'
  }
];

export default function JBMart() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background pattern with colorful overlay */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <pattern id="jbmart-grid" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0,0)">
              <path d="M.5 32V.5H32" fill="none" stroke="currentColor" strokeOpacity="0.1"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jbmart-grid)"></rect>
        </svg>
      </div>
      
      {/* Colorful gradient blobs */}
      <div className="absolute top-1/4 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-palette-yellow to-palette-amber opacity-25" 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 left-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-palette-orange to-palette-coral opacity-25" 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-palette-orange to-palette-coral mb-4 shadow-lg shadow-palette-orange/20">
                <ShoppingCartIcon className="h-8 w-8 text-white" aria-hidden="true" />
              </span>
            </div>
            <h2 className="text-base font-semibold leading-7 text-palette-yellow">Introducing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              <span className="bg-gradient-to-r from-palette-yellow via-palette-amber to-palette-orange bg-clip-text text-transparent">jbmart:</span> Your Next Shopping Destination
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Get ready to experience ecommerce like never before! JBChain is proud to introduce <span className="font-bold text-palette-orange">jbmart</span>, our revolutionary online marketplace designed to compete with the leading platforms like Shopee and Lazada. We&apos;re building a shopping experience that prioritizes security, transparency, and rewards, all powered by the cutting-edge JBChain.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h3 className="text-xl font-bold text-palette-amber text-center mb-8">What makes jbmart different?</h3>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className={`relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:bg-gradient-to-br ${feature.color} hover:border-primary-500/30 transition-all group overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-gradient-to-br from-palette-yellow via-palette-amber to-palette-orange opacity-10 blur-2xl transform group-hover:opacity-20 transition-opacity"></div>
                  
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <CheckCircleIcon className="h-5 w-5 flex-none text-palette-coral" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-300">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-palette-amber/20 shadow-xl shadow-palette-orange/5">
            <p className="text-lg text-gray-300 mb-6">
              Stay tuned for the official launch of jbmart! Sign up below to receive exclusive updates and early access opportunities.
            </p>
            <Button size="lg" variant="default" className="bg-gradient-to-r from-palette-yellow via-palette-amber to-palette-orange text-white font-medium">
              Get Early Access
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 