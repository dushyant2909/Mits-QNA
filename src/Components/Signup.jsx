import React, { useState } from 'react'
import { InputComponent, Button } from '../Components'
import { useForm } from 'react-hook-form'
import { FaEye } from 'react-icons/fa'
import { IoMdEyeOff } from "react-icons/io";

function Signup() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const [passwordToggler, setpasswordToggler] = useState(false);

    const signup = async (data) => {
        setError("");
        console.log("Signup data::", data);
    }

    return (
        <div className="flex items-center mx-4 justify-center w-full">
            <div className={`flex flex-col w-full max-w-lg bg-gray-100 rounded-xl p-5 border border-black/20`}>
                {error && <p className="text-red-600 mt-2 text-center">{error}</p>}

                <form onSubmit={handleSubmit(signup)}>
                    <div className='space-y-5 '>
                        <InputComponent
                            label="Roll Number: "
                            placeholder="Enter your roll number"
                            {...register("rollnumber", {
                                required: true,
                            })}
                        />
                        <InputComponent
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <InputComponent
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <div className="relative">
                            <InputComponent
                                label="Password: "
                                type={passwordToggler ? "text" : "password"}
                                placeholder="Enter your password (min-8 char)"
                                {...register("password", {
                                    required: true,
                                    minLength: 3
                                })}
                            />
                            <span className="absolute top-11 right-3 cursor-pointer text-xl"
                                onClick={() => setpasswordToggler(!passwordToggler)}>
                                {passwordToggler ? <FaEye /> : <IoMdEyeOff />}
                            </span>
                        </div>
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup