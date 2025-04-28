import {Block} from "payload";
export const Image: Block={
    slug:'image',
    fields:[
        {
            name:'img',
            label:'Iamge',
            type:'upload',
            relationTo:'media',
            required:true
        },
        

    ]
}