import React from 'react'
import { AskQuestionForm, LeftSideBar } from '../Components'

function AskQuestionPage() {
    return (
        <div className='min-h-screen grid grid-cols-12 px-8 overflow-y-auto'>
            <div className="col-span-2 border-r border-r-black/20 py-5 px-5">
                <LeftSideBar />
            </div>
            <div className="col-span-10 flex flex-col gap-4 h-screen overflow-y-auto mt-5 px-8 py-5 pb-10 w-full ">
                <AskQuestionForm />
            </div>
        </div>
    )
}

export default AskQuestionPage