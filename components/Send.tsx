"use client";
import { useState } from "react";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { decreaseFunds } from "@/lib/Balance/balanceSlice";
import { Success } from "./Success";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
interface FormData {
    amount: string;
}

export const Send = () => {
    const [formData, setFormData] = useState<FormData>({
        amount: "",
    });
    const [error, setError] = useState<boolean>(false);
    const [balanceError, setBalanceError] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useDispatch();
    const balance = useSelector((state: RootState) => state.amount.amount);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            Number(formData.amount) <= 0 ||
            Number(formData.amount) < 100 ||
            formData.amount === ""
        ) {
            setError(true);
        } else if (Number(formData.amount) > balance) {
            setBalanceError(true);
        } else {
            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                console.log(formData.amount);
                dispatch(decreaseFunds(Number(formData.amount)));
                setIsSubmitted(true);
            }, 2000);
        }
    };
    return (
        <>
            {isSubmitted ? (
                <Success type="transferred" amount={formData.amount} />
            ) : (
                <form className="flex flex-col items-center justify-center gap-y-3 w-full mb-6">
                    <h2 className="text-[#18181B] font-bold text-lg">
                        Send Fund
                    </h2>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={(e) => {
                            handleInputChange(e);
                            setError(false);
                            setBalanceError(false);
                        }}
                        placeholder="Enter amount (NGN)"
                        className="p-2 flex h-10 w-[250px] rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"
                        required
                    />
                    {error && (
                        <p className="text-red-500 text-xs text-left  ">
                            The minimum amount for a transaction is 100.
                        </p>
                    )}
                    {balanceError && (
                        <p className="text-red-500 text-xs text-left  ">
                            Insufficient balance for this transaction.
                        </p>
                    )}
                    <Button
                        variant="secondary"
                        size="sm"
                        className="flex items-center justify-center gap-3"
                        onClick={handleSubmit}
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
                                <span>Loading...</span>
                            </>
                        ) : (
                            "Send"
                        )}
                    </Button>
                </form>
            )}
        </>
    );
};
