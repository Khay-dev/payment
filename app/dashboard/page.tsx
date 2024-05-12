import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Transactions } from "@/components/Transactions";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
            <Header currentPage="dashboard" />
            <div className=" text-2xl font-bold text-[#a39b9b] px-[35px] ">
                Welcome Back, <span className="text-[#4fa5cb]">Daniel</span>
            </div>
            <section className=" justify-between flex flex-col gap-8 px-7 py-8 md:flex-row">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex basis-3/12 flex-col border-[#E4E4E7] p-5">
                    <div className="flex flex-col space-y-1.5  ">
                        <span className="text-sm font-light text-[#70707B] ">
                            Current Balance (NGN)
                        </span>
                        <span className="text-[32px] font-semibold text-[#18181B]">
                            ₦4,000,000.00
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-5  ">
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-sm font-bold  text-[#18181B] "
                    >
                        Fund
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className=" text-sm font-bold  text-[#18181B] "
                    >
                        Send
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-lg font-bold text-[#18181B] "
                    >
                        <FaPlus /> 
                    </Button>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex basis-3/12 flex-col border-[#E4E4E7] p-5">
                    <div className="flex flex-col space-y-1.5  ">
                        <span className="text-sm font-light text-[#70707B] ">
                            Accounts
                        </span>
                        <div className="flex items-center divide-x">
                            <div className=" text-[#18181B] pr-5 flex flex-col gap-1">
                                <p className="text-sm font-semibold md:text-md">
                                    Ecobank
                                </p>
                                <p className=" text-xs font-extralight md:text-sm">
                                    ******2353
                                </p>
                            </div>
                            <div className=" text-[#18181B] px-5 flex flex-col gap-1">
                                <p className="text-sm font-semibold md:text-md">
                                    UBA
                                </p>
                                <p className="text-xs font-extralight md:text-sm">
                                    ******1234
                                </p>
                            </div>
                            <div className=" text-[#18181B] px-5 flex flex-col gap-1">
                                <p className="text-sm font-semibold md:text-md">
                                    FCMB
                                </p>
                                <p className="text-xs font-extralight md:text-sm">
                                    ******4534
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Transactions />
        </>
    );
};

export default Dashboard;
