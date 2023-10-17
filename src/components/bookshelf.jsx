'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { booksUserDoesNotHave } from '@/utils';
import { allBooks } from '@/data';

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
                className="bg-slate-700 h-96 m-auto border-2 rounded-md p-4 text-center hover:opacity-90"
              >
                <Link href={book.href}>
                  <h3 className="font-bold text-lg">{book.name}</h3>
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
                    className="rounded-md my-4"
                  />
                </Link>
              </div>
            );
          })}

        {booksUserDoesNotHave(books, allBooks).map((book) => {
          return (
            <a key={book.name} target="_blank" href={book.amazonWebAddress}>
              <div className="bg-slate-700 h-96 m-auto border-2 rounded-md p-4 text-center">
                <h3 className="text-white text-lg">{book.name}</h3>
                <Image
                  alt={`Image for Whispers in the Hollow book found on Amazon.com for purchase`}
                  width={300}
                  height={300}
                  src={'/assets/test.jpg'}
                  className="rounded-md my-4"
                />
              </div>
            </a>
          );
        })}
        {/* <a target="_blank" href={'https://www.amazon.com'}>
          <div className="bg-slate-700 h-96 m-auto border-2 rounded-md p-4 text-center">
            <h3 className="text-white text-lg">See The Series!</h3>
            <Image
              alt={`Image for Whispers in the Hollow book found on Amazon.com for purchase`}
              width={300}
              height={300}
              src={'/assets/test.jpg'}
              className="rounded-md my-4"
            />
          </div>
        </a> */}
      </section>
    </div>
  );
}

export default BookShelf;
