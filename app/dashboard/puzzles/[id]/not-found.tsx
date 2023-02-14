import Image from 'next/image';
import error404 from '@/public/assets/404.png';

export default function NotFound() {
  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center space-y-6">
      <h2 className="text-6xl">Oh non! Un François 404</h2>
      <Image src={error404} alt="François 404" width={1000} height={1000} />
    </div>
  );
}
