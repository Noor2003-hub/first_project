import config from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/app/utils/RenderBlocks'

const queryPageBySlug = async ({ slug, locale = 'en' }: { slug: string; locale?: string }) => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: decodeURIComponent(slug),
      },
    },
    locale: locale,
    fallbackLocale: 'en',
  })

  return result.docs?.[0] || null
}

export default async function Page({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale
  const slug = 'index' // hardcoded for homepage

  const page = await queryPageBySlug({ slug, locale })

  if (!page) {
    return notFound()
  }

  return <RenderBlocks blocks={page.sections} />
}
