import { shortenEthAddress } from '../utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { DocumentDuplicateIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

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
  return (
    <div className="relative py-24 sm:py-32 bg-gradient-to-b from-black to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">JB</span> on Multichain
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            JB Token contract addresses across various blockchain networks
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {tokens.map((token, idx) => (
              <motion.div
                key={token.chain}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-800/70 transition-all border border-gray-700/50 hover:border-primary-500/30"
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative h-16 w-16 rounded-full bg-gray-900/60 p-2 flex items-center justify-center ring-1 ring-white/10">
                    <Image
                      src={token.img}
                      width={40}
                      height={40}
                      alt={token.chain}
                      className="h-10 w-10 object-contain"
                    />
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-400 text-[10px] font-bold text-gray-900">
                      {token.id}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white text-center">
                  {token.chain}
                </h3>
                
                <div className="mt-4 flex items-center justify-center rounded-lg bg-gray-900/50 py-2 px-3">
                  <span className="text-sm font-medium text-gray-300">
                    {shortenEthAddress(token.address)}
                  </span>
                  <div className="ml-auto flex space-x-1.5">
                    <button 
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={() => navigator.clipboard.writeText(token.address)}
                    >
                      <DocumentDuplicateIcon className="h-4 w-4" />
                    </button>
                    <Link 
                      href={token.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
