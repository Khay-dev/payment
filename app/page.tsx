import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import Link from "next/link";
export default function Home() {
    return (
        <div className="h-screen bg-top bg-cover bg-bg-hero bg-no-repeat w-full md:bg-center">
            <Header currentPage={"/"} />
            <main className="flex text-center flex-col items-center absolute left-[2%] top-[35%]  transform[-50%,-50%] z-50 md:top-[30%]">
                <h1 className="font-bold text-3xl w-[100%] leading-[1.15] mb-4  md:text-5xl md:w-[60%]">
                    Pay or Receive Money Anywhere, Anytime
                </h1>
                <p className="font-medium  text-sm md:text-lg mb-4 md:w-[45%] leading-[1.25]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci sapiente distinctio voluptatum error ipsam repellat
                    laboriosam ipsum voluptate alias.
                </p>
                <Link href="/login">
                    <Button variant="primary" type="button" size="sm">
                        Get Started
                    </Button>
                </Link>
            </main>
        </div>
    );
}
