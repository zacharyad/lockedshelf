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

            <Link className="pr-8" href="/#info">
              Info
            </Link>
          </div>
        </nav>
        <Spacer size={8} />
        <main>{children}</main>
        <Spacer size={32} />
        <footer className="border-t-2 backdrop-blur-xl  border-slate-800 border-opacity-70 bg-inherit opacity-80 text-sm p-8">
          copyright 2023
        </footer>
      </body>
    </html>
  );
}
