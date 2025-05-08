import type { CollectionConfig } from 'payload';

export const Subcategories: CollectionConfig = {
    slug: 'subcategories',
    admin:{
        useAsTitle:'title'
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'category',
        type: 'relationship',
        relationTo: 'categories', // Relating it to a parent category
        hasMany: false,
      },
    ],
  };
  