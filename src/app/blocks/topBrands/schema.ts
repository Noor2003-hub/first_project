import {Block} from "payload";

export const TopBrands: Block={
    slug:'topBrands',
    fields:[
        {
            name:'topBrands',
            label:'Top Brands',
            type:"relationship",
            relationTo:'brands',
            hasMany:true
        },
      
    ]
}