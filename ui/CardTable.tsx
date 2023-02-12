import AppLink from './AppLink';

export default function CardTable() {
  return (
    <div className="relative w-full overflow-x-auto border-2 border-highlight-primary bg-primary-700 shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-muted ">
        <thead className="z-1 sticky top-0 bg-primary-600 text-xs uppercase text-white">
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
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
          <tr className="bg-primary-700 hover:bg-primary-800 ">
            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
              Exercice 1
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">300</td>
            <td className="px-6 py-4">10/10/2010</td>
            <td className="px-6 py-4 text-right">
              <AppLink
                href="dashboard/puzzles/1"
                className="font-medium text-brand hover:underline"
              >
                Reprendre
              </AppLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
