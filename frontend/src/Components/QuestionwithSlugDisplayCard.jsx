import React from 'react'
import { Link } from 'react-router-dom'
import dislike from '../../public/dislike.svg'

function QuestionwithSlugDisplayCard({ question }) {
    const { title, tags, votes, answers, askedBy, slug, desc, likes, dislikes } = question
    return (
        <div
            className='border border-black/40 shadow-md grid grid-cols-8 p-3 px-4 rounded-md'>
            <div className="col-span-1 flex flex-col items-center gap-2 justify-center text-gray-700">
                <div className="">{votes} votes</div>
                <div className="">{answers} answers</div>
                
            </div>
            <div className="col-span-7 flex flex-col gap-4 bg-yellow-50 rounded-xl border-[0.1px] border-gray-200 p-2 pl-3 cursor-pointer">
                <div className="font-medium text-lg text-blue-800 hover:text-blue-950 transition-all">{title}</div>
                <div className="font-light text-lg text-gray hover:text-blue-950 transition-all">{desc}</div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        {tags.map((tag) => (
                            // <div className="bg-gray-200 py-1 px-3 flex items-center justify-center rounded-lg" key={tag}>
                            //     {tag}
                            // </div>
                            <div className='flex items-center justify-center badge badge-outline badge-info' key={tag}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className='flex gap-4'>
                        {/* conditional fill="red" */}
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="red" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            {likes}
                        </button>
                        <button className="btn btn-outline btn-error ">
                            {/* <img src="dislike.svg" alt="" className='w-4 h-4'/> */}
                            {dislikes}
                        </button>
                    </div>
                    <div className="text-sm pr-3 text-gray-700 hover:text-gray-800">asked by: {askedBy}</div>
                </div>
            </div>
        </div>
    )
}

export default QuestionwithSlugDisplayCard