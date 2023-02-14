import AppLink from '@/ui/AppLink';
import Icon from '@/ui/Icon';
import UserAuthForm from '@/ui/UserAuthForm';

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-start space-y-4">
        <AppLink href="/">
          <Icon name="arrow-left-line" />
        </AppLink>
        <h2 className="mx-auto text-xl font-bold">Créer un compte</h2>
        <UserAuthForm />
      </div>
    </>
  );
}
