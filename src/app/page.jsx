import Image from 'next/image';
import BookShelf from '../components/bookshelf';
import InfoSection from '../components/infoSection';
import Spacer from '@/components/spacer';
export default function Home() {
  return (
    <div>
      <main className="flex h-screen -mb-32 md:-mb-2 md:min-h-[500px] flex-col  items-center gap-4">
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
            href="#bookShelf"
            className=" border-2 px-6 py-2 bg-slate-300 rounded-md"
          >
            See current books
          </a>
        </div>
      </main>
      <BookShelf />
      <InfoSection />
    </div>
  );
}
