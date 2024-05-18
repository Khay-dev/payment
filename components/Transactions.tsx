import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const Transactions = () => {
    const transaction = useSelector(
        (state: RootState) => state.amount.transactions
    );
    const currentDate = new Date();

    return (
        <div className="w-full px-[30px] md:px-[35px]">
            <div className="py-8 ">
                <div>
                    <h2 className="text-[20px] font-semibold leading-tight">
                        Transactions
                    </h2>
                </div>

                {transaction.length === 0 ? (
                    <p className="text-xs text-center">No transaction found</p>
                ) : (
                    <div className=" py-4 overflow-x-auto ">
                        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden ">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider text-left">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transaction.map((transaction, index) => (
                                        <tr key={index}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                                <p className="text-gray-900 whitespace-nowrap">
                                                    {transaction.type}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  w-1/5">
                                                <p className="text-gray-900 whitespace-nowrap">
                                                    ₦
                                                    {transaction.amount.toLocaleString()}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 ">
                                                <p className="text-gray-900 whitespace-nowrap">
                                                    {currentDate.toLocaleDateString()}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  w-1/5 ">
                                                <span
                                                    className={`relative inline-block px-3 py-1 font-semibold leading-tighttext-green-900`}
                                                >
                                                    <span
                                                        aria-hidden
                                                        className={`absolute inset-0 bg-green-200 opacity-50 rounded-full`}
                                                    />
                                                    <span className="relative">
                                                        Successful
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
