import type { GlobalBeforeValidateHook,GlobalBeforeChangeHook } from 'payload'

export const beforeValidateHook: GlobalBeforeValidateHook = async ({
  global,data,
  req,
  originalDoc,
}) => {
    if (global.slug==='footer'){
        console.log('admin group=',global)
    }
  return data
}
export const beforeChangeeHook: GlobalBeforeChangeHook = async ({
    global,data,
    req,
    originalDoc,
  }) => {
      console.log(data)
  }