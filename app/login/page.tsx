"use client"
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { useState} from "react";

interface FormData {
    username: string;
    password: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        password: "",
    });
    const [nameerror, setNameError] = useState<boolean>(false);
    const [passerror, setPassError] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.username === "" && formData.password === "") {
            setNameError(true);
            setPassError(true);
        } else if (formData.username === "") {
            setNameError(true);
        } else if (formData.password === "") {
            setPassError(true);
            return;
        } else {
            setNameError(false);
            setPassError(false);
        }

        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Header currentPage="/login" />
            <main className="flex text-center flex-col gap-y-5 items-center px-[30px] pt-20 md:px-20 relative">
                <h1 className="font-bold text-3xl w-[100%] leading-[1.15] mb-5 md:text-5xl md:w-[60%]">
                    Login
                </h1>
                <form className="w-[40%] flex flex-col">
                    <label htmlFor="username" className="mb-1 font-bold text-left">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={(e) => {
                            handleChange(e);
                            setNameError(false);
                        }}
                        className="p-2 border rounded mb-2"
                        required
                    />
                    {nameerror && (
                        <p className="text-red-500 text-sm text-left  ">
                            Username cannot be empty.
                        </p>
                    )}
                    <label htmlFor="password" className="mb-1 text-left font-bold">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => {
                            handleChange(e);
                            setPassError(false);
                        }}
                        className="p-2 border rounded mb-2"
                        required
                    />
                    {passerror && (
                        <p className="text-red-500 text-sm text-left ">
                            Password cannot be empty.
                        </p>
                    )}
                    <Button onClick={handleSubmit} variant="primary">
                        Login
                    </Button>
                </form>
            </main>
        </>
    );
};

export default Login;
