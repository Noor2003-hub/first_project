import React from 'react'

type Node = {
  type: string
  children?: Node[]
  text?: string
  tag?: string
  format?: number
  fields?: {
    [key: string]: any
  }
}

export function serializeLexical({ nodes }: { nodes: Node[] }) {
  return nodes.map((node, index) => {
    if (!node) return null

    switch (node.type) {
      case 'heading':
        if (node.tag === 'h1') {
          return <h1 key={index} className="text-3xl font-bold my-4">{serializeLexical({ nodes: node.children || [] })}</h1>
        }
        if (node.tag === 'h2') {
          return <h2 key={index} className="text-2xl font-bold my-3">{serializeLexical({ nodes: node.children || [] })}</h2>
        }
        if (node.tag === 'h3') {
          return <h3 key={index} className="text-xl font-bold my-2">{serializeLexical({ nodes: node.children || [] })}</h3>
        }
        break
      case 'paragraph':
        return <p key={index} className="my-2">{serializeLexical({ nodes: node.children || [] })}</p>
      case 'text':
        return <span key={index}>{node.text}</span>
      case 'list':
        if (node.tag === 'ul') {
          return <ul key={index} className="list-disc list-inside my-2">{serializeLexical({ nodes: node.children || [] })}</ul>
        }
        if (node.tag === 'ol') {
          return <ol key={index} className="list-decimal list-inside my-2">{serializeLexical({ nodes: node.children || [] })}</ol>
        }
        break
      case 'list-item':
        return <li key={index}>{serializeLexical({ nodes: node.children || [] })}</li>
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">
            {serializeLexical({ nodes: node.children || [] })}
          </blockquote>
        )
      case 'link':
        if (node.fields?.url) {
          return (
            <a
              key={index}
              href={node.fields.url}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {serializeLexical({ nodes: node.children || [] })}
            </a>
          )
        }
        break
      default:
        return null
    }
  })
}
