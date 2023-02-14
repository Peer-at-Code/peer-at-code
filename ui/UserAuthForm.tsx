'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import AppLink from './AppLink';
import Button from './Button';
import Input from './Input';

export default function UserAuthForm() {
  return (
    <>
      <AuthForm />
    </>
  );
}

type FormData = {
  email?: string;
  username: string;
  password: string;
};

function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      username: '',
      password: ''
    }
  });

  const router = useRouter();
  const pathname = usePathname()!;
  const isSignIn = pathname.includes('sign-in');

  async function onSubmit(data: FormData) {
    const res = await fetch(`http://170.75.166.204/${isSignIn ? 'login' : 'register'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data
      })
    });

    if (res.status === 200) {
      router.push('/dashboard');
    }
  }

  return (
    <form className="flex flex-col justify-center space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {!isSignIn && (
        <Input
          label="Adresse e-mail"
          type="email"
          placeholder="Ex: peer-at@exemple.be"
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
      )}
      <Input
        label="Nom d'utilisateur"
        type="text"
        placeholder='Ex: "PeerAt"'
        required
        {...register('username', { required: true })}
      />
      <Input
        label="Mot de passe"
        type="password"
        placeholder='Ex: "MotDePasse123"'
        required
        {...register('password', { required: true })}
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
