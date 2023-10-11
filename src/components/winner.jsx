'use client';
import React, { useEffect, useState } from 'react';
import Spacer from './spacer';
import { timeFromMsToHMS, findBookById, getTimeSolved } from '../utils';

function Winner({ rerender, bookName, bookId }) {
  const [totalTimeToSolve, setTimeToSolve] = useState(null);

  useEffect(() => {
    const LsBooks = JSON.parse(localStorage.getItem('books'));
    const book = findBookById(LsBooks, bookId);

    if (book) {
      const totalTimeSpendSolvingString = getTimeSolved(book);
      setTimeToSolve(totalTimeSpendSolvingString);
    }
  }, [bookId]);

  const handleResetPuzzles = () => {
    localStorage.removeItem('with-puzzle-data');
    localStorage.removeItem('books');
    localStorage.removeItem('with-end-time');
    rerender((prev) => !prev);
    //window.location.reload();
  };
  return (
    <div className="flex flex-col items-center pt-12 text-center text-xl h-screen w-screen">
      <p className="text-5xl text-green-600 p-4 animate-pulse font-extrabold">
        You won!
      </p>
      <Spacer size={24} />
      <p>
        <span className="font-bold text-2xl">
          Your Time to Solve
          <br />
          <span className="font-extrabold underline">{bookName}:</span>
        </span>
        <br />
        <span className="animate-pulse">{totalTimeToSolve}</span>
      </p>
      <Spacer size={24} />
      <button
        className="border-2 py-2 px-4 bg-red-500 text-white rounded-md"
        onClick={handleResetPuzzles}
      >
        Reset
      </button>
    </div>
  );
}

export default Winner;
