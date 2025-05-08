import type { CollectionConfig } from 'payload'
export const Brands: CollectionConfig = {
  slug: 'brands',
  admin: {
    useAsTitle:'name',
  },
  fields: [
  {
    name:'name',
    type:'text'
  },
  {
    name:'logo',
    type:'upload',
    relationTo:'media'
  }
  ],
  
};
