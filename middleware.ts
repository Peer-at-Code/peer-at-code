import { NextResponse, type NextRequest } from 'next/server';
import { getURL } from './lib/utils';

/**
 * Permet de créer un middleware Next.js qui sera exécuté avant chaque requête.
 *
 * @param req - La requête Next.js
 */
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const token = req.cookies.get('token')?.value;

  if (req.nextUrl.pathname.includes('dashboard') && !token)
    return NextResponse.redirect(getURL('/sign-in'));
  else if (req.nextUrl.pathname.includes('sign') && token)
    return NextResponse.redirect(getURL('/dashboard'));

  return res;
}

export const config = {
  matcher: [
    // On exclut les routes de l'API, les fichiers statiques, les images, les assets, le favicon et le service worker.
    '/((?!api|_next/static|_next/image|assets|favicon|sw.js).*)'
  ]
};
