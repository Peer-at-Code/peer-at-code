'use client';

import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
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

  const router = useRouter();
  const pathname = usePathname()!;
  const isSignIn = pathname.includes('sign-in');

  async function onSubmit(data: FormData) {
    const { data: response, status } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/${isSignIn ? 'login' : 'register'}`,
      {
        data: {
          pseudo: data.pseudo,
          email: data.email,
          passwd: data.passwd,
          firstname: data.firstname,
          lastname: data.lastname,
          description: data.description,
          sgroup: data.sgroup,
          avatar: data.avatar
        },
        headers: {
          'Content-Type': 'application/json'
        }
      },
      { insecureHTTPParser: true }
    );

    console.log('response ', response);

    if (status === 200) {
      router.push('/dashboard');
    }

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     pseudo: data.pseudo,
    //     email: data.email,
    //     passwd: data.passwd,
    //     firstname: data.firstname,
    //     lastname: data.lastname,
    //     sgroup: data.sgroup,
    //     avatar: data.avatar
    //   })
    // });

    // const result = await response.json();

    // if (response.status !== 200) {
    //   setError('email', { message: result.message });
    // }

    // if (response.status === 200) {
    //   router.push('/dashboard');
    // }
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
            error={
              errors.email?.message
              //   &&
              //   (isSignIn ? (
              //     <>
              //       {translations.noAccountAssociated}{' '}
              //       <AppLink className="underline" href="/sign-up">
              //         {translations.signUpQuestion}
              //       </AppLink>
              //     </>
              //   ) : (
              //     errors.email.message
              //   ))
            }
            {...register('email')}
          />
          <Input
            label="Nom"
            type="lastname"
            placeholder="Doe"
            error={
              errors.lastname?.message
              //   &&
              //   (isSignIn ? (
              //     <>
              //       {translations.noAccountAssociated}{' '}
              //       <AppLink className="underline" href="/sign-up">
              //         {translations.signUpQuestion}
              //       </AppLink>
              //     </>
              //   ) : (
              //     errors.email.message
              //   ))
            }
            {...register('lastname')}
          />
          <Input
            label="Prénom"
            type="firstname"
            placeholder="John"
            error={
              errors.firstname?.message
              //   &&
              //   (isSignIn ? (
              //     <>
              //       {translations.noAccountAssociated}{' '}
              //       <AppLink className="underline" href="/sign-up">
              //         {translations.signUpQuestion}
              //       </AppLink>
              //     </>
              //   ) : (
              //     errors.email.message
              //   ))
            }
            {...register('firstname')}
          />
        </>
      )}
      <Input
        label="Nom d'utilisateur"
        type="text"
        placeholder="PeerAt"
        required
        error={errors.passwd?.message}
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
        {isSignIn ? 'Se connecter' : "S'inscrire"}
      </Button>
      {/* {!isSignIn && (
        <p className="items-center text-sm text-gray-400">
          En cliquant sur continuer, vous acceptez les{' '}
          <AppLink className="text-white underline" href="/privacy-policy" target="_blank">
            Politique de confidentialité
          </AppLink>
          .
        </p>
      )} */}
      <p className="flex flex-col items-center text-sm text-muted">
        {isSignIn ? "Vous n'avez pas de compte?" : 'Vous possédez un compte?'}{' '}
        <AppLink className="text-brand underline" href={isSignIn ? '/sign-up' : '/sign-in'}>
          {isSignIn ? "S'inscrire maintenant" : 'Se connecter'}
        </AppLink>
      </p>
    </form>
  );
}
