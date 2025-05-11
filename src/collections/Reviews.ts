import { CollectionConfig } from 'payload';
import payload from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin:{
    useAsTitle:'comment'
  },
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'userName',
      type:'relationship',
      relationTo:'customers'
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'comment',
      type: 'textarea',
      required: true,
      localized:true
    },
    {
      name: 'postedDate',
      type: 'date',
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        try {
          const productId = typeof doc.product === 'string' ? doc.product : doc.product.id;
  
          // Fetch all reviews of this product
          const { docs: reviews } = await req.payload.find({
            collection: 'reviews',
            where: {
              product: {
                equals: productId,
              },
            },
            limit: 1000,
          });
          
          if (reviews.length === 0) return;
          const ratings = reviews.map((review) => review.rating || 0);
        console.log('Ratings:', ratings);
          // Calculate average rating
          const total = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
          const average = total / reviews.length;
  
          // Update the product's averageRating
          await req.payload.update({
            collection: 'products',
            id: productId,
            data: {
              averageRating: Math.round(average * 100) / 100,
            },
          });
        } catch (err) {
          console.error('Error updating average rating:', err);
        }
      },
    ],
    afterDelete: [
        async ({ doc, req }) => {
          try {
            const productId = typeof doc.product === 'string' ? doc.product : doc.product.id;
    
            const { docs: reviews } = await req.payload.find({
              collection: 'reviews',
              where: {
                product: {
                  equals: productId,
                },
              },
              limit: 1000,
            });
    
            // If no reviews left, set averageRating to 0
            if (reviews.length === 0) {
              await req.payload.update({
                collection: 'products',
                id: productId,
                data: {
                  averageRating: 0,
                },
              });
              return;
            }
            const ratings = reviews.map((review) => review.rating || 0);
            console.log('Ratings:', ratings);
            const total = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
            const average = total / reviews.length;
    
            await req.payload.update({
              collection: 'products',
              id: productId,
              data: {
                averageRating: Math.round(average * 100) / 100,
              },
            });
          } catch (err) {
            console.error('Error updating average rating on delete:', err);
          }
        },
      ],
  }
  
  
}
