import { Block, CollectionConfig } from 'payload'
import MyCustomUIField from '../components/MyCustomUIField'
import MyCustomUICell from '../components/MyCustomUICell'
const QuoteBlock: Block = {
  slug: 'Quote', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
  fields: [
    
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
}

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'backgroundImage', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    }, 
    // {
    //   name: 'myCustomUIField', // required
    //   type: 'ui', // required
    //   admin: {
    //     components: {
    //       Field: MyCustomUIField,
    //       Cell: MyCustomUICell,
    //     },
    //   },
    // },
    {
      name: 'purchase',
      type: 'relationship',
      relationTo: ['users','pages'],
      hasMany:false
      // filterOptions: () => {
      //   return {role:{
      //     contains:'User'
      //   }  }      
      // },
    },
    {
      label: ({ data }) => data?.title || 'Untitled',
      type: 'collapsible', // required
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'someTextField',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'color', // required
      type: 'radio', // required
      options: [
        // required
        {
          label: 'Mint',
          value: 'mint',
        },
        {
          label: 'Dark Gray',
          value: 'dark_gray',
        },
      ],
      defaultValue: 'mint', // The first value in options.
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'age', // required
      type: 'number', // required
      required: true,
      admin: {
        step: 1,
      },
    },
    {
      name: 'pageMeta', // required
      type: 'array', // required
      interfaceName: 'Meta', // optional
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 2,
          maxLength: 5,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 2,
          maxLength: 20,
        },
      ],
    },
    {
      name: 'contact', // required
      type: 'email', // required
      label: 'Contact Email Address',
      required: true,
    },
      {
        name: 'dateOnly',
        type: 'date',
        admin: {
          date: {
            pickerAppearance: 'dayOnly',
            displayFormat: 'd MMM yyy',
          },
        },
      },
      {
        name: 'timeOnly',
        type: 'date',
        admin: {
          date: {
            pickerAppearance: 'timeOnly',
            displayFormat: 'h:mm:ss a',
          },
        },
      },
      {
        name: 'monthOnly',
        type: 'date',
        admin: {
          date: {
            pickerAppearance: 'monthOnly',
            displayFormat: 'MMMM yyyy',
          },
        },
      },
    {
      name: 'trackingCode', // required
      type: 'code', // required
      required: true,
      admin: {
        language: 'javascript',
      }},
    {
      name: 'enableCoolStuff', // required
      type: 'checkbox', // required
      label: 'Click me to see fanciness',
      
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        QuoteBlock,
      ],
    },
  ],
}