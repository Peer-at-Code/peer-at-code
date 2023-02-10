import Card from '@/ui/Card';
import CardTable from '@/ui/CardTable';

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <div className="">
        <h1 className="text-2xl font-bold tracking-tight">Statistique</h1>
        <div className="flex flex-col space-x-0 md:flex-row md:space-x-9 pt-5">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-col space-x-0 md:flex-row md:space-x-[5%] pt-5 h-[60%]">
          <div className='w-6/12 mb-9'>
            <h1 className="text-2xl font-bold tracking-tight">Guide</h1>
            <div className="flex flex-col space-x-0 md:flex-row md:space-x-[10%] pt-5 h-full ">
              <div className="bg-dark rounded-lg shadow-md w-full h-full">
                <div className="flex py-2 px-4 rounded-lg justify-between">
                  <div className="my-auto">
                    <p className="font-bold">Bold data</p>
                    <p className="text-lg">Simple data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-6/12 mb-9'>
            <h1 className="text-2xl font-bold tracking-tight">Dernières activités </h1>
            <div className="flex flex-col space-x-0 md:flex-row md:space-x-[10%] pt-5 h-full">
              <CardTable></CardTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




