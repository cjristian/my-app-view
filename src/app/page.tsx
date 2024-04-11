import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex bg-gradient-to-r from-red-600  min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg  bg-gradient-to-r from-red-600 from-30% via-gray-200 via-90% p-4 md:h-52">
        <h1 className='text-white text-7xl'>View
          <span className='text-red-900'>Soul</span>
        </h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Bienvenido a ViewSoul </strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-red-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-400 md:text-base"
          >
            <span>Inicia Sesion</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src={"/fondo.avif"}
            width={1000}
            height={760}
            className='hidden md:block'
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src={"/hero-mobile.png"}
            width={560}
            height={620}
            className='block md:hidden'
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
