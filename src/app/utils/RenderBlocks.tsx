import CoverBlockServer from '@/app/blocks/cover/Server'
import ImageServer from '@/app/blocks/image/Server'
import RichTextServer from '@/app/blocks/richText/Server'

import { Page } from '@/payload-types'
import React, { Fragment } from 'react'


console.log('here!')
const blockComponents = {
 cover:CoverBlockServer,
 image:ImageServer,
 richText:RichTextServer
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  console.log("Rendering blocks:", blocks);

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block id={blockName} {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
