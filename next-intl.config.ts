import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './app/i18n-config';

// Following exactly: https://next-intl.dev/blog/next-intl-3-22#await-request-locale
export default getRequestConfig(async (context) => {
  // Function parameters will be renamed in the next major version
  // from `locale` to `requestLocale`
  const locale = context.locale;

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    // We need to return the locale to satisfy the error message
    // "A locale is expected to be returned from getRequestConfig"
    locale: locale
  };
});

// Export createSharedPathnamesNavigation for reuse in the app
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }); 