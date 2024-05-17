import Image from "next/image";
import successGif from "@/public/assets/success.gif";
interface successtype {
    type: string;
    amount: string;
}

export const Success = ({ type, amount }: successtype) => {
    const numericAmount = Number(amount);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mb-8 gap-y-2 ">
                <Image src={successGif} alt="my Gif" width={100} height={100} />
                <p className="text-xs font-normal uppercase text-center">
                    Transaction Of {" "}
                    <span className="font-bold text-button-blue-200 ">
                        ₦{numericAmount.toLocaleString()}
                    </span> {" "}
                    has been {type} Successfully
                </p>
            </div>
        </>
    );
};
