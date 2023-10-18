import Image from 'next/image';
import BookShelf from '../components/bookshelf';
import InfoSection from '../components/infoSection';
import Faqs from '@/components/faqs';
import Spacer from '@/components/spacer';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <main className="flex h-screen -mb-32 md:-mb-2 md:min-h-[500px] flex-col items-center gap-4">
        <div className="absolute top-42 left-0 right-0 text-2xl text-slate-700 w-screen flex flex-col items-center text-center">
          <Image
            priority
            alt="Locked Shelf Book Series Logo"
            className="w-5/6 md:w-5/12"
            src="/assets/LOGO.png"
            width={600}
            height={400}
          />
          <Spacer size={24} />
          <p className="text-slate-700 w-5/6">
            Each physical book offers a labyrinth of secrets; hidden, waiting
            for you to seek out and solve
          </p>
          <Spacer size={24} />

          <Link
            href="#bookShelf"
            className=" border-2 px-6 py-2 text-slate-100 bg-blue-800 rounded-md"
          >
            See Locked Books
          </Link>

          <Spacer size={24} />
          <Link
            className="border-2 px-6 py-1 text-center text-black bg-opacity-0 border-black rounded-md"
            href="/#info"
          >
            Learn More
          </Link>
        </div>
      </main>
      <BookShelf />
      <InfoSection />
      <Faqs />
      <Link
        className=" flex justify-center rounded-md m-8 py-2 px-4 shadow-inner bg-slate-200 border-2 border-slate-400"
        href="/"
      >
        Back to Top
      </Link>
    </div>
  );
}
