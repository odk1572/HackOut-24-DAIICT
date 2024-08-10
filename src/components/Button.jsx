import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} hover:bg-blue-700 hover:text-white transition duration-300`} type={type} {...props}>
            {children}
        </button>
    );
}
