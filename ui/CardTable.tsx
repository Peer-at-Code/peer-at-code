export default function CardTable() {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-dark border border-black w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-white uppercase bg-light-dark sticky sticky z-1 top-0">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Exercice
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tentative
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Score
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dernier essai
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Reprendre</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=" border-b bg-dark dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            30
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            40
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            60
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            60
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            60
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            60
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            60
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            60
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            60
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                    <tr className="bg-dark hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Exercice 1
                        </th>
                        <td className="px-6 py-4">
                            60
                        </td>
                        <td className="px-6 py-4">
                            300
                        </td>
                        <td className="px-6 py-4">
                            10/10/2010
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reprendre</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

