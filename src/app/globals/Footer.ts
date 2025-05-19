// globals/Footer.ts
import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig={
  slug: 'footer',
  fields: [
    {
      name: 'aboutSection',
      type: 'group',
      fields: [
        {
            name:'logo',
            label:'Logo',
            type:'upload',
            relationTo:'media',
            required:true
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'We have clothes that suits your style and which you’re proud to wear. From women to men.',
          localized:true
        },
        {
          name: 'socialLinks',
          type: 'array',
          fields: [
            { name: 'platform', type: 'text' }, // e.g., Twitter, Facebook
            { name: 'url', type: 'text' },
            {
                name:'icon',
                label:'Icon',
                type:'upload',
                relationTo:'media',
                required:true
            },
          ],
        },
      ],
    },
    {
      name: 'linkSections',
      type: 'array',
      fields: [
        { name: 'heading', type: 'text',localized:true }, // e.g., Company, Help, FAQ, etc.
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'label', type: 'text',localized:true },
            { name: 'url', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'bottomNote',
      type: 'text',
      defaultValue: 'Shop.co © 2000–2023, All Rights Reserved',
      localized:true
    },
    {
      name: 'paymentIcons',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'altText', type: 'text' },
      ],
    },
  ],
}


