import {Block} from "payload";
import { Cover } from "../cover/schema";
import { Image } from "../image/schema";
import { RichText } from "../richText/schema";
export const Hero: Block={
    slug:'hero',
    fields:[
        {
            name:'layouts',
            type:'blocks',
            blocks:[RichText,
                Image,
            ]
        },
        {
            name:'records',
            type:'array',
            fields:[
            {
                name:'title',
                type:'text',

            },
            {
                name:'record',
                type:'number'
            }
            ]
        },

    //     {
    //         name:'content',
    //         label:'Content',
    //         type:'richText',
    //         required:true
    //     },
    //     {
    //         name:'img',
    //         label:'Iamge',
    //         type:'upload',
    //         relationTo:'media',
    //         required:true
    //     },
    //     {
    //               name:'records',
    //               type:'array',
    //               fields:[
    //                 {
    //                   name:'title',
    //                   type:'text',
        
    //                 },
    //                 {
    //                   name:'record',
    //                   type:'number'
    //                 }
    //               ]
    //             },
   

    ]
}