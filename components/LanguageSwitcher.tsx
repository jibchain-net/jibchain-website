'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import React from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Convert the pathname to be used in the new locale
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  const handleChangeLocale = (newLocale: string) => {
    // Redirect to the same page but with the new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <div className="flex space-x-1 items-center">
      <button
        onClick={() => handleChangeLocale('en')}
        className={`px-2 py-1 text-xs rounded ${locale === 'en' ? 'bg-primary-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}
        title="English"
      >
        EN
      </button>
      <button
        onClick={() => handleChangeLocale('th')}
        className={`px-2 py-1 text-xs rounded ${locale === 'th' ? 'bg-primary-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}
        title="ภาษาไทย"
      >
        TH
      </button>
    </div>
  );
} 