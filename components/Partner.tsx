import Image from 'next/image'

import JibCard from './JibCard'

import iconTokennine from '../public/img/icon/partner/tokennine.png'
import iconJib from '../public/img/icon/partner/jib.png'
import iconThaichain from '../public/img/icon/partner/thaichain.png'
import iconSupra from '../public/img/icon/partner/supra.png'
import iconCm from '../public/img/icon/partner/cm.png'


const items = [
  {
    icon: iconTokennine,
    alt: 'Tokennine'
  },
  {
    icon: iconJib,
    alt: 'Jib'
  },
  {
    icon: iconThaichain,
    alt: 'Thaichain'
  },
  {
    icon: iconSupra,
    alt: 'Supra'
  },
  {
    icon: iconCm,
    alt: 'Cm'
  },
  
  
]


export default function Partner() {
  
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-primary-300 sm:text-5xl">
            Our Partner
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-secondary-100 pb-12">
          From established players to rising stars, our dedicated partners bring their 
          diverse strengths to the table, powering growth and building a brighter blockchain future.
        </p>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {items.map((item) => (
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={item.icon}
                alt={item.alt}
                width={158}
                height={48}
                key={item.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
