import {Block} from "payload";
export const Cover: Block={
    slug:'cover',
    fields:[
        {
            name:'title',
            label:'Text',
            type:'text',
            required:true
        },
        {
            name:'subtitle',
            label:'Text',
            type:'textarea',
            required:true
        }

    ]
}