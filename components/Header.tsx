import Link from "next/link";
import { Button } from "./Button";

interface HeaderProps {
    currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
    return (
        <header className="flex items-center justify-between p-[30px] ">
            <div className="font-bold text-[20px]">
                <Link href="/"> K H A Y </Link>
            </div>
            <div>
                {currentPage === "/" && (
                    <Link href="/login">
                        <Button variant="primary" size="sm">
                            Login{" "}
                        </Button>{" "}
                    </Link>
                )}
                {currentPage === "login" && <div />}
                {currentPage === "dashboard" && <div>Welcome Back Daniel</div>}
            </div>
        </header>
    );
};
