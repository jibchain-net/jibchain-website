'use client'; // Navbar needs to be a client component for state and interactions

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from '../public/img/Logo.png'
import SafeConnectButton from './SafeConnectButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Add hydration safety
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Updated navigation items with translation keys
  const navigation = [
    { name: t('bridge'), href: 'https://bridge.jbcha.in/', target: '_new' },
    { name: t('validators'), href: '#validator', target: '_self' },
    { name: t('ecosystem'), href: '#ecosystem', target: '_self' },
    { name: t('blockExplorer'), href: 'https://exp-l1.jibchain.net/', target: '_new' },
    { name: t('beaconExplorer'), href: 'https://dora.jibchain.net/', target: '_new' },
  ];

  // Don't render until client-side hydration is complete
  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Image
              src={Logo}
              width={40} // Slightly smaller logo
              height={40}
              alt="JibChain"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                rel={item.target === '_new' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-primary-400 hover:text-primary-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Connect Button (Right side) */}
          <div className="hidden lg:flex items-center space-x-1">
            <LanguageSwitcher />
            <div className="ml-4">
              <SafeConnectButton />
            </div>
          </div>

          {/* Mobile menu button */} 
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          {/* Mobile connect button shown only when menu is closed */} 
          {!mobileMenuOpen && (
            <div className="sm:hidden ml-2">
              <SafeConnectButton />
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu panel */} 
      <div className={classNames(mobileMenuOpen ? 'block' : 'hidden', 'sm:hidden', 'bg-white/95 backdrop-blur-md border-t border-gray-200')}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target}
              rel={item.target === '_new' ? 'noopener noreferrer' : undefined}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-primary-500 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
            >
              {item.name}
            </a>
          ))}
          {/* Add Connect Button inside mobile menu panel when open */} 
          <div className="pt-4 border-t border-gray-200 px-3">
            <SafeConnectButton />
          </div>
          <div className="px-5 py-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
