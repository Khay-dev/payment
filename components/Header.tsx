import Link from "next/link";
import { Button } from "./Button";

interface HeaderProps {
    currentPage: string;
}
export function Header({ currentPage }: HeaderProps): JSX.Element {
    return (
        <header className="flex items-center justify-between p-[30px] md:p-[35px] ">
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
                {currentPage === "dashboard" && (
                    <Button size="sm" variant="secondary">
                        Logout
                    </Button>
                )}
            </div>
        </header>
    );
}
