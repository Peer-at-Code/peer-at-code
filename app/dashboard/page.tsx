import Card from '@/ui/Card';

export default function Page() {
  return (
    <div className="flex h-screen flex-col space-y-4">
      <section className="flex-col space-y-4">
        <header>
          <h3 className="text-xl font-semibold">Tableau de bord</h3>
          <p className="text-muted">Ceci est la page d&apos;accueil du dashboard</p>
        </header>
        <main className="flex-col justify-between space-x-0 space-y-4 md:flex md:flex-row md:space-x-4 md:space-y-0">
          <Card title={'Hey salut'} data={'Xavier il aime les pieds'} />
          <Card title="Nicolas le boss" data="Car il a fait ces cartes" />
          <Card title="Https" data="Une histoire d'amour avec Xav" />
        </main>
      </section>
      {/* TODO fix ça c'est pas responsive */}
      {/* <section className="flex-col space-y-4">
        <header>
          <h3 className="text-xl font-semibold">Statistiques</h3>
          <p className="text-muted">Ceci est la page d&apos;accueil du dashboard</p>
        </header>
        <main className="flex-col justify-between space-x-0 space-y-4 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0">
          <CardTable
            puzzles={[
              { name: 'Jour 0 | Save Conway Gadgetski', id: '1', content: '' },
              { name: 'Jour 1 | Next', id: '2', content: '' },
              { name: 'Jour 2 | Previous', id: '3', content: '' },
              { name: 'Jour 3 | Next 1 loop', id: '4', content: '' },
              { name: 'Jour 4 |  Next no loop + recursion', id: '5', content: '' },
              { name: 'Jour 5  | N first rows', id: '6', content: '' },
              { name: 'Week-end | Game of Life', id: '7', content: '' },
              { name: 'Jour 0 | Save Conway Gadgetski', id: '1', content: '' },
              { name: 'Jour 1 | Next', id: '2', content: '' },
              { name: 'Jour 2 | Previous', id: '3', content: '' },
              { name: 'Jour 3 | Next 1 loop', id: '4', content: '' },
              { name: 'Jour 4 |  Next no loop + recursion', id: '5', content: '' },
              { name: 'Jour 5  | N first rows', id: '6', content: '' },
              { name: 'Week-end | Game of Life', id: '7', content: '' },
              { name: 'Jour 0 | Save Conway Gadgetski', id: '1', content: '' },
              { name: 'Jour 1 | Next', id: '2', content: '' },
              { name: 'Jour 2 | Previous', id: '3', content: '' },
              { name: 'Jour 3 | Next 1 loop', id: '4', content: '' },
              { name: 'Jour 4 |  Next no loop + recursion', id: '5', content: '' },
              { name: 'Jour 5  | N first rows', id: '6', content: '' },
              { name: 'Week-end | Game of Life', id: '7', content: '' }
            ]}
          />
          <CardTable
            puzzles={[
              { name: 'Jour 0 | Save Conway Gadgetski', id: '1', content: '' },
              { name: 'Jour 1 | Next', id: '2', content: '' },
              { name: 'Jour 2 | Previous', id: '3', content: '' },
              { name: 'Jour 3 | Next 1 loop', id: '4', content: '' },
              { name: 'Jour 4 |  Next no loop + recursion', id: '5', content: '' },
              { name: 'Jour 5  | N first rows', id: '6', content: '' },
              { name: 'Week-end | Game of Life', id: '7', content: '' }
            ]}
          />
        </main>
      </section> */}
    </div>
  );
}
