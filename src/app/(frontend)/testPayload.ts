// testPayload.ts
import { getPayload } from 'payload'
import config from './src/payload.config.ts'

async function test() {
  const payload = await getPayload({ config })
  const pages = await payload.find({ collection: 'pages' })
  console.log(pages.docs.map(p => p.slug))
}

test()
