// import type { CollectionConfig } from 'payload';
// import payload from 'payload';

// export const Stocks: CollectionConfig = {
//   slug: 'stocks',
//   admin: {
//     useAsTitle: 'id',
//   },
//   fields: [
//     {
//       name: 'product',
//       type: 'relationship',
//       relationTo: 'products',
//       required: true,
//     },
//     {
//       name: 'color',
//       type: 'relationship',
//       relationTo: 'colors',
//       required: true,
//       filterOptions: async ({ siblingData }) => {
//         if (!siblingData?.product) return true;

//         // Fetch the product to get availableColors
//         const product = await payload.findByID({
//           collection: 'products',
//           id: siblingData.product,
//         });

//         const availableColorIDs = product?.availableColors?.map(c => typeof c === 'object' ? c.id : c) || [];

//         return {
//           id: {
//             in: availableColorIDs,
//           },
//         };
//       },
//     },
//     {
//       name: 'size',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'quantity',
//       type: 'number',
//       required: true,
//     },
//   ],
//   hooks: {
//     beforeChange: [
//       async ({ data }) => {
//         if (data.product && data.color) {
//           const product = await payload.findByID({
//             collection: 'products',
//             id: data.product,
//           });

//           const availableColorIDs = product?.availableColors?.map(c => typeof c === 'object' ? c.id : c) || [];

//           if (!availableColorIDs.includes(data.color)) {
//             throw new Error('Selected color is not available for this product.');
//           }
//         }

//         return data;
//       },
//     ],
//   },
// };
