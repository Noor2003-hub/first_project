import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import React, { cache } from 'react'
import type { Page as PageType } from '../../../payload-types'
import { RenderBlocks } from '@/utils/RenderBlocks'

export default async function Page({ params }: { params: { slug: string } }) {
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
      {/* Render more page content here if needed */}
    </article>
  )
}

// import type { Metadata } from 'next'

// import config from '@payload-config'
// import { getPayload } from 'payload'
// import React, { cache } from 'react'

// import type { Page as PageType } from '../../../payload-types'

// import { Blocks, RenderBlocks } from '@/utils/RenderBlocks'
// import { notFound } from 'next/navigation'


// //helper function: to query the page by slug
// const queryPageBySlug = cache(async ({ slug }: { slug: string }) => { 

//     const parsedSlug = decodeURIComponent(slug) //decode to handel special charcters in slug
  
//     const payload = await getPayload({ config })
  
//     const result = await payload.find({
//       collection: 'pages',
//       limit: 1,
//       where: {
//         slug: {
//           equals: parsedSlug,
//         },
//       },
//     })
  
//     return result.docs?.[0] || null
//   })

// //fetch all pages craeted(until 1000) return the slugs, if not index
// export async function generateStaticParams() {
//   const payload = await getPayload({ config })
//   const pages = await payload.find({
//     collection: 'pages',
//     draft: false,
//     limit: 1000,
//   })

//   return pages.docs
//     ?.filter((doc) => {
//       return doc.slug !== 'index'
//     })
//     .map(({ slug }) => slug)
// }


// export default async function Page({ params: { slug = 'index' } }) {
//   let page: PageType | null

//   page = await queryPageBySlug({
//     slug,
//   })

//   if (!page) {
//     return notFound()
//   }

//   return (
//     <article className="pt-16 pb-24">

//       {/* <RenderBlocks blocks={page.layout} /> */}
//     </article>
//   )
// }