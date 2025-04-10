'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import the ConnectButton with dynamic import and disable SSR
const ConnectButton = dynamic(
  () => import('@rainbow-me/rainbowkit').then(mod => mod.ConnectButton),
  { ssr: false }
);

export default function SafeConnectButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return placeholder with same dimensions
    return <div className="h-10 w-[180px] bg-gray-200 animate-pulse rounded-lg"></div>;
  }

  return <ConnectButton />;
} 