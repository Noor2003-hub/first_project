// app/[slug]/page.tsx
export async function generateStaticParams() {
    const payload = await getPayload({ config })
  
    const pages = await payload.find({
      collection: 'pages',
      limit: 1000, // Or whatever max you expect
    })
  
    return pages.docs.map((page) => ({
      slug: page.slug,
    }))
  }
  