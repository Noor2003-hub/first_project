import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
// import type { Metadata } from 'next'
import React from 'react'
// import type { Page as PageType } from '../../../payload-types'
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



// import { headers as getHeaders } from 'next/headers.js'
// import Image from 'next/image'
// import { getPayload } from 'payload'
// import React from 'react'
// import { fileURLToPath } from 'url'

// import config from '@/payload.config'
// import './styles.css'

// export default async function HomePage() {
//   const headers = await getHeaders()
//   const payloadConfig = await config
//   const payload = await getPayload({ config: payloadConfig })
//   const { user } = await payload.auth({ headers })

//   const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

//   return (
//     <div className="home">
//       <div className="content">
//         <picture>
//           <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
//           <Image
//             alt="Payload Logo"
//             height={65}
//             src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
//             width={65}
//           />
//         </picture>
//         {!user && <h1>Welcome to your new project.</h1>}
//         {user && <h1>Welcome back, {user.email}</h1>}
//         <div className="links">
//           <a
//             className="admin"
//             href={payloadConfig.routes.admin}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Go to admin panel
//           </a>
//           <a
//             className="docs"
//             href="https://payloadcms.com/docs"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Documentation
//           </a>
//         </div>
//       </div>
//       <div className="footer">
//         <p>Update this page by editing</p>
//         <a className="codeLink" href={fileURL}>
//           <code>app/(frontend)/page.tsx</code>
//         </a>
//       </div>
//     </div>
//   )
// }
