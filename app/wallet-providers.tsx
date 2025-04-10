'use client';

import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Use dynamic imports to prevent SSR issues
const ClientWalletProviders = dynamic(
  () => import('./client-wallet-providers').then(mod => mod.ClientWalletProviders),
  { ssr: false } // Important: disable SSR completely for wallet components
);

export function WalletProviders({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Render a placeholder or nothing during SSR
  if (!mounted) {
    return <>{children}</>;
  }
  
  // Only render wallet providers on client
  return <ClientWalletProviders>{children}</ClientWalletProviders>;
} 