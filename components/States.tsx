import { useEffect, useState } from 'react';
import axios from 'axios';

interface Stat {
  id: number;
  name: string;
  value: string;
}

export default function States() {
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
          { id: 1, name: 'Transactions Today', value: transactionsToday.toLocaleString() },
          { id: 2, name: 'Total Transactions', value: totalTransactions.toLocaleString() },
          { id: 3, name: 'Total Wallet', value: totalAddresses.toLocaleString() },
          // Add more as needed
        ];

        // Set the formatted stats in the component state
        setStats(formattedStats);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-secondary-100">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
