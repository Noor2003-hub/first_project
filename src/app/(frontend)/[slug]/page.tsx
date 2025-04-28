import type { Metadata } from 'next'
import RenderBlocksClient from '@/utils/RenderBlocksClient'
import config from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import type { Page as PageType } from '../../../payload-types'

import {  RenderBlocks } from '@/utils/RenderBlocks'
import { notFound } from 'next/navigation'


//helper function: to query the page by slug
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => { 

    const parsedSlug = decodeURIComponent(slug) //decode to handel special charcters in slug
  
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

//fetch all pages craeted(until 1000) return the slugs, if not index
export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const pages = await payload.find({
      collection: 'pages',
      draft: false,
      limit: 1000,
    })

    return pages.docs
      ?.filter((doc) => doc.slug !== 'index')
      .map((doc) => ({ slug: doc.slug }))
  } catch (e) {
    console.error('Error in generateStaticParams:', e)
    return []
  }
}


export default async function Page({ params: { slug = 'index' } }) {
  console.log('slug:', slug)
  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  return (
    <article className="pt-16 pb-24">

      <RenderBlocksClient blocks={page.layout} />
    </article>
  )
}


