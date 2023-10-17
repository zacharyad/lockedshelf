import Image from 'next/image';
import BookShelf from '../components/bookshelf';
import InfoSection from '../components/infoSection';
import Faqs from '@/components/faqs';
import Spacer from '@/components/spacer';
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
          <a
            href="https://www.amazon.com"
            target="_blank"
            className=" border-2 px-6 py-2 text-slate-100 bg-blue-800 rounded-md"
          >
            Buy a book
          </a>
          <Spacer size={24} />
          <a
            href="#bookShelf"
            className=" border-2 px-6 py-2 bg-slate-200 border-blue-800 text-blue-800 rounded-md"
          >
            See Locked Books
          </a>
        </div>
      </main>
      <BookShelf />
      <InfoSection />
      <Faqs />
    </div>
  );
}
