import { Cover } from '@/app/blocks/cover/schema';
import { RichText } from '@/app/blocks/richText/schema';
import { Image } from '@/app/blocks/image/schema';
import type { CollectionConfig } from 'payload';
import { afterChangeHook } from './fieldHooks';
import { Hero } from '@/app/blocks/hero/schema';
import { ProductsSection } from '@/app/blocks/productsSection/schema';
import { StylesSection } from '@/app/blocks/stylesSection/schema';
import { CommentsSection } from '@/app/blocks/commentsSection/schema';
import { Newsletter } from '@/app/blocks/newsletter/schema';
import { TopBrands } from '@/app/blocks/topBrands/schema';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
        {
            name:'name',
            type:'text',
            label:'Name',
            required:true,
        },
        {
            name:'slug',
            type:'text',
            label:'Slug',
            
            admin:{
                position:'sidebar'
            },
            required:true
        },
        
        
        
          {
            name:'sections',
            type:'blocks',
            blocks:
              [Hero,
                ProductsSection,
                StylesSection,
                CommentsSection,
                Newsletter,
                TopBrands
              ]}
            
        
      ],}
            
        