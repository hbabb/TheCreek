import Image from 'next/image';
import Link from 'next/link';
import spaceMan from '../../public/images/SpaceMan.svg';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
      <main className="flex flex-row items-center justify-evenly">
        <div className="text-notfound-white mr-96 text-left">
          <h1 className="text-inter text-[200px] font-bold">Oops !</h1>
          <h3 className="text-inter text-[44px] font-bold">something went wrong...</h3>
          <p className="text-inter text-notfound-gray mb-52 text-[23px] font-normal">
            try to reload this page or go back to the homepage
          </p>
          <Button
            asChild
            variant="outline"
            className="border-notfound-white text-notfound-white rounded-full border-2 bg-transparent px-8 py-6 text-lg hover:text-red-600"
          >
            <Link href="/system-mainframe">
              <MoveLeft />
              homepage
            </Link>
          </Button>
        </div>
        <div>
          <Image src={spaceMan} alt="Astronaut on Moon" width={477} height={477} />
        </div>
      </main>
    </div>
  );
}
