import Image, { StaticImageData } from 'next/image';
import JibCard from './JibCard';

import iconJibid from '../public/img/icon/ecosystem/jibid.png';
import iconJiblend from '../public/img/icon/ecosystem/jiblend.png';
import iconJibpunk from '../public/img/icon/ecosystem/jibpunk.png';
import iconCommudao from '../public/img/icon/ecosystem/commudao.png';
import iconMeawneon from '../public/img/icon/ecosystem/meawneon.png';
import iconJibswap from '../public/img/icon/ecosystem/jibswap.png';
import Link from 'next/link';

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
  return (
    <div className="py-24 sm:py-32" id="ecosystem">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-primary-300 sm:text-5xl">
            Ecosystem
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-secondary-100 pb-12">
          The number of DApps on our platform is growing at breakneck speed, attracting users and pushing 
          the boundaries of what's possible. Join the revolution and be part of the future.
        </p>

        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <JibCard key={index}>
                <div>
                  <div className="grid grid-cols-1 justify-items-start">
                    <span className='pl-3'>
                      <Link
                        href={item.link}
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <Image
                          src={item.icon}
                          width={72}
                          height={72}
                          alt={item.name}
                        />
                      </Link>

                    </span>
                    <div className='text-lg font-semi-bold p-3'>
                      <span className='text-white text-2xl'>{item.name}</span>
                      <div>
                        {item.tag.map((tag, tagIndex) => (
                          <span key={tagIndex} className="inline-flex mr-3 my-3 bg-secondary-200 items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-secondary-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className='text-secondary-100'>{item.description}</p>
                    </div>
                  </div>
                </div>
              </JibCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
