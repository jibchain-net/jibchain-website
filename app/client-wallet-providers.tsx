'use client';

import { ReactNode } from 'react';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Create the wallet providers for client-side only
export function ClientWalletProviders({ children }: { children: ReactNode }) {
  // Create configs only when this component is actually rendered (client-side only)
  const config = getDefaultConfig({
    appName: 'JibChain Website',
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
    chains: [mainnet, sepolia],
    ssr: false, // Explicitly disable SSR for RainbowKit
  });
  
  const queryClient = new QueryClient();
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 