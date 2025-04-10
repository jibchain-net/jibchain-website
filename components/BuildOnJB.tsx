'use client';

import LogoBuildOnJBC from '../public/img/build-on-jbc.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../app/components/ui/Button'

export default function BuildOnJB() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  
  const textItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative overflow-hidden py-24 sm:py-32 bg-light-surface">
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="absolute inset-0 h-full w-full stroke-gray-200" aria-hidden="true">
          <defs>
            <pattern id="grid-pattern-light" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%">
              <path d="M0 32V.5H32" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-light)" />
        </svg>
      </div>

      <div className="absolute left-[max(45rem,calc(100%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-palette-amber to-palette-coral opacity-10"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center"
         >
          <motion.div 
            variants={itemVariants}
            className="lg:order-first lg:row-start-1"
          >
            <div className="relative -mx-6 mt-6 p-6 lg:-mx-0 lg:mt-0 lg:p-0">
              <Image 
                src={LogoBuildOnJBC}
                width={500}
                height={500}
                alt='Build On JB illustration'
                className="relative rounded-2xl shadow-xl ring-1 ring-gray-900/10"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={textItemVariants}
            className="flex flex-col items-start gap-y-8"
          >
            <div>
              <div className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-500/20">
                Developers
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Build On JB</h2>    
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Create innovative apps and protocols on the JB Chain platform. Our comprehensive toolkit and developer resources make it easy to build, test, and deploy your blockchain solutions.
              </p>
            </div>
            <div className="mt-4">
              <Button variant="default" size="lg" className="bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg transition-shadow">
                Developer Portal
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 