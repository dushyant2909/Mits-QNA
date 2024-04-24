import React, { useEffect, useState } from 'react';
import { LeftSideBar, QuestionDisplayCard } from '../Components/index';
import axios from "axios";
import { Loader } from '../Components/index';

function HomePage() {
    const [loader, setLoader] = useState(true);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("/api/v1/question/getAllQuestions");
                console.log("Questions::", response.data.data);
                setQuestions(response.data.data); // Update state with fetched questions
            } catch (error) {
                console.error("Error in getting Questions ::", error.request);
            }
            setLoader(false); // Set loader to false after fetching data
        }

        fetchData();
    }, []);

    console.log("Questions from usestate::", questions);
    if (loader) return <Loader />;

    return (
        <div className='min-h-screen grid grid-cols-12 mt-[4.5rem] px-8'>
            <div className="col-span-2 border-r border-r-black/20 py-5 px-5">
                <LeftSideBar />
            </div>
            <div className="col-span-10 flex flex-col gap-4 h-screen overflow-y-auto mt-5 px-8 py-5 pb-10 w-full">
                {questions.map(question => (
                    <QuestionDisplayCard key={question._id} question={question} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
