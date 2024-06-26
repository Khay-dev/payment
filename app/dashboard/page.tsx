"use client";
import { Button } from "@/components/ui/Button";
import { Fund } from "@/app/dashboard/FundModal/FundModal";
import { Header } from "@/components/ui/Header";
import { Modal } from "@/components/ui/Modal";
import { Send } from "@/app/dashboard/SendModal/SendModal";
import { Transactions } from "@/app/dashboard/Transactions";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/application/store";

const Dashboard: React.FC = () => {
    const [isModalfundOpen, setIsModalfundOpen] = useState<boolean>(false);
    const [isModalsendOpen, setIsModalsendOpen] = useState<boolean>(false);
    const name = useSelector((state: RootState) => state.username.username);
    const funds = useSelector((state: RootState) => state.amount.amount);
    const userName = name.charAt(0).toUpperCase() + name.slice(1);

    const date = new Date();
    const currentHour = date.getHours();
    const greeting =
        currentHour < 12
            ? "Good Morning"
            : currentHour < 18
            ? "Good Afternoon"
            : "Good Evening";
    return (
        <>
            <Header currentPage="dashboard" />
            <div className=" text-2xl font-bold text-[#a39b9b] px-[35px] ">
                {greeting} <span className="text-[#4fa5cb]">{userName}</span>
            </div>
            <section className=" justify-between flex flex-col gap-8 px-7 py-8 w-full lg:flex-row md:gap-5">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex basis-3/12 flex-col border-[#E4E4E7] p-5 md:w-[350px] lg:w-[450px]">
                    <div className="flex flex-col space-y-1.5  ">
                        <span className="text-sm font-light text-[#70707B] ">
                            Current Balance (NGN)
                        </span>
                        <span className="text-[25px] font-semibold text-[#18181B]">
                            ₦{funds.toLocaleString()}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-5  ">
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-sm font-bold  text-[#18181B]"
                        onClick={() => setIsModalfundOpen(true)}
                    >
                        Fund
                    </Button>
                    <Modal
                        isOpen={isModalfundOpen}
                        onClose={() => setIsModalfundOpen(false)}
                    >
                        <Fund />
                    </Modal>
                    <Button
                        variant="outline"
                        size="lg"
                        className=" text-sm font-bold  text-[#18181B] "
                        onClick={() => setIsModalsendOpen(true)}
                    >
                        Send
                    </Button>
                    <Modal
                        isOpen={isModalsendOpen}
                        onClose={() => setIsModalsendOpen(false)}
                    >
                        <Send />
                    </Modal>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-sm font-bold text-[#18181B] "
                    >
                        <FaPlus />
                    </Button>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex basis-3/12 flex-col border-[#E4E4E7] p-5 w-full md:w-[350px] lg:w-[450px]">
                    <div className="flex flex-col space-y-1.5  ">
                        <span className="text-sm font-light text-[#70707B] ">
                            Accounts
                        </span>
                        <div className="flex items-center divide-x">
                            <div className=" text-[#18181B] pr-5 flex flex-col gap-1">
                                <p className="text-sm font-semibold md:text-md">
                                    Ecobank
                                </p>
                                <p className=" font-extralight text-xs">
                                    ******2353
                                </p>
                            </div>
                            <div className=" text-[#18181B] px-5 flex flex-col gap-1">
                                <p className="text-sm font-semibold md:text-md">
                                    UBA
                                </p>
                                <p className="text-xs font-extralight ">
                                    ******1234
                                </p>
                            </div>
                            <div className=" text-[#18181B] px-5 flex flex-col gap-1">
                                <p className="text-sm font-semibold md:text-md">
                                    FCMB
                                </p>
                                <p className="text-xs font-extralight">
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
