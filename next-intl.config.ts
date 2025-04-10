import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // We need to return the locale explicitly
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    locale
  };
}); 