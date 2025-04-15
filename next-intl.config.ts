import { getRequestConfig } from 'next-intl/server';

// Updated implementation for next-intl 3.26.5 using requestLocale
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    // We explicitly return locale to satisfy the current API requirements
    // This may need to be updated in future versions
    locale
  };
});

// Export the navigation configuration
export const localePrefix = 'as-needed';
export const defaultLocale = 'en'; 