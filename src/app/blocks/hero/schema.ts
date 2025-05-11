import {Block} from "payload";
import { Cover } from "../cover/schema";
import { Image } from "../image/schema";
import { RichText } from "../richText/schema";

export const Hero: Block={
    slug:'hero',
    fields: [
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
                localized: true


            },
            {
                name:'record',
                type:'number',
                localized: true

            }
            ]
        },
        {
            name:'label',
            label:'Button Label',
            type:'text',
            localized:true
        },
        {
            name:'link',
            label:'Buton Link',
            type:'text'
        }



    ]
}