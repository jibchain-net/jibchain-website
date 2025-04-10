'use client';

import React from 'react';
import { RainbowKitProvider, lightTheme, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { goerli, jbc } from '../utils/chains';

// Define chains (ensure environment variable is prefixed with NEXT_PUBLIC_)
const chainsToUse = [
  jbc,
  ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
] as const;

// Create Wagmi config
const config = getDefaultConfig({
  appName: 'JBChain',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? 'YOUR_PROJECT_ID', // Use NEXT_PUBLIC_ prefix and provide a fallback or actual ID
  chains: chainsToUse,
  ssr: true, // Recommended for App Router
});

// Create React Query client
// It's often better to create this client once, for example, using useState or outside the component
// if the component might re-render frequently, but for root layout, this is generally fine.
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={lightTheme({
            accentColor: '#FF9B17',
            accentColorForeground: '#ffffff',
            borderRadius: 'medium',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 