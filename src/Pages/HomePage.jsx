import React from 'react'
import { LeftSideBar, QuestionDisplayCard } from '../Components/index'

function HomePage() {
    return (
        <div className='min-h-screen grid grid-cols-12 mt-[4.5rem] px-8'>
            <div className="col-span-2 border-r border-r-black/20 py-5 px-5">
                <LeftSideBar />
            </div>
            <div className="col-span-10 flex flex-col gap-4 h-screen overflow-y-auto mt-5 px-8 py-5 pb-10 w-full ">
                <QuestionDisplayCard question={"How to apply for MMVY Scholarship"} />
                <QuestionDisplayCard question={"From where to get NOC Certificate"} />
                <QuestionDisplayCard question={"How to pay college fees through IMS portal"} />
                <QuestionDisplayCard question={"What are the minimum marks to qualify a Semester"} />
                <QuestionDisplayCard question={"Details about internship in 6th and 8th Semester"} />
                <QuestionDisplayCard question={"How to find CGPA out of SGPA"}/>

            </div>
        </div>
    )
}

export default HomePage