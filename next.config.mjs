import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  // Your Next.js config here
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
