import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-black min-h-[90vh] flex items-center">
      {/* Modern gradient blob */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-500 to-violet-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <a href="#" className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-500/20 transition-all hover:bg-primary-500/20">
              <span className="font-medium">What&apos;s new</span>
              <span className="ml-2 inline-flex items-center gap-1 text-primary-300">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            The <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">JB</span> Community Powered, Developer Focused
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            JB Chain, an EVM-based platform, is powered by a community of 
            developers and secured by at-home stakers globally. It offers familiar 
            tooling and is soon introducing trustless bridges to major blockchains, 
            ensuring a seamless and secure experience.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <ConnectButton />
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-violet-600 to-primary-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
