import config from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/app/utils/RenderBlocks'
import Button from '@mui/material/Button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const queryPageBySlug = async ({ slug, locale = 'en' }: { slug: string; locale?: string }) => {
  const payload = await getPayload({ config })
  
  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: decodeURIComponent(slug),
      }
    },
    locale: locale, // Pass locale as a query option, not in where clause
    fallbackLocale: 'en' // Fallback to English if translation doesn't exist
  })

  return result.docs?.[0] || null
}

export default async function Page({ 
  params: { slug = 'index' },
  searchParams
}: { 
  params: { slug: string },
  searchParams: { lang?: string }
}) {
  const locale = searchParams.lang || 'en'
  const page = await queryPageBySlug({ slug, locale })

  if (!page) {
    return notFound()
  }

  return (
    <article 
      data-theme="dark" 
      className="pt-16 pb-24"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Your content */}
      <RenderBlocks 
        blocks={page.sections ?? []} 
        locale={locale}
      />
    </article>
  )
}