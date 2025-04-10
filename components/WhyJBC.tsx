import Image from 'next/image'

import JibCard from './JibCard'

import iconBlend from '../public/img/icon/blend.png'
import iconFlashCircle from '../public/img/icon/flash-circle.png'
import iconShieldTick from '../public/img/icon/shield-tick.png'

const tiers = [
  {
    icon: iconBlend,
    topic: 'easy',
    description: 'blockchain innovation JBC create a EVM Blockchain base on Erigon for easy interoperability.',
  },
  {
    icon: iconFlashCircle,
    topic: 'Scalable',
    description: 'Build dApps that can grow and evolve without hitting performance walls.',
  },
  {
    icon: iconShieldTick,
    topic: 'Optimized',
    description: 'Build dApps that fly with our ultra-optimized infrastructure.',
  },
  
]

export default function WhyJBC() {
  
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-primary-300 sm:text-5xl">
            Why JBC?
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-secondary-100 pb-12">
          JBC enables a world of Web3 and other new business models
        </p>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <JibCard key={tier.topic}>
                <div className="grid grid-cols-1 justify-items-start">
                  <span className='pl-3'>
                  <Image
                    src={tier.icon}
                    width={64}
                    height={64}
                    alt={tier.topic}
                  />
                  </span>
                  <div className='text-lg font-semi-bold p-3'>
                    <span className='text-primary-500'>{tier.topic}</span>
                    <span className='text-secondary-100'>&nbsp;{tier.description}</span>
                  </div>
                </div>
              </JibCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
