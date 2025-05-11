// src/app/(frontend)/[locale]/layout.tsx

import '@payloadcms/next/css';
import '@/styles/globals.css';
import HeaderServer from '../../blocks/global/Header/Server';
import FooterServer from '../../blocks/global/Footer/Server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  return (
    <html lang={locale} dir={dir}>
      <body>
        <HeaderServer lang={locale} />
        <main>{children}</main>
        <FooterServer lang={locale} />
      </body>
    </html>
  );
}
