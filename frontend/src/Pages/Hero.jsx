// import { Link } from 'react-router-dom';
//import ReactTyped from 'react-typed';

import { Link } from "react-router-dom"

function Hero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary"><Link to='login'>Get Started</Link></button>
                </div>
            </div>
        </div>
        // <div className='text-white'>
        //     <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        //         <p className='text-[#00df9a] font-bold p-2'>
        //             GROWING WITH DATA ANALYTICS
        //         </p>
        //         <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        //             Grow with data.
        //         </h1>
        //         <div className='flex justify-center items-center'>
        //             <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
        //                 Fast, flexible financing for
        //             </p>
        //             {/* <ReactTyped
        //                 className='md:text-5xl sm:text-4xl text-xl font-bold text-[#00df9a] md:pl-4 pl-2'
        //                 strings={['BTB', 'BTC', 'SASS']}
        //                 typeSpeed={100}
        //                 loop
        //                 backSpeed={20}
        //                 cursorChar="_"
        //                 showCursor={true}
        //             /> */}
        //         </div>
        //         <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        //         <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><Link to='/logs'>Get Started</Link></button>
        //     </div>
        // </div>
    )
}

export default Hero