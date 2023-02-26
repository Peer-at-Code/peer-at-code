import Badge from '@/ui/Badge';

export default function Page() {
  return (
    <div className="h-full w-full">
      <h1 className="text-2xl font-bold tracking-tight ">Mes badges</h1>
      <div className="flex flex-col pt-5">
        <div className="max-h-5/6 max-w-11/12 mb-9 rounded-lg  bg-dark shadow-md">
          <div className="flex justify-between rounded-lg py-2 px-4">
            <div className="flex flex-wrap  space-x-2 pt-3 pb-3 ">
              <Badge title="Je suis un teste" path="/assets/badges/java.png" alt="je suis un alt" />
              <Badge title="Je suis un teste" path="/assets/badges/java.png" alt="je suis un alt" />
              <Badge
                title="Salut j'ai été obtenu"
                path="/assets/badges/java.png"
                type="hard"
                alt="je suis un alt"
                earned
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
