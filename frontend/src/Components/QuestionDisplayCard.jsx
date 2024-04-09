import React from 'react'
import { Link } from 'react-router-dom'

function QuestionDisplayCard({question}) {
  const { title, tags, votes, answers, askedBy, slug } = question
  return (
    <div
      className='border border-black/40 shadow-md grid grid-cols-8 p-3 px-4 rounded-md'>
      <div className="col-span-1 flex flex-col items-center gap-2 justify-center text-gray-700">
        <div className="">{votes} votes</div>
        <div className="">{answers} answers</div>
      </div>
      <div className="col-span-7 flex flex-col gap-4 bg-yellow-50 rounded-xl border-[0.1px] border-gray-200 p-2 pl-3 cursor-pointer">
        <div className="font-medium text-lg text-blue-800 hover:text-blue-950 transition-all"><Link to={`/question/${slug}`}>{title}</Link></div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {tags.map((tag) => (
              // <div className="bg-gray-200 py-1 px-3 flex items-center justify-center rounded-lg" key={tag}>
              //   {tag}
              // </div>
              <div className='flex items-center justify-center badge badge-outline badge-info' key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="text-sm pr-3 text-gray-700 hover:text-gray-800">{askedBy}</div>
        </div>
      </div>
    </div>
  )
}

export default QuestionDisplayCard