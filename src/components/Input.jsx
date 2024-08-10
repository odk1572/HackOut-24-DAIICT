import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (
        <div className="w-full mb-4">
            {label && (
                <label 
                    className="block mb-1 text-sm font-semibold text-gray-700" 
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 outline-none focus:bg-white focus:border-blue-500 duration-200 border border-gray-200 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default Input;
