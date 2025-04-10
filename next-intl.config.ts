import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './app/i18n-config';

// Simpler implementation for next-intl 3.26.5
export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    // We explicitly return locale to satisfy the current API requirements
    // This may need to be updated in future versions
    locale
  };
});

// Export createSharedPathnamesNavigation for reuse in the app
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }); 