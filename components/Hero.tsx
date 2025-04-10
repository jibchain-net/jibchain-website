'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ShoppingBagIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import SafeConnectButton from './SafeConnectButton'

interface Stat {
  id: number;
  name: string;
  value: string;
}

export default function Hero() {
  const [stats, setStats] = useState<Stat[]>([]);
  const t = useTranslations('Hero');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('https://exp.jibchain.net/api/v2/stats');
        const apiStats = response.data;

        // Convert certain string properties to numbers
        const transactionsToday = parseInt(apiStats.transactions_today, 10);
        const totalTransactions = parseInt(apiStats.total_transactions, 10);
        const totalAddresses = parseInt(apiStats.total_addresses, 10);

        // Transform API data into the format expected by your component
        const formattedStats: Stat[] = [
          { id: 1, name: 'Today', value: transactionsToday.toLocaleString() },
          { id: 2, name: 'Total TX', value: totalTransactions.toLocaleString() },
          { id: 3, name: 'Wallets', value: totalAddresses.toLocaleString() },
        ];

        // Set the formatted stats in the component state
        setStats(formattedStats);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Use fallback data if fetch fails
        const fallbackStats: Stat[] = [
          { id: 1, name: 'Today', value: '25,431' },
          { id: 2, name: 'Total TX', value: '3,582,921' },
          { id: 3, name: 'Wallets', value: '192,557' },
        ];
        setStats(fallbackStats);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  // Don't render until client-side hydration is complete
  if (!mounted) {
    return null;
  }

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative isolate overflow-hidden bg-light-background min-h-screen flex items-center py-12 sm:py-16">
      {/* Colorful gradient blobs */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-palette-yellow to-palette-amber opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Bento grid container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Main hero content - spans 7 columns on large screens */}
          <motion.div variants={itemVariants} className="lg:col-span-7 max-w-3xl">
            <div className="mb-6">
              <a href="#" className="inline-flex items-center rounded-full bg-palette-coral/10 px-4 py-1.5 text-sm font-medium text-palette-coral ring-1 ring-inset ring-palette-coral/20 transition-all hover:bg-palette-coral/20">
                <span className="font-medium">{t('comingSoon')}</span>
                <span className="ml-2 inline-flex items-center gap-1 text-palette-amber">
                  <span>{t('jbMartLaunch')}</span>
                  <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
            
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
              Revolutionizing <span className="bg-gradient-to-r from-palette-yellow via-palette-amber to-palette-orange bg-clip-text text-transparent">E-Commerce</span> on the Blockchain
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
              JB Chain is transforming digital commerce with a dedicated blockchain tailored for e-commerce. 
              Our platform enables secure, transparent, and cost-effective shopping experiences while 
              empowering merchants with next-generation tools.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <SafeConnectButton />
              
              <a href="#jbmart" className="inline-flex items-center gap-x-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-all">
                <LightBulbIcon className="-ml-0.5 h-5 w-5 text-palette-amber" aria-hidden="true" />
                {t('learnMore')}
              </a>
            </div>
          </motion.div>
          
          {/* Stats bento boxes - spans 5 columns on large screens */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Stats tiles */}
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  className={`rounded-2xl p-5 shadow-light backdrop-blur-sm transition-all group overflow-hidden relative flex flex-col items-center justify-center ${
                    stat.id === 3 ? 
                    'col-span-2 gradient-light-coral bg-white/80 border border-palette-coral/20' : 
                    index === 0 ? 
                    'gradient-light-yellow bg-white/80 border border-palette-yellow/20' : 
                    'gradient-light-amber bg-white/80 border border-palette-amber/20'
                  }`}
                >
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-palette-yellow to-palette-amber opacity-10 group-hover:opacity-20 transition-opacity blur-xl"></div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                    {stat.name}
                  </span>
                  <span className={`mt-1 text-3xl font-bold tracking-tight ${index === 0 ? 'text-palette-yellow' : index === 1 ? 'text-palette-amber' : 'text-palette-coral'}`}>
                    {stat.value}
                  </span>
                </motion.div>
              ))}
              
              {/* Feature boxes */}
              <div className="col-span-2 grid grid-cols-2 gap-4 mt-2">
                <div className="rounded-2xl gradient-light-orange bg-white/80 border border-palette-orange/20 p-5 shadow-light transition-all group overflow-hidden relative backdrop-blur-sm">
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-palette-orange/10 group-hover:bg-palette-orange/20 transition-colors blur-xl"></div>
                  <div className="flex items-center mb-2">
                    <ShoppingBagIcon className="h-5 w-5 text-palette-orange mr-2" />
                    <h3 className="text-base font-semibold text-gray-800">JB Mart</h3>
                  </div>
                  <p className="mt-1 text-xs text-gray-600">
                    Decentralized marketplace launching soon
                  </p>
                </div>
                
                <div className="rounded-2xl gradient-light-yellow bg-white/80 border border-palette-yellow/20 p-5 shadow-light transition-all group overflow-hidden relative backdrop-blur-sm">
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-palette-yellow/10 group-hover:bg-palette-yellow/20 transition-colors blur-xl"></div>
                  <div className="flex items-center mb-2">
                    <CurrencyDollarIcon className="h-5 w-5 text-palette-yellow mr-2" />
                    <h3 className="text-base font-semibold text-gray-800">Zero Fees</h3>
                  </div>
                  <p className="mt-1 text-xs text-gray-600">
                    Commission-free e-commerce transactions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-palette-orange to-palette-coral opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
