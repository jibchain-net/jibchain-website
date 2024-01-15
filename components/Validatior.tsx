import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

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
  return (
    <div className="overflow-hidden py-24 sm:py-32 validator-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-400">Become Validator</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the Movement</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Stake, Validate, and Shape the Blockchain Landscape
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
              Fueling innovation, powering growth. Your stake strengthens the network, enabling the development of groundbreaking dApps and shaping the future of decentralized finance. Be a part of something bigger and share in the rewards.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-primary-200">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary-400" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            
          </div>
        </div>
      </div>
    </div>
  )
}
