"use client";
import Link from "next/link";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

interface HeaderProps {
    currentPage: string;
}

export function Header({ currentPage }: HeaderProps): JSX.Element {
    const router = useRouter();

    const handleLogout = () => {
        setTimeout(() => {
            router.push("/login");
        }, 1000);
    };

    const handleLogin = () => {
        router.push("/dashboard");
    };

    return (
        <header className="flex items-center justify-between p-[30px] md:p-[35px] ">
            <div className="font-bold text-[20px]">
                <Link href="/"> K.Transact </Link>
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
