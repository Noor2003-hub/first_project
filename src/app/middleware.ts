import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

function getLocale(request: NextRequest): string {
  const lang = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
  return locales.includes(lang as any) ? lang! : defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const missingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`)
  );

  if (missingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
