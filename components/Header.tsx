import Link from "next/link";
import { Button } from "./Button";

interface HeaderProps {
    currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
    return (
        <header className="flex items-center justify-between p-7 ">
            <div className="font-bold text-[25px]"> K H A Y</div>
            <div>
                {currentPage === "/" && (
                    <Link href="/login">
                        <Button variant="primary" >Login </Button>{" "}
                    </Link>
                )}
                {currentPage === "login" && <div />}
                {currentPage === "dashboard" && <div>Welcome back daniel</div>}
            </div>
        </header>
    );
};
