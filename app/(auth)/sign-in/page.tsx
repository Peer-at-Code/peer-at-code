import UserAuthForm from '@/ui/UserAuthForm';

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-start space-y-4">
        <h2 className="mx-auto text-xl font-bold">Connexion</h2>
        <UserAuthForm />
      </div>
    </>
  );
}
