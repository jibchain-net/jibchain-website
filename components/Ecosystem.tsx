'use client';

import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from '../app/components/ui/Card';
import Link from 'next/link';
import { motion } from 'framer-motion';

import iconJibid from '../public/img/icon/ecosystem/jibid.png';
import iconJiblend from '../public/img/icon/ecosystem/jiblend.png';
import iconJibpunk from '../public/img/icon/ecosystem/jibpunk.png';
import iconCommudao from '../public/img/icon/ecosystem/commudao.png';
import iconMeawneon from '../public/img/icon/ecosystem/meawneon.png';
import iconJibswap from '../public/img/icon/ecosystem/jibswap.png';

interface EcosystemItem {
  icon: StaticImageData;
  name: string;
  tag: string[];
  description: string;
  link: string;
}

const items: EcosystemItem[] = [
  {
    icon: iconJibswap,
    name: 'JibSwap',
    tag: ['DEFI'],
    description: 'JIBSWAP | Swap on the leading decentralized crypto trading protocol',
    link: 'https://jibswap.com/#/swap',
  },
  {
    icon: iconJibid,
    name: 'JibID',
    tag: ['NFT'],
    description: 'Your Passport to Web3 Simplicity',
    link: 'https://www.jibid.xyz/',
  },
  {
    icon: iconJibpunk,
    name: 'Jibpunk',
    tag: ['DEFI', 'NFT'],
    description: 'A randomly generated JIB Punk representing a unique individual in the community.',
    link: 'https://www.jibpunk.xyz/',
  },
  {
    icon: iconCommudao,
    name: 'Commudao',
    tag: ['DEFI', 'NFT'],
    description: 'Web3 protocol providing On-chain gamification and Dapp services. Developed by CMDAO LABS.',
    link: 'https://commudao.xyz/',
  },
  {
    icon: iconMeawneon,
    name: 'Meawneon',
    tag: ['NFT'],
    description: 'MeowNeon is the first NFTs (ERC-1155) in JIBCHAIN L1 and largest marketplace for NFTs and crypto collectibles.',
    link: 'https://meowneon.app/',
  },
  {
    icon: iconJiblend,
    name: 'JIBLEND',
    tag: ['DEFI'],
    description: 'Unleash the Power of Your Crypto',
    link: 'https://jiblend.xyz/',
  },

];

export default function Ecosystem() {
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
    <div className="py-24 sm:py-32 bg-light-surface" id="ecosystem">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            <span className="bg-gradient-to-r from-palette-yellow via-palette-amber to-palette-orange bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 pb-12">
            The number of DApps on our platform is growing at breakneck speed, attracting users and pushing 
            the boundaries of what&apos;s possible. Join the revolution and be part of the future.
          </p>
        </motion.div>

        <motion.div 
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           className="mx-auto max-w-6xl"
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {items.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <Card variant="default" hover="scale" className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <div className="grid grid-cols-1 justify-items-start gap-4">
                      <Link
                        href={item.link}
                        rel="noopener noreferrer" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src={item.icon}
                          width={64}
                          height={64}
                          alt={item.name}
                          className="rounded-lg"
                        />
                      </Link>
                      
                      <div className='text-lg font-semibold'>
                        <span className='text-gray-800 text-xl'>{item.name}</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.tag.map((tag, tagIndex) => (
                            <span key={tagIndex} className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-100 px-2 py-1 text-xs font-medium text-primary-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className='mt-3 text-sm text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
