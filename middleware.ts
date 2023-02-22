import { type NextRequest, NextResponse } from 'next/server';

/**
 * Permet de créer un middleware Next.js qui sera exécuté avant chaque requête.
 *
 * @param req - La requête.
 */
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  console.log('Res', res);
  return res;
}

export const config = {
  matcher: [
    // On exclut les routes de l'API, les fichiers statiques, les images, les assets, le favicon et le service worker.
    // '/((?!api|_next/static|_next/image|assets|favicon|sw.js).*)'
  ]
};
