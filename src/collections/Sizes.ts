import type { CollectionConfig } from 'payload'

export const Sizes: CollectionConfig = {
  slug: 'sizes',
  admin: {
    useAsTitle: 'size',
  },
  fields: [
        {
          name: 'size',
          type: 'text',
          required: true,
        },
    ]
}
