'use client';

import AppLink from '@/ui/AppLink';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type RegisterData = {
  pseudo: string;
  email: string;
  passwd: string;
  firstname: string;
  lastname: string;
  description: string;
  sgroup: string;
  avatar: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<RegisterData>({
    defaultValues: {
      pseudo: '',
      email: '',
      passwd: '',
      firstname: '',
      lastname: '',
      description: '',
      sgroup: '',
      avatar: ''
    }
  });

  const router = useRouter();

  async function onSubmit(data: RegisterData) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    const { username_valid, email_valid } = await res.json();

    if (!username_valid || !email_valid) {
      if (!username_valid) {
        setError('pseudo', {
          type: 'manual',
          message: "Nom d'utilisateur indisponible"
        });
      }
      if (!email_valid) {
        setError('email', {
          type: 'manual',
          message: 'Email déjà utilisé'
        });
      }
    }

    console.log(errors);
    console.log(username_valid, email_valid);

    if (res.ok) {
      const token = res.headers.get('Authorization')?.split(' ')[1];
      if (token) cookies.set('token', token);
      if (cookies.get('token')) router.push('/dashboard');
    }
  }

  return (
    <>
      <div className="flex flex-col justify-start space-y-4">
        <h2 className="mx-auto text-xl font-bold">Créer un compte</h2>
        <form
          className="flex w-52 flex-col justify-center space-y-4 sm:w-72"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Adresse e-mail"
            type="email"
            placeholder="peer-at@exemple.be"
            required
            error={errors.email?.message}
            {...register('email')}
          />
          <Input label="Nom" type="lastname" placeholder="Doe" {...register('lastname')} />
          <Input label="Prénom" type="firstname" placeholder="John" {...register('firstname')} />
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
            {...register('passwd', {
              minLength: {
                value: 4,
                message: 'Le mot de passe doit contenir au moins 8 caractères'
              }
            })}
          />
          <Button type="submit" kind="brand">
            S&apos;inscrire
          </Button>
          {/* <p className="items-center text-sm text-gray-400">
            En cliquant sur continuer, vous acceptez les{' '}
            <AppLink className="text-white underline" href="/privacy-policy" target="_blank">
              Politique de confidentialité
            </AppLink>
            .
          </p> */}
          <p className="flex flex-col items-center text-sm text-muted">
            Vous possédez un compte?
            <AppLink className="text-brand underline" href={'/sign-in'}>
              Se connecter
            </AppLink>
          </p>
        </form>
      </div>
    </>
  );
}
