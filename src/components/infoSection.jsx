import Image from 'next/image';
import { BsArrowDownShort } from 'react-icons/bs';
import { HiOutlineLockOpen } from 'react-icons/hi';

export default function InfoSection() {
  return (
    <div id="info" className="flex flex-col items-center gap-2 m-8">
      <h2 className="text-5xl text-center py-4 font-bold mb-8">How it Works</h2>
      <BsArrowDownShort className="w-32 h-32 mx-auto" />
      {/* Step one */}
      <div className="max-w-sm text-white  rounded-lg shadow bg-blue-700 border-gray-700">
        <a href="#">
          <Image
            width={600}
            height={600}
            className="rounded-t-lg"
            src="/assets/stepone.png"
            alt="Image of a book with the title of buy a book"
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Buy a Book!
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            Buy a book. The book ships. You have the Book. Now find the QR
            code/Link to access that book&lsquo;s Answer entry page.
          </p>
          <a
            href="https://www.amazon.com"
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

      <div className="max-w-sm text-white  rounded-lg shadow bg-blue-700 border-gray-700">
        <a href="#">
          <Image
            width={600}
            height={600}
            className="rounded-t-lg"
            src="/assets/steptwo.png"
            alt="Image of a person reading a book with puzzle symbols around his head"
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Start solving puzzles.
          </h5>
          <p className="mb-3 font-normal text-gray-300">
            Find puzzles in the book that connect with the puzzles inputs on the
            book&lsquo;s answer entry page.
            <br />
            <span className="italic">
              <span className="font-bold">For Example: </span>If a puzzle has to
              do with a bird, the answer probably goes to the puzzle box with a
              bird symbol.
            </span>
          </p>
        </div>
      </div>
      <BsArrowDownShort className="w-32 h-32 mx-auto" />
      {/* Step 3 */}
      <div className="max-w-sm text-white  rounded-lg shadow bg-blue-700 border-gray-700">
        <a href="#">
          <Image
            width={600}
            height={600}
            className="rounded-t-lg"
            src="/assets/stepthree.png"
            alt="Image of a hand hovering over a book with a complete jigsaw drawing inside the pages of the book"
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Solve all puzzles to WIN!
          </h5>
          <p className="mb-3 font-normal text-gray-300">
            Once you solve all the books puzzles you will see a winning message
            with your total time to solve the book.
          </p>
        </div>
      </div>
      <HiOutlineLockOpen className="w-32 h-32 mx-auto" />
    </div>
  );
}
