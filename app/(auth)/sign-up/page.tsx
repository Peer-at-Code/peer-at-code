import UserAuthForm from '@/ui/UserAuthForm';

export const metadata = {
  title: 'Inscription - Peer-at Code'
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-start space-y-4">
        <h2 className="mx-auto text-xl font-bold">Créer un compte</h2>
        <UserAuthForm />
      </div>
    </>
  );
}
