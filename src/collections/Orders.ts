import type { CollectionConfig } from 'payload'
export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'customer',
  },
  fields: [
    {
      name:'customer',
      type:'relationship',
      required:true,
      relationTo:'customers'
    },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'paid', 'shipped', 'cancelled'],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          required: true,
        },
        {
          name: 'size',
          type: 'text',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        try {
          const productId = doc.product;
          if (!productId) return;

          //get all reviews for this product
          const allReviews = await req.payload.find({
            collection: 'reviews',
            where: {
              product: {
                equals: productId,
              },
            },
            limit: 1000, //Should use pagination!!
          });

          //calculate average rating
          const ratings = allReviews.docs.map((r) => r.rating);
          const total = ratings.reduce((sum, r) => sum + r, 0);
          const average = total / ratings.length;

          //get current product
          const product = await req.payload.findByID({
            collection: 'products',
            id: typeof productId === 'string' ? productId : productId.id,
          });

          //update the averageRating field
          await req.payload.update({
            collection: 'products',
            id: product.id,
            data: {
              averageRating: Math.round(average * 100) / 100,
            },
          });
        } catch (err) {
          console.error('Error updating average rating:', err);
        }
      },
    ],
  },
};