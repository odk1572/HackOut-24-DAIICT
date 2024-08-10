import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            console.log("Attempting login with data:", data); // Debug log
            const session = await authService.login(data);
            console.log("Session created:", session); // Debug log
            if (session) {
                const userData = await authService.getCurrentUser();
                console.log("User Data:", userData); // Debug log
                if (userData) {
                    dispatch(authLogin({ userData }));
                    navigate("/");
                } else {
                    setError("Failed to retrieve user data.");
                }
            } else {
                setError("Failed to create session.");
            }
        } catch (error) {
            console.error("Login Error:", error); // Debug log
            setError(error.message || "An error occurred during login.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-lg from-white to-blue-400 rounded-xl p-8 border border-gray-300">
                <div className="mb-6 flex justify-center">
                    <Logo width="100px" className='text-blue-900'/>
                </div>
                <h2 className="text-center text-2xl text-blue-900 font-bold mb-4">Login to your account</h2>
                <p className="text-center text-base text-gray-600 mb-6">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-medium text-primary text-blue-900 hover:underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 text-center mb-6">{error}</p>}
                <form onSubmit={handleSubmit(login)}>
                    <div className="space-y-4">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Email address must be valid",
                                },
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                        />
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;