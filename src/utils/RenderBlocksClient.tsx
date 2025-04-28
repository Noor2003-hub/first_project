'use client'

import { RenderBlocks } from '@/utils/RenderBlocks'

export default function RenderBlocksClient({ blocks }: { blocks: any[] }) {
  return <RenderBlocks blocks={blocks} />
}
