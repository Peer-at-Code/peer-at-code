'use client';

import AppLink from '@/ui/AppLink';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type LoginData = {
  pseudo: string;
  passwd: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginData>({
    defaultValues: {
      pseudo: '',
      passwd: ''
    }
  });

  const router = useRouter();

  async function onSubmit(data: LoginData) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (res.ok) {
      const token = res.headers.get('Authorization')?.split(' ')[1];
      if (token) cookies.set('token', token);
      if (cookies.get('token')) router.push('/dashboard');
    } else {
      setError('passwd', {
        type: 'manual',
        message: "Nom d'utilisateur ou mot de passe incorrect"
      });
    }
  }

  return (
    <>
      <div className="flex flex-col justify-start space-y-4">
        <h2 className="mx-auto text-xl font-bold">Connexion</h2>
        <form
          className="flex w-52 flex-col justify-center space-y-4 sm:w-72"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Nom d'utilisateur"
            type="text"
            placeholder="PeerAt"
            required
            error={errors.pseudo?.message}
            {...register('pseudo')}
          />
          <Input
            label="Mot de passe"
            type="password"
            placeholder="MotDePasse123"
            required
            error={errors.passwd?.message}
            {...register('passwd')}
          />
          <Button type="submit" kind="brand">
            Se connecter
          </Button>
          <p className="flex flex-col items-center text-sm text-muted">
            Vous n&apos;avez pas de compte?
            <AppLink className="text-brand underline" href={'/sign-up'}>
              S&apos;inscrire maintenant
            </AppLink>
          </p>
        </form>
      </div>
    </>
  );
}
