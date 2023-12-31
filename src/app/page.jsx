import Image from 'next/image';
import BookShelf from '../components/bookshelf';
import InfoSection from '../components/infoSection';
import Faqs from '@/components/faqs';
import Link from 'next/link';
import BackToTopBtn from '../components/backtotopbtn';
import SocialLinks from '@/components/SocialLinks';
export default function Home() {
  return (
    <div>
      <main className="flex h-screen -mb-32 md:-mb-2 md:min-h-[500px] flex-col items-center gap-4">
        <div className="absolute top-42 pt-2 left-0 right-0 text-2xl text-slate-700 w-screen flex flex-col items-center text-center">
          <Image
            loading="lazy"
            alt="Locked Shelf Book Series Logo"
            className=""
            src="/assets/LsLogoAnimated.gif"
            width={600}
            height={400}
          />

          <p className="text-slate-700 w-10/12 text-lg">
            Each book offers a labyrinth of secrets; hidden, waiting for you to
            seek out and solve
          </p>
          <div className="h-4 w-full invisible">spacer</div>
          <Link
            href="#bookShelf"
            className=" border-2 px-6 py-2 text-slate-100 bg-blue-800 rounded-md"
          >
            See Locked Books
          </Link>

          <div className="h-4 w-full invisible">spacer</div>
          <Link
            className="border-2 px-6 py-1 text-center text-black bg-opacity-0 border-black rounded-md"
            href="#info"
          >
            Learn More
          </Link>
        </div>
      </main>
      <BookShelf />
      <InfoSection />
      <Faqs />
      <BackToTopBtn href="/" />
      <SocialLinks />
    </div>
  );
}
