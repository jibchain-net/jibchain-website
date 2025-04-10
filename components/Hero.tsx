import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ShoppingBagIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

interface Stat {
  id: number;
  name: string;
  value: string;
}

export default function Hero() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
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
      }
    };

    fetchData(); // Call the fetch function
  }, []);

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
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center py-12 sm:py-16">
      {/* Modern gradient blob */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-500 to-violet-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
              <a href="#" className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-500/20 transition-all hover:bg-primary-500/20">
                <span className="font-medium">Coming Soon</span>
                <span className="ml-2 inline-flex items-center gap-1 text-primary-300">
                  <span>JB Mart Launch</span>
                  <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Revolutionizing <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">E-Commerce</span> on the Blockchain
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
              JB Chain is transforming digital commerce with a dedicated blockchain tailored for e-commerce. 
              Our platform enables secure, transparent, and cost-effective shopping experiences while 
              empowering merchants with next-generation tools.
            </p>
            
            <div className="mt-8">
              <ConnectButton />
            </div>
          </motion.div>
          
          {/* Stats bento boxes - spans 5 columns on large screens */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Stats tiles */}
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  className={`rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-5 hover:bg-gray-800/70 hover:border-primary-500/30 transition-all group overflow-hidden relative flex flex-col items-center justify-center ${stat.id === 3 ? 'col-span-2' : ''}`}
                >
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors blur-xl"></div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    {stat.name}
                  </span>
                  <span className="mt-1 text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
              
              {/* Feature boxes */}
              <div className="col-span-2 grid grid-cols-2 gap-4 mt-2">
                <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-5 hover:bg-gray-800/70 hover:border-primary-500/30 transition-all group overflow-hidden relative">
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors blur-xl"></div>
                  <div className="flex items-center mb-2">
                    <ShoppingBagIcon className="h-5 w-5 text-primary-400 mr-2" />
                    <h3 className="text-base font-semibold text-white">JB Mart</h3>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">
                    Decentralized marketplace launching soon
                  </p>
                </div>
                
                <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-5 hover:bg-gray-800/70 hover:border-primary-500/30 transition-all group overflow-hidden relative">
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors blur-xl"></div>
                  <div className="flex items-center mb-2">
                    <CurrencyDollarIcon className="h-5 w-5 text-primary-400 mr-2" />
                    <h3 className="text-base font-semibold text-white">Zero Fees</h3>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">
                    Commission-free e-commerce transactions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-violet-600 to-primary-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
