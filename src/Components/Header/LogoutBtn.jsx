import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/slices/authSlice'
import toast from 'react-hot-toast'
import axios from 'axios'

function LogoutBtn() {
    const dispatch = useDispatch();

    // const logoutHandler = () => {
    //     // as logout is a promise so we use.then
    //     authService.logout()
    //         .then(() => {
    //             dispatch(logout())
    //             toast.success("Logged out successfully")
    //         })
    //         .catch((error) => {
    //             console.error("Error in logout::", error)
    //             toast.error("Error in logging out")
    //         })
    // }

    const logoutHandler = async () => {
        try {
            const response = await axios.post('/api/v1/users/logout');
            if (response.status === 201) {
                dispatch(logout())
            }
            else {
                console.log(response.data.message); // Assuming the backend sends error messages as JSON
            }
        } catch (error) {
            // Handle network errors or other exceptions
            if (error.response) {
                // The request was made and the server responded with a status code
                let errorMessage = 'Failed to logout'; // Default error message
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
                console.log(errorMessage);
            } else if (error.request) {
                // The request was made but no response was received
                console.log('No response received from the server');
            } else {
                // Something else happened in making the request
                console.log('Error in processing the request');
            }
            console.error('Error in logout:', error);
        }
    }

    return (
        <button
            className='text-black text-xl font-semibold flex items-center justify-center px-4 py-1 duration-200 border bg-red-100 border-red-400 hover:text-red-400 rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn