'use client';
import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';

function Steps() {
  return (
    <div className="flex flex-col gap-2">
      {/* Step one */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/test.jpg" alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Buy a Book!
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Buy a book. The book ships. You have the Book. Now find the QR
            code/Link to access that book's Answer entry page.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy on Amazon
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* Step 2 */}

      <BsArrowDownShort className="w-32 h-32 mx-auto" />

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/test.jpg" alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Start solving puzzles.
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Find puzzles in the book that connect with the puzzles inputs on the
            book's answer entry page.
            <br />
            <span className="italic">
              <span className="font-bold">For Example: </span>If a puzzle has to
              do with a bird, the answer probably goes to the puzzle box with a
              bird symbol.
            </span>
          </p>
        
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
      <BsArrowDownShort className="w-32 h-32 mx-auto" />
      {/* Step 3 */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/assets/test.jpg" alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Buy a Book!
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Buy a book. The book ships. You have the Book. Now find the QR
            code/Link to access that book's Answer entry page.
          </p>
          Buy on Amazon
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Steps;
