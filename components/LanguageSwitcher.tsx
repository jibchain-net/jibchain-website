'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import React, { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Convert the pathname to be used in the new locale
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  const handleChangeLocale = (newLocale: string) => {
    // Use React 18 transitions to avoid UI freezing during navigation
    startTransition(() => {
      // Redirect to the same page but with the new locale
      router.push(`/${newLocale}${pathnameWithoutLocale}`);
    });
  };

  return (
    <div className="flex space-x-1 items-center">
      <button
        onClick={() => handleChangeLocale('en')}
        disabled={isPending}
        className={`px-2 py-1 text-xs rounded ${
          locale === 'en' 
            ? 'bg-primary-500 text-white' 
            : isPending 
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-500 hover:text-gray-700'
        }`}
        title="English"
      >
        EN
      </button>
      <button
        onClick={() => handleChangeLocale('th')}
        disabled={isPending}
        className={`px-2 py-1 text-xs rounded ${
          locale === 'th' 
            ? 'bg-primary-500 text-white' 
            : isPending 
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-500 hover:text-gray-700'
        }`}
        title="ภาษาไทย"
      >
        TH
      </button>
    </div>
  );
} 