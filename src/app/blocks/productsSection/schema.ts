import {Block} from "payload";

export const ProductsSection: Block={
    slug:'productsSection',
    fields:[
        {
            name:'title',
            type:'text',
            localized:true
        },
        {
            name:'products',
            type:'relationship',
            relationTo:'products',
            hasMany:true
        }
        ,
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