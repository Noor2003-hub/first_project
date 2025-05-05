import { parseVersionInfo } from 'next/dist/server/dev/parse-version-info'
import type { FieldHook } from 'payload'


export const afterChangeHook: FieldHook = async ({
    value, previousValue, req ,operation
  }) => {
      if (operation==='create'){
        if (previousValue===value){
            
        } else{

        }

        }else if (operation==='update'){
      }
  }