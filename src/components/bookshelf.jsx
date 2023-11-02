'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { booksUserDoesNotHave } from '@/utils';
import { allBooks } from '../books_data';

function BookShelf() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const LsBooks = JSON.parse(localStorage.getItem('books'));

    if (LsBooks) {
      setBooks(LsBooks);
    }
  }, []);

  return (
    <div id="bookShelf" className="">
      <div className="pt-8  bg-slate-300">
        {books.length !== 0 ? (
          <h2 className="text-center p-4 text-5xl  text-black">
            Your Locked Shelf
          </h2>
        ) : (
          <h2 className="text-center p-4 text-5xl  text-black">
            The Locked Shelf
          </h2>
        )}
      </div>
      <section className="bg-slate-300 w-full flex flex-col items-center gap-4 p-4">
        {books.length !== 0 &&
          books.map((book) => {
            let won = book.isSolved;

            return (
              <div
                key={book.name}
                className="bg-slate-700 h-fit m-auto border-2 rounded-md p-4 flex flex-col items-center text-center hover:opacity-90"
              >
                <Link href={book.href} className="flex flex-col items-center">
                  {won ? (
                    <p className="text-green-400">Completed</p>
                  ) : (
                    <p className="text-orange-400">Not Completed</p>
                  )}

                  <Image
                    alt={`Image for the book, "${book.name}"`}
                    width={300}
                    height={300}
                    src={book.bookImage}
                    className="rounded-md"
                  />
                </Link>
              </div>
            );
          })}

        <div className="pt-8  bg-slate-300">
          {books.length !== 0 ? (
            <h2 className="text-center p-4 text-5xl  text-black">
              The Locked Shelf
            </h2>
          ) : (
            <h2 className="text-center p-4 text-5xl  text-black"></h2>
          )}
        </div>

        {booksUserDoesNotHave(books, allBooks).map((book) => {
          return (
            <a key={book.name} target="_blank" href={book.amazonWebAddress}>
              <div className="bg-slate-700 h-96 m-auto border-2 rounded-md p-4 flex flex-col items-center text-center hover:opacity-90">
                <Image
                  alt={book.imageAlt}
                  width={300}
                  height={200}
                  src={book.bookImage}
                  className="rounded-md shadow-xl shadow-slate-500 h-full"
                />
              </div>
            </a>
          );
        })}
        <Link
          target="_blank"
          href="https://www.amazon.com"
          className=" border-2 px-6 py-2 text-slate-100 bg-blue-800 rounded-md hover:bg-blue-700 hover:text-blue-100 focus:ring-blue-800"
        >
          See on Amazon
        </Link>
      </section>
    </div>
  );
}

export default BookShelf;
