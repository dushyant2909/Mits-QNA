import React from 'react'
import { LeftSideBar, QuestionDisplayCard } from '../Components/index'
import { Questions } from '../../data'

function HomePage() {
    const questions = Questions
    return (
        <div className='min-h-screen grid grid-cols-12 mt-[4.5rem] px-8'>
            <div className="col-span-2 border-r border-r-black/20 py-5 px-5">
                <LeftSideBar />
            </div>
            <div className="col-span-10 flex flex-col gap-4 h-screen overflow-y-auto mt-5 px-8 py-5 pb-10 w-full ">
                {questions.map((question) => (
                    <QuestionDisplayCard key={question.id} {...question}/>
                ))}
            </div>
        </div>
    )
}

export default HomePage