export const Transactions = () => {
    const transactions = [
        {
            type: "Funding",
            amount: "₦214,000.00",
            date: "May 11, 2023",
            status: "Paid",
        },
        {
            type: "Funding",
            amount: "₦20,000.00",
            date: "May 11, 2023",
            status: "Pending",
        },
        {
            type: "Transfer",
            amount: "₦12,000.00",
            date: "May 11, 2023",
            status: "Overdue",
        },
    ];

    return (
        <div className="w-full px-[30px] md:px-[35px]">
            <div className="py-8 ">
                <div>
                    <h2 className="text-[20px] font-semibold leading-tight">
                        Transactions
                    </h2>
                </div>
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
                                {transactions.map((transaction, index) => (
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    <tr key={index}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                            <p className="text-gray-900 whitespace-nowrap">
                                                {transaction.type}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  w-1/5">
                                            <p className="text-gray-900 whitespace-nowrap">
                                                {transaction.amount}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 ">
                                            <p className="text-gray-900 whitespace-nowrap">
                                                {transaction.date}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  w-1/5 ">
                                            <span
                                                className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                                                    transaction.status ===
                                                    "Paid"
                                                        ? "text-green-900"
                                                        : transaction.status ===
                                                          "Pending"
                                                        ? "text-orange-900"
                                                        : "text-red-900"
                                                }`}
                                            >
                                                <span
                                                    aria-hidden
                                                    className={`absolute inset-0 ${
                                                        transaction.status ===
                                                        "Paid"
                                                            ? "bg-green-200"
                                                            : transaction.status ===
                                                              "Pending"
                                                            ? "bg-orange-200"
                                                            : "bg-red-200"
                                                    } opacity-50 rounded-full`}
                                                />
                                                <span className="relative">
                                                    {transaction.status}
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
