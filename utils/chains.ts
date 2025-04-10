// Explicitly import and re-export the chains we need with named exports
// This avoids the "export *" issue in Next.js 15 client components
import { goerli as goerliChain } from 'wagmi/chains';

// Create a custom chain for JBC with proper configuration
export const jbc = {
  id: 8899,
  name: 'JBC',
  network: 'jbc',
  nativeCurrency: {
    decimals: 18,
    name: 'Jib',
    symbol: 'JBC',
  },
  rpcUrls: {
    public: { http: ['https://rpc-l1.jibchain.net'] },
    default: { http: ['https://rpc-l1.jibchain.net'] },
  },
  blockExplorers: {
    default: { name: 'JBChain Explorer', url: 'https://exp.jibchain.net' },
  },
};

// Re-export with name exports
export const goerli = goerliChain; 