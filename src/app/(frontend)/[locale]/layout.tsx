// src/app/(frontend)/[locale]/layout.tsx

import '@payloadcms/next/css';
import '@/styles/globals.css';

import Script from 'next/script'; // ✅ Import Script from Next.js
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
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <head>
        {/* Google Analytics Script Tag */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1X1MQX3BHW`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1X1MQX3BHW');
            `,
          }}
        />
      </head>
      <body>
        <HeaderServer lang={locale} />
        <main>{children}</main>
        <FooterServer lang={locale} />
      </body>
    </html>
  );
}
