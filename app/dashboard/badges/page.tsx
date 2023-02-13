import Badge from '@/ui/Badge';
import Image from 'next/image';
export default function Page() {
  return (
    <div className="h-full w-f">
      <div className="">
        <h1 className="text-2xl font-bold tracking-tight ">Mes badges</h1>
        <div className="flex flex-col pt-5">
          <div className="bg-dark rounded-lg shadow-md mb-9  max-h-5/6 max-w-11/12">
            <div className="flex py-2 px-4 rounded-lg justify-between">
              <div className="flex flex-wrap   md:space-x-0 pt-3 pb-3 ">
                <Badge title={"Je suis un teste"} path={"https://cdn-icons-png.flaticon.com/512/226/226777.png"} type={""} alt={"je suis un alt"} />
                <Badge title={"Je suis un teste"} path={"https://cdn-icons-png.flaticon.com/512/226/226777.png"} type={"esay"} alt={"je suis un alt"} />
                <Badge title={"Je suis un teste"} path={"https://cdn-icons-png.flaticon.com/512/226/226777.png"} type={"hard"} alt={"je suis un alt"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
