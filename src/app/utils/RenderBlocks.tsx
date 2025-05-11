import CoverBlockServer from '@/app/blocks/cover/Server'
import ImageServer from '@/app/blocks/image/Server'
import RichTextServer from '@/app/blocks/richText/Server'
import HeroServer from '@/app/blocks/hero/Server'
import ProductsSectionServer from '@/app/blocks/productsSection/Server'
import StylesSectionServer from '@/app/blocks/stylesSection/Server'
import CommentsSectionServer from '@/app/blocks/commentsSection/Server'
import NewsletterServer from '@/app/blocks/newsletter/Server'
import TopBrandsServer from '@/app/blocks/topBrands/Server'

import { Page } from '@/payload-types'
import React, { Fragment } from 'react'

const blockComponents = {
  cover: CoverBlockServer,
  image: ImageServer,
  richText: RichTextServer,
  hero: HeroServer,
  productsSection: ProductsSectionServer,
  stylesSection: StylesSectionServer,
  commentsSection: CommentsSectionServer,
  newsletter: NewsletterServer,
  topBrands: TopBrandsServer,
}

export interface RenderBlocksProps {
  blocks?: Page['sections'][0][]
  locale: string
}

export const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks = [], locale }) => {
  if (!blocks.length) return null

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockName, blockType } = block
        const BlockComponent = (blockType && (blockComponents as any)[blockType])

        if (!BlockComponent) return null

        return (
          <div key={blockName || index}>
            <BlockComponent id={blockName} locale={locale} {...block} />
          </div>
        )
      })}
    </Fragment>
  )
}
