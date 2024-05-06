import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import Link from "next/link";
export default function Home() {
    return (
        <div className="h-screen bg-center bg-cover md:bg-bg-hero bg-no-repeat ">
            <Header currentPage={"/"} />
            <main className="flex text-center flex-col items-center  px-[30px] pt-36 md:px-20  relative">
                <h1 className="font-bold text-3xl w-[100%] leading-[1.15] mb-4  md:text-6xl md:w-[60%]">
                    Pay or Receive Money Anywhere, Anytime
                </h1>
                <p className="font-medium  text-sm md:text-xl mb-4 md:w-[45%] leading-[1.25]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci sapiente distinctio voluptatum error ipsam repellat
                    laboriosam ipsum voluptate alias.
                </p>
                <Link href="/login">
                    <Button variant="primary" type="button" size="md">
                        Get Started
                    </Button>
                </Link>
            </main>
        </div>
    );
}
