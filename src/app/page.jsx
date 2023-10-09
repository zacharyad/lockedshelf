'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const LsBooks = JSON.parse(localStorage.getItem('books'));

    if (LsBooks) {
      setBooks(LsBooks);
    }
  }, []);

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Main Page For This Site
      </main>
      {books.length !== 0 && (
        <h2 className="text-center p-4  bg-slate-300 text-black">
          Your Book Shelf
        </h2>
      )}
      <section className="bg-slate-300 w-full flex flex-col items-center gap-4 p-4">
        {books.length !== 0 &&
          books.map((book) => {
            let won = books.reduce((acc, puzzle) => {
              if (puzzle.isSolved === false) acc = false;
              return acc;
            }, true);

            console.log('You won?: ', won);

            return (
              <Link key={book.name} href={book.href}>
                <div className="bg-slate-700 h-96 m-auto border-2 rounded-md p-4 text-center">
                  <h3>{book.name}</h3>
                  {won && <p className="text-green-400">Completed</p>}
                  <Image
                    alt={`Image for the book, "${book.name}"`}
                    width={300}
                    height={300}
                    src={book.bookImage}
                    className="rounded-md my-4"
                  />
                </div>
              </Link>
            );
          })}
        {books.length === 0 && (
          <a target="_blank" href={'https://amazon.com'}>
            <div className="bg-slate-700 h-96 m-auto border-2 rounded-md p-4 text-center">
              <h3>Whispers in the Hollow</h3>
              <Image
                alt={`Image for Whispers in the Hollow book found on Amazon.com for purchase`}
                width={300}
                height={300}
                src={'/assets/test.jpg'}
                className="rounded-md my-4"
              />
            </div>
          </a>
        )}
        <div className="bg-slate-700 h-96 m-auto border-2 rounded-md p-4 text-center">
          <h3>Coming Soon!</h3>

          <Image
            alt={`Coming soon image`}
            width={300}
            height={300}
            src={'/assets/test.jpg'}
            className="rounded-md my-4"
          />
        </div>
      </section>

      <section>How it works section</section>
    </div>
  );
}
