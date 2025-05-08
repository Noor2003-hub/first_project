import {Block} from "payload";

export const ProductsSection: Block={
    slug:'productsSection',
    fields:[
        {
            name:'title',
            type:'text'
        },
        {
            name:'products',
            type:'relationship',
            relationTo:'products',
            hasMany:true
        }
      
    ]
}