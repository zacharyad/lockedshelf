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
      {books.length !== 0 &&
        books.map((book) => {
          return (
            <section
              key={book.name}
              className="bg-slate-300 w-full flex flex-col gap-4 p-4"
            >
              <div className="bg-orange-400 h-96 m-auto border-2 rounded-md p-4 text-center">
                <h3>{book.name}</h3>
                <Link href={book.href}>
                  <Image
                    alt={`Image for the book, "${book.name}"`}
                    width={300}
                    height={300}
                    src={book.bookImage}
                    className="rounded-md"
                  />
                </Link>
              </div>
            </section>
          );
        })}

      <section>How it works section</section>
    </div>
  );
}
