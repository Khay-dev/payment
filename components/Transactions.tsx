export const Transactions = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">
                        Transactions
                    </h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Transaction type/ID
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Funding
                                            </p>
                                            <p className="text-gray-600 whitespace-no-wrap">
                                                000001
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            ₦214,000
                                        </p>
                                        <p className="text-gray-600 whitespace-no-wrap">
                                            NGN
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            May 11, 2023
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                            />
                                            <span className="relative">
                                                Paid
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <svg
                                                className="inline-block h-6 w-6 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <title>dots</title>
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Funding
                                            </p>
                                            <p className="text-gray-600 whitespace-no-wrap">
                                                000002
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            ₦20,000
                                        </p>
                                        <p className="text-gray-600 whitespace-no-wrap">
                                            NGN
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            May 11, 2023
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                                            />
                                            <span className="relative">
                                                Pending
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <svg
                                                className="inline-block h-6 w-6 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <title>dots</title>
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Transfer
                                            </p>
                                            <p className="text-gray-600 whitespace-no-wrap">
                                                000003
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            ₦12,000
                                        </p>
                                        <p className="text-gray-600 whitespace-no-wrap">
                                            NGN
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            May 11, 2023
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                            />
                                            <span className="relative">
                                                Overdue
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-right">
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <svg
                                                className="inline-block h-6 w-6 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <title>dots</title>
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
