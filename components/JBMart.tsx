'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LockClosedIcon, ServerIcon, CurrencyDollarIcon, UserGroupIcon, CogIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Button } from '../app/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../app/components/ui/Card';

const features = [
  {
    name: 'Enhanced Security',
    description: 'Shop with greater peace of mind knowing that transactions on jbmart are secured by the transparent and immutable JBChain.',
    icon: LockClosedIcon,
  },
  {
    name: 'Transparent Transactions',
    description: 'Experience a new level of clarity in your purchases, with the potential for transparent tracking and secure payment verification.',
    icon: ServerIcon,
  },
  {
    name: 'Tokenized Rewards (Future)',
    description: 'Look forward to exciting possibilities with token-based loyalty programs that truly reward your engagement on jbmart.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Seamless User Experience',
    description: 'jbmart is designed with you in mind, offering a user-friendly interface for effortless browsing and purchasing.',
    icon: UserGroupIcon,
  },
  {
    name: 'Powered by JBChain',
    description: 'Benefit from the underlying power of JBChain, ensuring a robust and innovative platform for both buyers and sellers.',
    icon: CogIcon,
  }
];

export default function JBMart() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-white to-light-surface" id="jbmart">
      {/* Optional: Adjust or remove background pattern/blobs for light theme */}
      <div className="absolute inset-0 -z-10 opacity-5">
        {/* Lighter grid pattern */}
        <svg className="absolute inset-0 h-full w-full stroke-gray-200" aria-hidden="true">
          <defs>
            <pattern id="jbmart-grid-light" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%">
              <path d="M.5 32V.5H32" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jbmart-grid-light)"></rect>
        </svg>
      </div>
      {/* Lighter gradient blobs */}
       <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
         <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-palette-yellow to-palette-amber opacity-10 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
           style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
         />
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
              {/* Adjust icon background/color */}
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-palette-orange to-palette-coral mb-4 shadow-lg shadow-palette-orange/20">
                <ShoppingCartIcon className="h-8 w-8 text-white" aria-hidden="true" />
              </span>
            </div>
            {/* Adjust text colors */}
            <h2 className="text-base font-semibold leading-7 text-primary-500">Introducing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              <span className="bg-gradient-to-r from-palette-yellow via-palette-amber to-palette-orange bg-clip-text text-transparent">jbmart:</span> Your Next Shopping Destination
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600" // Adjust text color
          >
            Get ready to experience ecommerce like never before! JBChain is proud to introduce <span className="font-bold text-primary-500">jbmart</span>, our revolutionary online marketplace designed to compete with the leading platforms like Shopee and Lazada. We&apos;re building a shopping experience that prioritizes security, transparency, and rewards, all powered by the cutting-edge JBChain.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h3 className="text-xl font-bold text-primary-500 text-center mb-8">What makes jbmart different?</h3>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="relative"
                >
                 {/* Use light card variant with valid hover prop */}
                 <Card variant="default" hover="default" className="h-full">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                       <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                         <feature.icon className="h-6 w-6 text-primary-500" aria-hidden="true" />
                       </span>
                       <CardTitle className="text-lg font-semibold text-gray-800">{feature.name}</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="text-base leading-7 text-gray-600">{feature.description}</p>
                     </CardContent>
                  </Card>
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
           {/* Adjust background/border for light theme */}
          <div className="text-center bg-gradient-to-r from-white to-light-surface p-8 rounded-2xl border border-palette-amber/20 shadow-xl shadow-palette-orange/5">
            <p className="text-lg text-gray-600 mb-6">
              Stay tuned for the official launch of jbmart! Sign up below to receive exclusive updates and early access opportunities.
            </p>
            {/* Button already uses appropriate theme */}
            <Button size="lg" variant="default" className="bg-gradient-to-r from-palette-yellow via-palette-amber to-palette-orange text-gray-800 font-medium shadow-md hover:shadow-lg transition-shadow">
              Get Early Access
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 