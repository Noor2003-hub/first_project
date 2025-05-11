// blocks/NewsletterCTA.ts
import { Block } from 'payload'

export const Newsletter: Block = {
  slug: 'newsletter',
  fields:[
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'STAY UPTO DATE ABOUT OUR LATEST OFFERS',
      localized:true
    },
    {
      name: 'placeholderText',
      type: 'text',
      defaultValue: 'Enter your email address',
      localized:true
    },
    {
      name: 'buttonLabel',
      type: 'text',
      defaultValue: 'Subscribe to Newsletter',
      localized:true
    },
    {
      name: 'backgroundColor',
      type: 'text',
      defaultValue: 'black',
      admin: {
        description: 'Tailwind class or HEX color',
      },
    },
  ]
}


