import React, { useState } from 'react'
import { InputComponent, Button } from '../Components'
import { FaEye } from 'react-icons/fa'
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from 'react-hook-form'

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
        <div className='w-full flex flex-col justify-center mb-10'>
            <form className="border border-black/50 p-4 rounded-lg bg-neutral-50 mx-auto"
                onSubmit={handleSubmit(login)}>
                {error &&
                    <p className="text-red-600 mt-2 text-center">{error}</p>
                }
                <InputComponent
                    label="Email: "
                    placeholder="Enter your email"
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
                        type={passwordToggler ? "text" : "password"}
                        {...register("password", {
                            required: true,
                        })} />
                    <span className="absolute top-11 right-3 cursor-pointer text-xl"
                        onClick={() => setpasswordToggler(!passwordToggler)}>
                        {passwordToggler ? <FaEye /> : <IoMdEyeOff />}
                    </span>
                </div>
                <div className=" mb-6 flex justify-end text-blue-600 cursor-pointer hover:text-blue-800 text-sm">forgot password?</div>
                <Button
                    type="submit"
                    className="w-full"
                >Login</Button>
            </form>
        </div>
    )
}

export default Login