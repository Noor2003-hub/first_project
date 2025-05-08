import type { CollectionConfig } from 'payload'
export const Styles: CollectionConfig = {
  slug: 'styles',
  admin: {
    useAsTitle:'name',
  },
  fields: [
  {
    name:'name',
    type:'text'
  },
  {
    name:'cover',
    type:'upload',
    relationTo:'media'
  }
  ],
  
};
