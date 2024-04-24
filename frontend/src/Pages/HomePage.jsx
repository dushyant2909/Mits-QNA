import React, { useEffect, useState } from 'react'
import { LeftSideBar, QuestionDisplayCard } from '../Components/index'
import { Questions } from '../../data'

function HomePage() {
    const questions = Questions
    // const [questions, setQuestions] = useState([]);
    // console.log('hey');
    // useEffect(() => {
    //     fetch('http://localhost:3000/api/questions')
    //         .then(response => response.json())
    //         .then(data => setQuestions(data))
    //         .catch(error => console.error('Error:', error));
    // }, []);
    // console.log(questions);
    return (
        <div className='min-h-screen grid grid-cols-12 px-8'>
            <div className="col-span-2 border-r border-r-black/20 py-5 px-5">
                <LeftSideBar />
            </div>
            <div className="col-span-10 flex flex-col gap-4 h-screen overflow-y-auto mt-6 px-8 py-5 pb-10 w-full ">
                <ul className="menu menu-horizontal bg-base-200 rounded-box w-56">
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Open
                        </a>

                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Closed
                        </a>

                    </li>
                </ul>
                {questions.map((question) => (
                    <QuestionDisplayCard key={question.id} question={question} />
                ))}
            </div>
        </div>
    )
}

export default HomePage