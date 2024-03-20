import React, { useState, useEffect } from 'react'
import { InputComponent, Button, Loader } from '../Components'
import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'
import { FaEye } from 'react-icons/fa'
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { login } from '../store/slices/authSlice'

function Signup() {
    const { register, handleSubmit, control, formState } = useForm();
    const { errors } = formState
    const [error, setError] = useState("");
    const [loader, setloader] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setloader(false);
    }, []);

    const [passwordToggler, setpasswordToggler] = useState(false);

    const signup = async (data) => {
        setError("");
        setloader(true);
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData)
                    dispatch(login(userData));
                toast.success("Registered-successfully")
                navigate('/')
            }
        } catch (error) {
            setError(error.message);
            console.log("Error in signup::", error);
            toast.error("Failed to register")
        }
        finally {
            setloader(false);
        }
    }

    if (loader)
        return <Loader />

    return (
        <div
            className={`flex flex-col max-w-lg w-full border border-black/50 mt-[4.5rem] bg-gray-100 rounded-xl p-5 shadow-lg`}
        >
            {error && <p className="text-red-600 mt-2 text-center">{error}</p>}

            <form onSubmit={handleSubmit(signup)} noValidate>
                <div className='space-y-3 '>
                    <InputComponent
                        label="Roll Number: "
                        placeholder="Enter your roll number"
                        {...register("rollnumber", {
                            required: {
                                value: true,
                                message: "Roll number is required"
                            },
                        })}
                    />
                    <div className="text-red-700 font-semibold px-1">{errors.rollnumber?.message}</div>
                    <InputComponent
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Full-name is required"
                            },
                        })}
                    />
                    <div className="text-red-700 font-semibold px-1">{errors.name?.message}</div>
                    <InputComponent
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register('email', {
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@mitsgwl(\.ac\.in|\.in)$/,
                                message: "Invaid email format or outside mits"
                            },
                            required: "Email field is required"

                        })}
                    />
                    <div className="text-red-700 font-semibold px-1">{errors.email?.message}</div>
                    <div className="relative">
                        <InputComponent
                            label="Password: "
                            type={passwordToggler ? "text" : "password"}
                            placeholder="Enter your password (min-4 char)"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password field is reaquired"
                                },
                                minLength: {
                                    value: 4,
                                    message: "Password length must be atleast 4"
                                }
                            })}
                        />
                        <div className="text-red-700 font-semibold px-1">{errors.password?.message}</div>
                        <span className="absolute top-11 right-3 cursor-pointer text-xl"
                            onClick={() => setpasswordToggler(!passwordToggler)}>
                            {passwordToggler ? <FaEye /> : <IoMdEyeOff />}
                        </span>
                    </div>
                    <div className="w-full flex justify-center">
                        <Button type="submit" className="w-full font-semibold hover:bg-blue-700 mt-3">
                            Create Account
                        </Button>
                    </div>
                    <div className="w-full text-center">
                        <Link to={'/login'}
                            className='text-sm text-blue-600 hover:text-blue-800 transition-all font-semibold'>Already have an account? Login</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup