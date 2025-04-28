interface PageProps {
  params: {
    slug: string;
  };
}

import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/utils/RenderBlocks'

export default async function Page({ params }: PageProps) {
  const slug = decodeURIComponent(params.slug || 'index')

  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    limit: 1,
    where: { slug: { equals: slug } },
  })

  const page = docs[0]

  if (!page) {
    return notFound()
  }

  return (
    <article className="pt-16 pb-24">
      <RenderBlocks blocks={page.layout} />
    </article>
  )
}
