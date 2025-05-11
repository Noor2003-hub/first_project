import {Block} from "payload";
const localizeFields = (fields) =>
    fields.map((field) => ({
      ...field,
      localized: true
    }));
export const StylesSection: Block={
    slug:'stylesSection',
    fields:localizeFields([
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
      
    ])
}