import { serializeLexical } from '@/utils/serialize'

export default function RichTextServer({ content }: { content: any }) {
//   if (!content  || !content.root) {
//     console.log("this is text="+content)
//     return null // or you can render a fallback UI
//   }

  return (
    <div className='richText'>
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center py-5 text-center">
      {serializeLexical({ nodes: content.root.children })}
    </div>
    </div>
  )
}
