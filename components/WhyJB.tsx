'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../app/components/ui/Card';

import iconBlend from '../public/img/icon/blend.png'
import iconFlashCircle from '../public/img/icon/flash-circle.png'
import iconShieldTick from '../public/img/icon/shield-tick.png'

const features = [
  {
    icon: iconBlend,
    name: 'Easy Integration',
    description: 'Blockchain innovation with JB creating an EVM Blockchain based on Erigon for seamless interoperability.',
  },
  {
    icon: iconFlashCircle,
    name: 'Highly Scalable',
    description: 'Build dApps that can grow and evolve without hitting performance walls, even with increasing user adoption.',
  },
  {
    icon: iconShieldTick,
    name: 'Ultra Optimized',
    description: 'Create lightning-fast dApps with our ultra-optimized infrastructure, designed for maximum performance and efficiency.',
  },
]

export default function WhyJB() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative overflow-hidden py-24 sm:py-32 bg-light-surface">
      <div className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[-20rem]" aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-palette-coral to-palette-orange opacity-10 sm:left-[calc(50%+40rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary-500"
          >
            Platform Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl"
          >
            Why JB?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
          >
            JB enables a world of Web3 innovation and entirely new business models
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div key={feature.name} variants={itemVariants}>
                <Card variant="default" hover="default" className="text-center h-full">
                  <CardHeader className="items-center pb-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                      <Image
                        src={feature.icon}
                        width={32}
                        height={32}
                        alt=""
                        className="h-8 w-8 text-primary-500"
                      />
                    </span>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <CardTitle className="mt-4 font-semibold text-gray-800">
                       {feature.name}
                    </CardTitle>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 