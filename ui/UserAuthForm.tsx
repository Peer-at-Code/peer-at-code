'use client';

import cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppLink from './AppLink';
import Button from './Button';
import Input from './Input';

type FormData = {
  pseudo: string;
  email: string;
  passwd: string;
  firstname: string;
  lastname: string;
  description: string;
  sgroup: string;
  avatar: string;
};

export default function UserAuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname()!;
  const isSignIn = pathname.includes('sign-in');

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${isSignIn ? 'login' : 'register'}`,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    );

    if (!isSignIn) {
      const { username_valid, email_valid } = await res.json();
      if (!username_valid) {
        setError('pseudo', {
          type: 'manual',
          message: "Nom d'utilisateur indisponible"
        });
        setIsLoading(false);
      }
      if (!email_valid) {
        setError('email', {
          type: 'manual',
          message: 'Email déjà utilisé'
        });
        setIsLoading(false);
      }
    }

    if (res.ok) {
      const token = res.headers.get('Authorization')?.split(' ')[1];
      if (token) cookies.set('token', token);
      router.refresh();
    } else {
      setError('passwd', {
        type: 'manual',
        message: "Nom d'utilisateur ou mot de passe incorrect"
      });
    }
  }

  return (
    <form
      className="flex w-52 flex-col justify-center space-y-4 sm:w-72"
      onSubmit={handleSubmit(onSubmit)}
    >
      {!isSignIn && (
        <>
          <Input
            label="Adresse e-mail"
            type="email"
            placeholder="peer-at@exemple.be"
            required
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            label="Nom"
            type="text"
            placeholder="Doe"
            error={errors.lastname?.message}
            {...register('lastname')}
          />
          <Input
            label="Prénom"
            type="text"
            placeholder="John"
            error={errors.firstname?.message}
            {...register('firstname')}
          />
        </>
      )}
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
      <Button type="submit" kind="brand" disabled={isLoading}>
        {isSignIn ? 'Se connecter' : "S'inscrire"}
      </Button>
      <div className="flex flex-col text-center">
        {!isSignIn && (
          <p className="flex flex-col items-center text-sm text-muted">
            En cliquant sur continuer, vous acceptez les{' '}
            <AppLink className="text-white underline" href="/privacy-policy" target="_blank">
              Politique de confidentialité
            </AppLink>
            .
          </p>
        )}
        <p className="flex flex-col items-center text-sm text-muted">
          {isSignIn ? "Vous n'avez pas de compte?" : 'Vous possédez un compte?'}{' '}
          <AppLink className="text-brand underline" href={isSignIn ? '/sign-up' : '/sign-in'}>
            {isSignIn ? "S'inscrire maintenant" : 'Se connecter'}
          </AppLink>
        </p>
      </div>
    </form>
  );
}
