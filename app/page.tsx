import AppLink from '@/ui/AppLink';
import Console from '@/ui/Console';
import Image from 'next/image';

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
      <div className="item-center flex h-screen w-full">
        <div className="m-auto flex flex-col space-x-0  text-center md:flex-row md:space-x-6 md:space-y-0">
          <Image
            className="ml-[15%]"
            src="/assets/brand/peerat.png"
            width={400}
            height={400}
            alt="Peer-at Code logo"
          />
          <p className="w-4/6 self-center text-justify sm:w-3/6 md:w-2/6">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de l&apos;imprimerie
            depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de
            texte pour réaliser un livre spécimen de polices de texte. Il n&apos;a pas fait que
            survivre cinq siècles, mais s&apos;est aussi adapté à la bureautique informatique, sans
            que son contenu n&apos;en soit modifié. Il a été popularisé dans les années 1960 grâce à
            la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
          </p>
        </div>
      </div>
    </div>
  );
}
