import { CollectionConfig } from 'payload';
import payload from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized:true
    },
    {
        name:'Description',
        type:'textarea'
    },
    {
        name:'brand',
        type:'relationship',
        relationTo:'brands'
    },
    
      {
        name: 'category',
        type: 'relationship',
        relationTo: 'categories',
        hasMany: true,
        required:true,
        filterOptions: () => {
            return {
            parentCategory: {
                exists: true,
              },
            };
          }
        
        
      }
      ,
    {
        name: 'averageRating',
        type: 'number',
        admin: {
          readOnly: true,
        },
      },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    
    
    {
      name: 'onsale',
      type: 'checkbox',
      label: 'On Sale?',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      label: 'Discount %',
      min: 0,
      max: 100,
      admin: {
        condition: (_, siblingData) => siblingData?.onsale === true,
      },
    },
    {
      name: 'discountedPrice',
      type: 'number',
      label: 'Discounted Price',
      admin: {
        readOnly: true,
        condition: (_, siblingData) => siblingData?.onsale === true,
      },
    },
    {
      name: 'salesCount',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    
    
    {
        name: 'attributes',
        label: 'Product Attributes',
        type: 'array',
        fields: [
          {
            name: 'attribute',
            label: 'Attribute',
            type: 'relationship',
            relationTo: 'attributes',
            required: true,
          },
          {
            name: 'options',
            label: 'Available Options',
            type: 'relationship',
            relationTo: 'attributeOptions',
            hasMany: true,
            required: true,
            filterOptions: ({ siblingData }) => {
              const attributeId = siblingData?.attribute;
              if (!attributeId) return true;
      
              return {
                attribute: {
                  equals: typeof attributeId === 'object' ? attributeId.id : attributeId,
                },
              };
            },
          },
        ],
      },
      
      {
        name: 'stock',
        type: 'array',
        label: 'Stock by Variant',
        fields: [
          {
            name: 'color',
            type: 'relationship',
            relationTo: 'colors',
            required: true,
            filterOptions: ({ data }) => {
              const availableColors = data?.availableColors || [];
              if (!Array.isArray(availableColors)) return true;
      
              return {
                id: {
                  in: availableColors.map((color: any) =>
                    typeof color === 'object' ? color.id : color
                  ),
                },
              };
            },
          },
          {
            name: 'size',
            type: 'relationship',
            relationTo: 'sizes',
            required: true,
            filterOptions: ({ data }) => {
              const availableSizes = data?.availableSizes || [];
              if (!Array.isArray(availableSizes)) return true;//dont filter=show all
      
              return {
                id: {
                  in: availableSizes.map((size: any) =>
                    //if its complete object
                    typeof size === 'object' ? size.id : size
                  ),
                },
              };
            },
          },
          { name: 'quantity', type: 'number', required: true },
        ],
      }
      ,
      

  
      
    {
      name: 'isNewArrival',
      type: 'checkbox',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'isTopSeller',
      type: 'checkbox',
      admin: {
        readOnly: true,
      },
    },
    {
        name: 'images',
        label: 'Product Images',
        type: 'array',
        fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
          
        ],
      }
  ],
  hooks: {
    beforeChange: [ //before sent to db and be saved there
        async ({ data }) => {
          //if onsale is true and required values exist= calculate discounted price
          if (data.onsale && typeof data.discountPercentage === 'number' && typeof data.price === 'number') {
            const discountAmount = (data.price * data.discountPercentage) / 100;
            data.discountedPrice = Math.round((data.price - discountAmount) * 100) / 100;
          } else {
            //if onsale is false= clear discount fields
            data.discountPercentage = undefined;
            data.discountedPrice = undefined;
          }
      
          //compute isTopSeller
          const topSellerThreshold = 5;
          //if sales is null, use 0, then check if its >= threshold
          data.isTopSeller = (data.salesCount ?? 0) >= topSellerThreshold;
      
          return data;
        },
      ],
      
    afterRead: [//after data is fetched
      ({ doc }) => {
        const daysSinceCreated = (Date.now() - new Date(doc.createdAt).getTime()) / (1000 * 60 * 60 * 24);
        doc.isNewArrival = daysSinceCreated <= 30;
        return doc;
      },
    ],
  },
};
