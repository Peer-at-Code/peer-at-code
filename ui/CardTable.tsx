import { type Puzzle } from '@/lib/puzzles';

import AppLink from './AppLink';

export default function CardTable({ puzzles }: { puzzles: Puzzle[] }) {
  return (
    <></>
    // <div className="relative flex h-96 w-full overflow-scroll">
    //   <table className="w-full table-auto border-collapse rounded-lg border-2 border-highlight-primary bg-primary-700 text-left text-sm text-muted shadow-md">
    //     {/* <thead className="z-1 sticky -top-1 bg-primary-600 text-xs uppercase text-white ">
    //       <tr>
    //         <th className="px-6 py-3">Exercice</th>
    //         <th className="px-6 py-3">Tentative</th>
    //         <th className="px-6 py-3">Score</th>
    //         <th className="px-6 py-3">Dernier essai</th>
    //         <th className="px-6 py-3">
    //           <span className="sr-only">Reprendre</span>
    //         </th>
    //       </tr>
    //     </thead> */}
    //     <tbody className="overflow-scroll">
    //       {puzzles.length &&
    //         puzzles.map((puzzle) => (
    //           <tr key={puzzle.id} className="bg-primary-700 hover:bg-primary-800 ">
    //             <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-white">
    //               {puzzle.name}
    //             </th>
    //             <td className="px-6 py-4">30</td>
    //             <td className="px-6 py-4">300</td>
    //             <td className="px-6 py-4">10/10/2010</td>
    //             <td className="px-6 py-4 text-right">
    //               <AppLink
    //                 href={`dashboard/puzzles/${puzzle.id}`}
    //                 className="font-medium text-brand hover:underline"
    //               >
    //                 Reprendre
    //               </AppLink>
    //             </td>
    //           </tr>
    //         ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}
