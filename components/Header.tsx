"use client";

import Link from "next/link";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { resetAmount } from "@/lib/Balance/balanceSlice";
import { UseDispatch, useDispatch } from "react-redux";
interface HeaderProps {
    currentPage: string;
}

export function Header({ currentPage }: HeaderProps): JSX.Element {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLogout = () => {
        setTimeout(() => {
            dispatch(resetAmount());
            router.push("/login");
        }, 1000);
    };

    const handleLogin = () => {
        router.push("/dashboard");
    };

    return (
        <header className="flex items-center justify-between p-[30px] md:p-[35px] ">
            <div className="font-bold text-[20px]">
                <Link href="/"> K H A Y </Link>
            </div>
            <div>
                {currentPage === "/" && (
                    <Link href="/login">
                        <Button variant="primary" size="sm">
                            Login
                        </Button>
                    </Link>
                )}
                {currentPage === "login" && (
                    <div>
                        {/* Add your login form here */}
                        <Button
                            size="sm"
                            variant="secondary"
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </div>
                )}
                {currentPage === "dashboard" && (
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                )}
            </div>
        </header>
    );
}
