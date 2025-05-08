import CoverBlockServer from '@/app/blocks/cover/Server'
import ImageServer from '@/app/blocks/image/Server'
import RichTextServer from '@/app/blocks/richText/Server'

import { Page } from '@/payload-types'
import React, { Fragment } from 'react'
import HeroServer from '../blocks/hero/Server'
import ProductsSectionServer from '../blocks/productsSection/Server'
import StylesSectionServer from '../blocks/stylesSection/Server'
import CommentsSectionServer from '../blocks/commentsSection/Server'
import { Newsletter } from '../blocks/newsletter/schema'
import NewsletterServer from '../blocks/newsletter/Server'
import { TopBrands } from '../blocks/topBrands/schema'
import TopBrandsServer from '../blocks/topBrands/Server'

const blockComponents = {
  cover: CoverBlockServer,
  image: ImageServer,
  richText: RichTextServer,
  hero: HeroServer,
  productsSection: ProductsSectionServer,
  stylesSection: StylesSectionServer,
  commentsSection: CommentsSectionServer,
  newsletter:NewsletterServer,
  topBrands:TopBrandsServer
}

export const RenderBlocks: React.FC<{
  blocks?: Page['sections'][0][],
  // productBlocks?: Page['productsSection'][0][],
  // stylesBlocks?: Page['stylesSection'][0][],
  // commentsBlocks?: Page['commentsSection'][0][]
  // newsletter?: Page['newsLetter'][0][],

}> = ({ blocks = [], 
  // productBlocks = [], stylesBlocks = [], commentsBlocks = [],newsletter=[] 
}) => {

  const allBlocks = [...blocks,
    //  ...productBlocks, ...stylesBlocks, ...commentsBlocks,...newsletter
    ]
  const hasBlocks = allBlocks.length > 0

  if (!hasBlocks) return null

  return (
    <Fragment>
      {allBlocks.map((block, index) => {
        const { blockName, blockType } = block

        if (blockType && blockType in blockComponents) {
          const Block = blockComponents[blockType]
          return (
            <div key={index}>
              <Block id={blockName} {...block} />
            </div>
          )
        }

        return null
      })}
    </Fragment>
  )
}
