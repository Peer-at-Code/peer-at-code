import AppLink from '@/ui/AppLink';
import Console from '@/ui/Console';

export default function Home() {
  return (
    <div>
      <div className="flex h-screen w-full">
        <div className="m-auto flex flex-col space-y-2">
          <h1 className="text-center text-6xl font-bold">Bienvenu sur</h1>
          <span>
            <Console text="Peer-at Code" />
          </span>
          <AppLink href="/dashboard">Dashboard</AppLink>
        </div>
      </div>
      <div className="flex h-screen w-full">
        <div className="m-auto flex flex-col space-x-0  text-center md:flex-row md:space-x-6 md:space-y-0">
          <img
            className="ml-[11%] w-0 sm:w-0 md:w-2/6 "
            src="https://media.discordapp.net/attachments/1070815084718334032/1074104191921959003/glazk0_a_minimalistic_logo_that_is_a_pirate_logo_white_and_blac_9b4eb1dd-5979-45dd-a70a-f880ee3b49ca.png?width=586&height=586"
          ></img>
          <p className="w-4/6 self-center text-justify sm:w-3/6 md:w-2/6">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
            les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu
            n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion
            dans des applications de mise en page de texte, comme Aldus PageMaker.
          </p>
        </div>
      </div>
    </div>
  );
}
