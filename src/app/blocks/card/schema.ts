import {Block} from "payload";
import { Cover } from "../cover/schema";
import { Image } from "../image/schema";
import { RichText } from "../richText/schema";
export const Card: Block={
    slug:'card',
    fields:[
    {
        name:'product',
        type:'relationship',
        relationTo:'products'
    }
    ]
}