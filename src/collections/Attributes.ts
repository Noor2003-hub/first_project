import type { CollectionConfig } from 'payload';

export const Attributes: CollectionConfig = {
  slug: 'attributes',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Attribute Name',
      type: 'text',
      required: true,
    },
    {
      name: 'options',
      label: 'Attribute Options',
      type: 'relationship',
      relationTo: 'attributeOptions',
      hasMany: true,  // Allows multiple options
    },
  ],
};
