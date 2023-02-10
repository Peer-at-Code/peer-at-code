import Card from '@/ui/Card';
import CardTable from '@/ui/CardTable';

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <div className="">
        <h1 className="text-2xl font-bold tracking-tight">Statistique</h1>
        <div className="flex flex-col space-x-0 pt-5 md:flex-row md:space-x-9">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex h-[60%] flex-col space-x-0 pt-5 md:flex-row md:space-x-[5%]">
          <div className="mb-9 w-6/12">
            <h1 className="text-2xl font-bold tracking-tight">Guide</h1>
            <div className="flex h-full flex-col space-x-0 pt-5 md:flex-row md:space-x-[10%] ">
              <div className="h-full w-full rounded-lg bg-dark shadow-md">
                <div className="flex justify-between rounded-lg py-2 px-4">
                  <div className="my-auto">
                    <p className="font-bold">Bold data</p>
                    <p className="text-lg">Simple data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-9 w-6/12">
            <h1 className="text-2xl font-bold tracking-tight">Dernières activités </h1>
            <div className="flex h-full flex-col space-x-0 pt-5 md:flex-row md:space-x-[10%]">
              <CardTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
