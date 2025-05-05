import config from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import { RenderBlocks } from '@/app/utils/RenderBlocks'
import { notFound } from 'next/navigation'

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })

  return result.docs?.[0] || null
})

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
  })

  return pages.docs?.filter((doc) => doc.slug !== 'index').map(({ slug }) => slug)
}

export default async function Page({ params: { slug = 'index' } }: { params: { slug: string } }) {
  const page = await queryPageBySlug({ slug })

  if (!page) {
    return notFound()
  }

  return (
    <article className="pt-16 pb-24">
      <h1 className='bg-red-500'>Hii</h1>
      <RenderBlocks blocks={page.layout} />
    </article>
  )
}
