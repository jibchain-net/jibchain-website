'use client';

import { shortenEthAddress } from '../utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { DocumentDuplicateIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Card, CardContent, CardHeader, CardTitle } from '../app/components/ui/Card'

const tokens = [
  {
    chain: 'Optimism',
    id: 'OP',
    href: 'https://optimistic.etherscan.io/token/0x476d52cafbefd730d0e9f8c7bb48fb4df708d1c6',
    img: "/img/icon/tokens/OP.png",
    address: '0x476d52cafbefd730d0e9f8c7bb48fb4df708d1c6',
  },
  {
    chain: 'Arbitrum One',
    id: 'ARB',
    href: 'https://arbiscan.io/token/0x40f63112A18c8563c0B5503C9D4f777A919FD6ac',
    img: "/img/icon/tokens/ARB.png",
    address: '0x40f63112A18c8563c0B5503C9D4f777A919FD6ac',
  },
  {
    chain: 'BNB Smart Chain',
    id: 'BNB',
    href: 'https://bscscan.com/token/0xf8ea8d323aa1d63208dad8a30e09e8d503ed1dc7',
    img: "/img/icon/tokens/BSC.png",
    address: '0xf8eA8D323AA1d63208DAD8A30e09E8D503Ed1dc7',
  },
  {
    chain: 'Bitkub Chain',
    id: 'KUB',
    href: 'https://www.bkcscan.com/token/0x4D51Bb6a38EF573a38BE56566562Fb30464A40F9/token-transfers',
    img: "/img/icon/tokens/BKC.png",
    address: '0x4d51bb6a38ef573a38be56566562fb30464a40f9',
  },
  {
    chain: 'JFin',
    id: 'JFIN',
    href: 'https://exp.jfinchain.com/token/0x7941dCe17B40058C76Cc7396782C6c32bbFB606A',
    img: "/img/icon/tokens/JFIN.png",
    address: '0x7941dCe17B40058C76Cc7396782C6c32bbFB606A',
  },
]

export default function Multichain() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative py-24 sm:py-32 bg-white">
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="absolute h-full w-full stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-light)" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">JB</span> on Multichain
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            JB Token contract addresses across various blockchain networks
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {tokens.map((token) => (
              <motion.div key={token.chain} variants={itemVariants}>
                <Card variant="default" hover="default" className="h-full overflow-hidden">
                  <CardHeader className="items-center pt-6 pb-4">
                     <div className="relative h-16 w-16 rounded-full bg-gray-100 p-2 flex items-center justify-center ring-1 ring-gray-200">
                       <Image
                         src={token.img}
                         width={40}
                         height={40}
                         alt={token.chain}
                         className="h-10 w-10 object-contain"
                       />
                       <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white">
                         {token.id}
                       </span>
                     </div>
                  </CardHeader>
                  <CardContent className="text-center">
                     <CardTitle className="text-lg font-semibold text-gray-800">
                       {token.chain}
                     </CardTitle>
                     <div className="mt-4 flex items-center justify-center rounded-lg bg-gray-100 py-2 px-3">
                       <span className="text-sm font-medium text-gray-600">
                         {shortenEthAddress(token.address)}
                       </span>
                       <div className="ml-auto flex space-x-1.5">
                         <button 
                           title="Copy address"
                           className="text-gray-400 hover:text-primary-500 transition-colors"
                           onClick={() => navigator.clipboard.writeText(token.address)}
                         >
                           <span className="sr-only">Copy address</span>
                           <DocumentDuplicateIcon className="h-4 w-4" />
                         </button>
                         <Link 
                           href={token.href}
                           target="_blank" 
                           rel="noopener noreferrer"
                           title="View on explorer"
                           className="text-gray-400 hover:text-primary-500 transition-colors"
                         >
                           <span className="sr-only">View on explorer</span>
                           <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                         </Link>
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
  )
}
