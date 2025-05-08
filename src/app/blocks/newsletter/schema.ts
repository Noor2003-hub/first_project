// blocks/NewsletterCTA.ts
import { Block } from 'payload'

export const Newsletter: Block = {
  slug: 'newsletter',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'STAY UPTO DATE ABOUT OUR LATEST OFFERS',
    },
    {
      name: 'placeholderText',
      type: 'text',
      defaultValue: 'Enter your email address',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      defaultValue: 'Subscribe to Newsletter',
    },
    {
      name: 'backgroundColor',
      type: 'text',
      defaultValue: 'black',
      admin: {
        description: 'Tailwind class or HEX color',
      },
    },
  ],
}


