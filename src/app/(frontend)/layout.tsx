import '@payloadcms/next/css'
import React from 'react'
import '@/styles/globals.css'
import HeaderServer from '../blocks/global/Header/Server'
import FooterServer from '../blocks/global/Footer/Server'

export default function Layout({
    children,
    params
}: {
    children: React.ReactNode
    params: { lang: string }
}) {
    // Default to English if no language is specified
    const lang = params.lang || 'en'
    
    return (
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <body>
          <HeaderServer lang={lang} />
          <main>{children}</main>
          <FooterServer lang={lang} />
        </body>
      </html>
    )
}