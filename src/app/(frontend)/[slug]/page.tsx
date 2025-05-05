// import config from '@payload-config'
// import { getPayload } from 'payload'
// import { notFound } from 'next/navigation'
// import { RenderBlocks } from '@/utils/RenderBlocks'
// import Button from '@mui/material/Button'
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// // ✅ This will run at build time and fetch the page data
// const queryPageBySlug = async ({ slug }: { slug: string }) => {
//   const payload = await getPayload({ config })
//   const result = await payload.find({
//     collection: 'pages',
//     limit: 1,
//     where: {
//       slug: {
//         equals: decodeURIComponent(slug),
//       },
//     },
//   })

//   return result.docs?.[0] || null
// }

// // ✅ Static params for SSG
// export async function generateStaticParams() {
//   const payload = await getPayload({ config })
//   const pages = await payload.find({
//     collection: 'pages',
//     draft: false,
//     limit: 1000,
//   })

//   return pages.docs.map(({ slug }) => ({ slug }))
// }

// // ✅ Optional: to handle the homepage (`slug = index`)
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const page = await queryPageBySlug({ slug: params.slug || 'index' })
//   return {
//     title: page?.title || 'My Site',
//   }
// }

// // ✅ Main Page Component - still server-side, but statically generated
// export default async function Page({ params: { slug = 'index' } }: { params: { slug: string } }) {
//   const page = await queryPageBySlug({ slug })

//   if (!page) {
//     return notFound()
//   }

//   return (
//     <article data-theme="synthwave" className="pt-16 pb-24">
//       <Button variant="contained" className="btn">Click me</Button>
//       <span>This span will always use synthwave theme!</span>

//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem value="item-1">
//           <AccordionTrigger>Is it accessible?</AccordionTrigger>
//           <AccordionContent>
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>

//       <RenderBlocks blocks={page.layout ?? []} />
//     </article>
//   )
// }




//UP is SSG, down is SSR:

import config from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import Button from '@mui/material/Button';
// import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { RenderBlocks } from '@/utils/RenderBlocks'
import { notFound } from 'next/navigation'
console.log('hena!')
const queryPageBySlug = async ({ slug }: { slug: string }) => {
  console.log('queryPageBySlug running with slug:', slug)

  const payload = await getPayload({ config })
  console.log('Got payload instance')

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: decodeURIComponent(slug),
      },
    },
  })

  console.log('Query result:', result)
  return result.docs?.[0] || null
}


export default async function Page({ params: { slug = 'index' } }) {
  console.log('Rendering Page with slug:', slug)
  const page = await queryPageBySlug({ slug })
  console.log('Loaded page:', page)

  return (
    <article data-theme="synthwave" className="pt-16 pb-24">
      <Button variant="contained" palette="dark" className="btn">Click me</Button>
      <span >This span will always use retro theme!</span>
      <Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

      <RenderBlocks blocks={page.layout ?? []} />
    </article>
  )
}

