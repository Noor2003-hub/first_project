// AttributeOptions collection
import type { CollectionConfig } from 'payload';

export const AttributeOptions: CollectionConfig = {
  slug: 'attributeOptions',
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
        name: 'attribute',
        type: 'relationship',
        relationTo: 'attributes',
        required: true,
      },
      {
      name: 'label',
      type: 'text',
      required: true,
    },
    
    {
      name: 'extraFields',
      type: 'array',
      fields: [
        {
          name: 'value',
          label: 'Field value',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
