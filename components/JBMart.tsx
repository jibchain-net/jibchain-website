'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LockClosedIcon, ServerIcon, CurrencyDollarIcon, UserGroupIcon, CogIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Button } from '../app/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../app/components/ui/Card';

const features = [
  {
    id: 'security',
    name: 'Enhanced Security',
    description: 'Shop with greater peace of mind knowing that transactions on jbmart are secured by the transparent and immutable JBChain.',
    icon: LockClosedIcon,
    colSpan: 'col-span-2', 
    rowSpan: 'row-span-1',
    gradientClass: 'gradient-light-coral', // Match Hero bento style
    borderColor: 'border-palette-coral/20',
    iconColor: 'text-palette-coral',
  },
  {
    id: 'transparency',
    name: 'Transparent Transactions',
    description: 'Experience a new level of clarity in your purchases, with the potential for transparent tracking and secure payment verification.',
    icon: ServerIcon, 
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    gradientClass: 'gradient-light-yellow',
    borderColor: 'border-palette-yellow/20',
    iconColor: 'text-palette-yellow',
  },
  {
    id: 'rewards',
    name: 'Tokenized Rewards (Future)',
    description: 'Look forward to exciting possibilities with token-based loyalty programs that truly reward your engagement on jbmart.',
    icon: CurrencyDollarIcon,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    gradientClass: 'gradient-light-amber',
    borderColor: 'border-palette-amber/20',
    iconColor: 'text-palette-amber',
  },
  {
    id: 'ux',
    name: 'Seamless User Experience',
    description: 'jbmart is designed with you in mind, offering a user-friendly interface for effortless browsing and purchasing.',
    icon: UserGroupIcon,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    gradientClass: 'gradient-light-orange',
    borderColor: 'border-palette-orange/20',
    iconColor: 'text-palette-orange',
  },
  {
    id: 'platform',
    name: 'Powered by JBChain',
    description: 'Benefit from the underlying power of JBChain, ensuring a robust and innovative platform for both buyers and sellers.',
    icon: CogIcon,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    gradientClass: 'gradient-light-yellow', // Reuse a gradient
    borderColor: 'border-palette-yellow/20',
    iconColor: 'text-palette-yellow',
  }
];

export default function JBMart() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">What makes jbmart different?</h3>
            <motion.div 
              variants={containerVariants} 
              className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 auto-rows-[18rem]"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className={`${feature.colSpan || 'col-span-1'} ${feature.rowSpan || 'row-span-1'}`}
                >
                  <Card 
                    variant="glass" // Use glass for the subtle bg-white/80 backdrop-blur
                    hover="default" 
                    className={`relative h-full flex flex-col p-6 overflow-hidden border ${feature.borderColor} ${feature.gradientClass}`}
                  >
                    <CardHeader className="p-0 mb-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white/60`}>
                        <feature.icon className={`h-6 w-6 ${feature.iconColor}`} aria-hidden="true" />
                      </span>
                    </CardHeader>
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <CardTitle className="text-lg font-semibold text-gray-800 mb-2">{feature.name}</CardTitle>
                      <p className="text-sm leading-6 text-gray-600 flex-grow">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="text-center gradient-light-amber p-8 rounded-2xl border border-palette-amber/20 shadow-lg shadow-palette-amber/10">
            <p className="text-lg text-gray-700 mb-6 max-w-md mx-auto">
              Stay tuned for the official launch of jbmart! Sign up below to receive exclusive updates and early access opportunities.
            </p>
            <Button size="lg" variant="default" className="bg-gradient-to-r from-palette-yellow via-palette-amber to-palette-orange text-gray-800 font-medium shadow-md hover:shadow-lg transition-shadow">
              Get Early Access
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 