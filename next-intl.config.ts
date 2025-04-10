import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (context) => {
  // In next-intl 3.22+, requestLocale is already a string, not a function
  const locale = context.locale;
  
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    locale
  };
}); 