import AppLink from '@/ui/AppLink';

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <div className="m-auto flex flex-col">
        <h1 className="text-center text-4xl font-bold">
          Amuse toi avec <span className="rounded-md bg-white p-1 text-black ">Next.js</span> et{' '}
          <span className="text-blue-500">Tailwindcss</span> !
        </h1>
        <AppLink href="/dashboard">Dashboard</AppLink>
      </div>
    </div>
  );
}
