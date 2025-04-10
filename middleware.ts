import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './app/i18n-config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // This is the new recommended approach for Next.js 15
  localePrefix: 'as-needed',
  
  // Add this to enable proper request locale detection
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 