import Card from '@/ui/Card';
import CardTable from '@/ui/CardTable';

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col justify-between space-y-4">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl">Bienvenue!</h2>
          <p className="text-muted">Ceci est la page d&apos;accueil du dashboard</p>
        </div>
        <section className="flex justify-between space-x-4">
          <Card />
          <Card />
          <Card />
        </section>

        <div className="flex">
          <section className="flex max-h-96 w-full space-y-4">
            <div className="flex justify-between space-x-4">
              <CardTable />
            </div>
          </section>
          <section className="flex max-h-96 w-full space-y-4">
            <div className="flex justify-between space-x-4">
              <CardTable />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
