import {Block} from "payload";

export const CommentsSection: Block={
    slug:'commentsSection',
    fields:[
        {
            name:'title',
            type:'text'
        },
        {
            name:'comments',
            type:'relationship',
            relationTo:'reviews',
            hasMany:true
        }
      
    ]
}