// app/example/page.tsx or pages/example.tsx
import Slider from '@/utils/components/Slider'
import { getPayload } from 'payload'
import configPromise from "@payload-config"
export async function getSliderData() {
    const payload = await getPayload({ config: await configPromise })
  
    const result = await payload.find({
      collection: 'example-collection',
      limit: 1,
    })
  
    const slider = result.docs?.[0]?.slider || []
    return slider
  }

export default async function ExamplePage() {
  const slider = await getSliderData()

  return (
    <main>
      <h1>Image Slider</h1>
      <Slider slides={slider} />
    </main>
  )
}
