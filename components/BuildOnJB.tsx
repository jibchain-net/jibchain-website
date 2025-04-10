import LogoBuildOnJBC from '../public/img/build-on-jbc.png'
import Image from 'next/image'
import JibButton from './Button'
import { motion } from 'framer-motion'

export default function BuildOnJB() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="absolute inset-0 h-full w-full stroke-gray-600/10" aria-hidden="true">
          <defs>
            <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%">
              <path d="M0 32V.5H32" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:order-first lg:row-start-1"
          >
            <div className="relative -mx-6 -mt-6 p-6">
              <Image 
                src={LogoBuildOnJBC}
                width={500}
                height={500}
                alt='Build On JB'
                className="relative rounded-2xl shadow-2xl ring-1 ring-gray-700/10"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary-500 to-violet-600 opacity-50 blur-2xl" />
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-primary-500 opacity-50 blur-2xl" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-y-8"
          >
            <div>
              <div className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-500/20">
                Developers
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Build On JB</h2>    
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Create innovative apps and protocols on the JB Chain platform. Our comprehensive toolkit and developer resources make it easy to build, test, and deploy your blockchain solutions.
              </p>
            </div>
            <div className="mt-4">
              <JibButton text="Developer Portal" size="xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 