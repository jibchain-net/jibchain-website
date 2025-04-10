'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import iconTokennine from '../public/img/icon/partner/tokennine.png';
import iconJib from '../public/img/icon/partner/jib.png';
import iconThaichain from '../public/img/icon/partner/thaichain.png';
import iconSupra from '../public/img/icon/partner/supra.png';
import iconCm from '../public/img/icon/partner/cm.png';

interface PartnerItem {
  icon: StaticImageData;
  alt: string;
  link: string;
}

const items: PartnerItem[] = [
  {
    icon: iconTokennine,
    alt: 'Tokennine',
    link: 'https://tokenine.co/',
  },
  {
    icon: iconJib,
    alt: 'Jib',
    link: 'https://www.jib.co.th/web/',
  },
  {
    icon: iconThaichain,
    alt: 'Thaichain',
    link: 'https://www.thaichain.io/',
  },
  {
    icon: iconSupra,
    alt: 'Supra',
    link: 'https://supraoracles.com/',
  },
  {
    icon: iconCm,
    alt: 'Cm',
    link: '/',
  },
];

export default function Partner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Partners
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300 pb-12">
            From established players to rising stars, our dedicated partners bring their 
            diverse strengths to the table, powering growth and building a brighter blockchain future.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {items.map((item) => (
              <motion.div key={item.alt} variants={itemVariants} className="flex justify-center">
                <Link 
                  href={item.link}
                  rel="noopener noreferrer" 
                  target="_blank"
                  className="block transition-opacity hover:opacity-75"
                >
                  <Image
                    className="max-h-12 w-full object-contain"
                    src={item.icon}
                    alt={item.alt}
                    width={158}
                    height={48}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
