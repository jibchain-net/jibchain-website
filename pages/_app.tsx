import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  goerli,
  jbc,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import coverImage from '../public/img/og.png'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    jbc,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'JibChain',
  projectId: process.env.WALLET_CONNECT_ID ?? 'APPID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider 
        chains={chains}
        theme={darkTheme({
          accentColor: '#FFA520',
          accentColorForeground: 'black',
          borderRadius: 'medium',
        })}

      >
      <Head>
        <title>The JBC Community Powered, Developer Focused</title>
        <meta property="og:title" content="The JBC Community Powered, Developer Focused" />
        <meta property="og:description" content="JIB Chain, an EVM-based platform, is powered by a community of developers and secured by at-home stakers globally. It offers familiar tooling and is soon introducing trustless bridges to major blockchains, ensuring a seamless and secure experience." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={coverImage.src} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The JBC Community Powered, Developer Focused" />
        <meta name="twitter:description" content="JIB Chain, an EVM-based platform, is powered by a community of developers and secured by at-home stakers globally. It offers familiar tooling and is soon introducing trustless bridges to major blockchains, ensuring a seamless and secure experience." />
        <meta name="twitter:image" content={coverImage.src} />

      </Head>
        <Navbar />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
