import LogoBuildOnJBC from '../public/img/build-on-jbc.png'
import Image from 'next/image'
import { Button } from '../app/components/ui/Button'

export default function BuildOnJB() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 build-on-JBC-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Build On JB</h2>    
              <p className="mt-6 text-lg leading-8 text-secondary-200 py-4">
                Build brand new apps and protocol, See the get started guide and more
              </p>
              <Button variant="default" size="lg" className="bg-primary-500 text-white hover:bg-primary-600">
                Developer Portal
              </Button>
              
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
          <Image 
              src={LogoBuildOnJBC}
              width={400}
              height={400}
              alt='Build On JB'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
