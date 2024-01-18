import JibCard from './JibCard'
import { shortenEthAddress } from '../utils/helpers'
import Image from 'next/image'
import Link from 'next/link'

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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Multichain() {
  

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-primary-300 sm:text-5xl">
            JBC on Multichain
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-400 pb-12">
        JBC Token contract address across various chains.
        </p>

        <div className="grid grid-cols-5 place-content-evenly gap-4 ">
          {tokens.map((token) => (
            <JibCard>
              <div className="grid grid-cols-1 justify-items-center justify-center">
                <Image
                  src={token.img}
                  width={48}
                  height={48}
                  alt={token.chain}
                />
                <div className='text-gray-200 text-lg font-semi-bold text-center p-3'>
                  {token.chain}
                </div>
                <span className="inline-flex bg-secondary items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-300 ">
                  <svg className="h-1.5 w-1.5 fill-primary-400" viewBox="0 0 6 6" aria-hidden="true">
                    <circle cx={3} cy={3} r={3} />
                  </svg>
                  <Link href={token.href}>
                  {shortenEthAddress(token.address)}
                  </Link>
                  
                </span>
              </div>

            </JibCard>
          ))}
        </div>
      </div>
    </div>
  )
}
