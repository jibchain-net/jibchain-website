'use client';

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../app/components/ui/Card';
import { Button } from '../app/components/ui/Button';

const features = [
  {
    name: "Earn Passive Income",
    description:
      "Stake JBC to receive staking rewards, creating a steady and passive income stream.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Enhance Network Security",
    description: "Actively contribute to the security and decentralization of the JibChain network.",
    icon: LockClosedIcon,
  },
  {
    name: "Support JibChain's Development",
    description: "Play a crucial role in JibChain's evolution, contributing to its growth and development.",
    icon: ServerIcon,
  },
]

export default function Validator() {
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
    <div className="relative overflow-hidden py-24 sm:py-32 validator-bg bg-cover bg-center" id="validator">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center"
        >
          <motion.div variants={itemVariants} className="max-w-xl lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-primary-400">Become a Validator</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Join the Movement</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stake, Validate, and Shape the Blockchain Landscape. Fueling innovation, powering growth.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-400">
              Your stake strengthens the network, enabling the development of groundbreaking dApps and shaping the future of decentralized finance. Be a part of something bigger and share in the rewards.
            </p>
            <div className="mt-10">
              <Button variant="default" size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Learn How to Stake
              </Button>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants} 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1"
          >
            {features.map((feature) => (
              <motion.div key={feature.name} variants={itemVariants}>
                <Card variant="glass" hover="border" className="bg-white/10 border-primary-500/20 hover:border-primary-400 h-full">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10">
                       <feature.icon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg font-semibold text-primary-200">{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-7 text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}
