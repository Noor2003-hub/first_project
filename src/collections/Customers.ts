import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
   {
    name:'name',
    type:'text'
   }
    // Email added by default
    // Add more fields as needed
  ],
}
