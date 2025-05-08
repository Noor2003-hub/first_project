import type { CollectionConfig } from 'payload'
export const Colors: CollectionConfig = {
  slug: 'colors',
  admin: {
    useAsTitle: 'colorName',
  },
  fields: [
    {name:'colorName',
    type:'text',},
    {
        name:'code',
        label:'code in hex',
        type:'text'
    }
  ],
}