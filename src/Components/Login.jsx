import React, { useState } from 'react'
import { InputComponent, Button } from '../Components'
import { FaEye } from 'react-icons/fa'
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

function Login() {
    const [passwordToggler, setpasswordToggler] = useState(false);
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        console.log("DataA::", data);
        setError("");
        try {

        } catch (error) {

        }
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div className="border border-black/50 p-4 rounded-lg bg-neutral-50">
                <form className=""
                    onSubmit={handleSubmit(login)}>
                    {error &&
                        <p className="text-red-600 mt-2 text-center">{error}</p>
                    }
                    <InputComponent
                        label="Email: "
                        placeholder="Enter your email"
                        className="mb-4"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                                    .test(value) || "Email address must be a valid address",
                            }
                        })} />
                    <div className="relative">
                        <InputComponent
                            label="Password: "
                            placeholder="Enter your password"
                            className="mb-3"
                            type={passwordToggler ? "text" : "password"}
                            {...register("password", {
                                required: true,
                            })} />
                        <span className="absolute top-11 right-3 cursor-pointer text-xl"
                            onClick={() => setpasswordToggler(!passwordToggler)}>
                            {passwordToggler ? <FaEye /> : <IoMdEyeOff />}
                        </span>
                    </div>
                    <div className="flex items-center mb-4 px-1 justify-between text-blue-600 text-sm">
                        <Link to={'/signup'} className="hover:text-blue-800 cursor-pointer">Register</Link>
                        <Link to={'/forgot-password'} className="hover:text-blue-800 cursor-pointer">forgot password?</Link>
                        {/* <div className=" mb-6 flex justify-end text-blue-600 cursor-pointer hover:text-blue-800 text-sm">forgot password?</div> */}
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                    >Login</Button>
                </form>
                <Button
                    type="button"
                    className="w-full mt-5"
                >Login with Google</Button>
            </div>
        </div>
    )
}

export default Login