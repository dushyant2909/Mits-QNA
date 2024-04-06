import React, { useState, useEffect } from 'react'
import { InputComponent, Button, Loader } from '../Components'
import { FaEye } from 'react-icons/fa'
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { login as authLogin } from '../store/slices/authSlice'
import axios from 'axios';

function Login() {
    const [passwordToggler, setpasswordToggler] = useState(false);
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState
    const [error, setError] = useState("");
    const [loader, setloader] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setloader(false);
    }, []);

    // const login = async (data) => {
    //     console.log("DataA::", data);
    //     setError("");
    //     setloader(true);
    //     try {
    //         const session = await authService.login(data);
    //         console.log("Session::", session);
    //         if (session) {
    //             const userData = await authService.getCurrentUser();
    //             if (userData)
    //                 dispatch(authLogin(userData))
    //             toast.success("Logged in successfully")
    //             navigate('/')
    //         }
    //     } catch (error) {
    //         console.log("Login.jsx error::", error);
    //         setError(error.message);
    //         toast.error("Failed to login")
    //     }
    //     finally {
    //         setloader(false);
    //     }
    // }

    const login = async (data) => {
        setError("");
        setloader(true);
        try {
            const response = await axios.post('/api/v1/users/login', data);
            console.log(response); // Assuming the backend returns some data
            if (response.status === 200) {
                dispatch(authLogin(response.data.data.user))
                navigate('/');
            }
            else {
                // Handle other response statuses (e.g., validation errors)
                setError(response.data.message); // Assuming the backend sends error messages as JSON
            }
        } catch (error) {
            // Handle network errors or other exceptions
            if (error.response) {
                // The request was made and the server responded with a status code
                let errorMessage = 'Failed to login'; // Default error message
                try {
                    // Parse the HTML response to extract the error message
                    const parser = new DOMParser();
                    const htmlDoc = parser.parseFromString(error.response.data, 'text/html');
                    const preElement = htmlDoc.querySelector('pre');
                    if (preElement) {
                        // Extract the error message and format it
                        const errorText = preElement.innerText.trim();

                        // Search for the specific error message pattern
                        const errorPattern = /Error: (.*)/; // This regex captures the message after "Error: "
                        const match = errorPattern.exec(errorText);
                        if (match && match.length > 1) {
                            errorMessage = match[1]; // Extract the specific error message
                        }
                    }
                } catch (parseError) {
                    console.error('Error parsing HTML response:', parseError);
                }
                setError(errorMessage);
            } else if (error.request) {
                // The request was made but no response was received
                setError('No response received from the server');
            } else {
                // Something else happened in making the request
                setError('Error in processing the request');
            }
            console.error('Error in login:', error);

        }
        finally {
            setloader(false);
        }
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log("REsponse::", res);
            })
            .catch((err) => { console.error("Error in google login::", err) })
    }

    if (loader)
        return <Loader />
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
                        {...register('email', {
                            pattern: {
                                value: /^[\w-]+(\.[\w-]+)*@mitsgwl(\.ac\.in|\.in)$/,
                                message: "Invaid email format or outside mits"
                            },
                            required: "Email field is required"

                        })} />
                    <div className="text-red-700 font-semibold px-1">{errors.email?.message}</div>
                    <div className="relative">
                        <InputComponent
                            label="Password: "
                            placeholder="Enter your password"
                            className="mb-3"
                            type={passwordToggler ? "text" : "password"}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password field is reaquired"
                                },
                                minLength: {
                                    value: 0,
                                    message: "Password length must be atleast 8 characters"
                                }
                            })} />
                        <div className="text-red-700 font-semibold px-1">{errors.password?.message}</div>
                        <span className="absolute top-11 right-3 cursor-pointer text-xl"
                            onClick={() => setpasswordToggler(!passwordToggler)}>
                            {passwordToggler ? <FaEye /> : <IoMdEyeOff />}
                        </span>
                    </div>
                    <div className="flex items-center mb-4 px-1 justify-between text-blue-600 text-sm">
                        <Link to={'/signup'} className="hover:text-blue-800 cursor-pointer">Register</Link>
                        <Link to={'/forgot-password'} className="hover:text-blue-800 cursor-pointer">forgot password?</Link>
                    </div>
                    <Button
                        type="submit"
                        className="w-full font-semibold border border-blue-900 hover:bg-blue-700"
                    >Login</Button>
                </form>
                <Button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full mt-5 flex items-center justify-center gap-3 font-semibold bg-green-600 border border-black text-black hover:bg-green-800"
                ><FaGoogle /> Login with Google</Button>
            </div>
        </div>
    )
}

export default Login