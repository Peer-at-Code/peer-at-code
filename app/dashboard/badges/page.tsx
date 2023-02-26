import Badge from '@/ui/Badge';

export const metadata = {
  title: 'Mes badges - Peer-at Code'
};

export default function Page() {
  // TODO: Fetch badges from API and display them
  return (
    <div className="flex h-full w-full flex-col space-y-4">
      <div className="w-full">
        <section className="flex flex-col space-y-4">
          <header className="flex flex-col">
            <h3 className="text-xl font-semibold">Mes badges</h3>
            <p className="hidden text-muted sm:block">
              Vos badges sont affichés ici, vous pouvez les partager avec vos amis
            </p>
          </header>
          <main className="flex flex-col justify-between space-x-0 space-y-4">
            <div className="flex space-x-2">
              <Badge title="Je suis un teste" path="/assets/badges/java.png" alt="je suis un alt" />
              <Badge title="Je suis un teste" path="/assets/badges/java.png" alt="je suis un alt" />
              <Badge
                title="Peer-at What ?"
                path="/assets/badges/java.png"
                type="hard"
                alt="je suis un alt"
                earned
              />
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
