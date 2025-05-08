import Rating from '@/app/(frontend)/components/Rating'
import React from 'react'

type Comment = {
  name: string
  comment: string
  rating: number
}

type Props = {
  title: string
  comments: Comment[]
}

const CommentsSectionServer: React.FC<Props> = ({ title, comments }) => {
  console.log('comments==',comments)
  return (
    <section className="my-16">
      <h2 className="text-3xl font-extrabold text-center mb-8">{title}</h2>
      <div className="flex flex-row gap-8">
        {comments.map((c, index) => (
          <div key={index} className="card rounded-4xl bg-base-100 justify-between w-[400px] h-[240px] border-[1px] border-gray-100 ">
          <div className="card-body">
            <Rating rate={c.rating} haveText={false} />
            <h2 className="card-title font-bold text-xl">{c.userName.name}<img src="/valid.png" /></h2>
            <p className='text-gray-600'>"{c.comment}"</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
          // <div key={index} className="bg-white p-6 rounded-xl ">
          //   <div className="flex items-center mb-3">
          //     <div className="font-bold">{c.name}</div>
          //     <span className="ml-2 text-yellow-500">
          //       {'★'.repeat(c.rating)}{'☆'.repeat(5 - c.rating)}
          //     </span>
          //   </div>
          //   <p className="text-gray-600">"{c.comment}"</p>
          // </div>
        ))}
      </div>
    </section>
  )
}

export default CommentsSectionServer
