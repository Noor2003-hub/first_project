import {Block} from "payload";

export const StylesSection: Block={
    slug:'stylesSection',
    fields:[
        {
            name:'title',
            type:'text'
        },
        {
            name:'styles',
            type:'relationship',
            relationTo:'styles',
            hasMany:true
        }
      
    ]
}