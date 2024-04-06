import React from 'react'
import { AskQuestionForm, LeftSideBar } from '../Components'

function AskQuestionPage() {
    return (
        <div className='min-h-screen grid grid-cols-12 px-8 overflow-y-auto'>
            <div className="col-span-2 border-r border-r-black/20 py-5 px-5">
                <LeftSideBar />
            </div>
            <div
                className="col-span-10 flex flex-col overflow-y-auto h-screen px-8 mt-[4.5rem] pt-5
                 pb-10 w-full">
                <AskQuestionForm />
            </div>
        </div>
    )
}

export default AskQuestionPage