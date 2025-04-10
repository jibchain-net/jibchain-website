'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'

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
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-primary-600/10 ring-1 ring-gray-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary-400"
          >
            Platform Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl font-bold tracking-tight text-primary-300 sm:text-5xl"
          >
            Why JB?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"
          >
            JB enables a world of Web3 innovation and entirely new business models
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature, featureIdx) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * featureIdx }}
                viewport={{ once: true }}
                className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:bg-gray-800/70 hover:border-primary-500/30 transition-all group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                  <Image
                    src={feature.icon}
                    width={32}
                    height={32}
                    alt={feature.name}
                    className="h-8 w-8 text-primary-400"
                  />
                </div>
                <dt className="mt-4 font-semibold leading-7 text-white">
                  <span className="text-primary-400">{feature.name}</span>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 