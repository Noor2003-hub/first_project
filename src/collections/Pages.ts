import { Cover } from '@/app/blocks/cover/schema';
import { RichText } from '@/app/blocks/richText/schema';
import { Image } from '@/app/blocks/image/schema';
import type { CollectionConfig } from 'payload';
import { afterChangeeHook } from './fieldHooks';

export const Pages: CollectionConfig = {
  slug: 'pages',
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
            name:'layout',
            type:'blocks',
            label:'Layout',
            blocks:[
                Cover,
                RichText,
                Image
          ],
          required:true
        },
        {
            name:'textarea',
            type:"textarea",
            hooks:{
               beforeValidate:[],
               beforeChange:[],
               afterChange:[afterChangeeHook],
               afterRead:[],
               beforeDuplicate:[]

            }
        }
      ],}
            
        