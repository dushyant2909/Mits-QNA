import React, { forwardRef, useId } from 'react'

function InputComponent({ label, required = "true", type = "text", className = '', ...props }, ref) {

    const id = useId();

    return (
        <div className='w-full'>
            {label && <label
                className='inline-block pl-1 mb-1 font-semibold text-lg'
                htmlFor={id}>
                {label}
            </label>
            }
            <input type={type}
                required
                className={`px-3 py-2 rounded-lg bg-white
                text-black outline-none focus:bg-gray-50 
                focus:border-gray-400
                duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
}

export default forwardRef(InputComponent)