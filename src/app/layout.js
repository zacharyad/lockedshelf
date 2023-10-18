import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Spacer from '@/components/spacer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Locked Shelf',
  description: 'Companion Site for the Locked Shelf Book Series',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} scroll-smooth`}>
        <nav className="flex justify-around items-center h-32 shadow-xl shadow-slate-400">
          <div className="m-auto text-2xl ml-12 flex justify-between items-center w-screen">
            <Link href="/">
              <Image
                alt="Logo image and a Navigation button to go to homepage"
                className="h-32 w-auto p-4"
                height={100}
                width={50}
                src="/assets/LOGO_in.png"
              />
            </Link>
            <div className="mr-8">
              <Link
                href="https://www.amazon.com"
                target="_blank"
                className="border-2 px-2 text-[1rem] py-1 text-center bg-slate-200 border-blue-800 text-blue-800 rounded-md hover:bg-blue-700 hover:text-blue-100 focus:ring-blue-800"
              >
                Buy on Amazon
              </Link>
            </div>
          </div>
        </nav>
        <Spacer size={8} />
        <main>{children}</main>
        <Spacer size={32} />

        <footer className="border-t-2  backdrop-blur-xl border-slate-800 border-opacity-70 bg-inherit opacity-80 text-sm p-4">
          copyright 2023
        </footer>
      </body>
    </html>
  );
}
