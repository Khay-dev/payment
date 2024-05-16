"use client";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setName } from "@/lib/user/userSlice";

interface FormData {
    username: string;
    password: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        password: "",
    });

    const dispatch = useDispatch();

    const [nameerror, setNameError] = useState<boolean>(false);
    const [passerror, setPassError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

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
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                console.log(formData);
                dispatch(setName(formData.username));
                router.push("/dashboard");
            }, 2000);
        }
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
            <main className="flex text-center flex-col gap-y-5 items-center px-[30px] pt-20 md:px-20 relative ">
                <h1 className="font-bold  pl-3 text-left text-3xl w-[100%] leading-[1.15] mb-5 md:text-4xl md:w-[60%] md:text-center ">
                    Login
                </h1>
                <form className="w-[90%] flex flex-col md:w-[40%] border-y-2 py-5 md:border-none md:py-0">
                    <label
                        htmlFor="username"
                        className="mb-1 font-bold text-left"
                    >
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
                        className="p-2  mb-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"
                        required
                    />
                    {nameerror && (
                        <p className="text-red-500 text-sm text-left  ">
                            Username cannot be empty.
                        </p>
                    )}
                    <label
                        htmlFor="password"
                        className="mb-1 text-left font-bold"
                    >
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
                        className="p-2  mb-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"
                        required
                    />
                    {passerror && (
                        <p className="text-red-500 text-sm text-left mb-1">
                            Password cannot be empty.
                        </p>
                    )}
                    <Button
                        onClick={handleSubmit}
                        variant="primary"
                        className="flex items-center justify-center gap-3"
                    >
                        {isLoading ? (
                            <>
                                <svg
                                    className="w-4 h-4 text-gray-300 animate-spin"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                >
                                    <title>isLoading</title>
                                    <path
                                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                        stroke="currentColor"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                        stroke="currentColor"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-900"
                                    />
                                </svg>
                                <span>Logging in</span>
                            </>
                        ) : (
                            "Login"
                        )}
                    </Button>
                </form>
            </main>
        </>
    );
};

export default Login;
