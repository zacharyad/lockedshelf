'use client';
import React, { useEffect, useState } from 'react';
import Spacer from './spacer';
import { getBook, getTimeSolved } from '../utils';

function Winner({ rerender, bookName, bookId }) {
  const [totalTimeToSolve, setTimeToSolve] = useState(null);

  useEffect(() => {
    const LsBooks = JSON.parse(localStorage.getItem('books'));

    if (LsBooks) {
      const totalTimeSpendSolvingString = getTimeSolved(
        getBook(LsBooks, bookId)
      );
      setTimeToSolve(totalTimeSpendSolvingString);
    }
  }, []);

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
    </div>
  );
}

export default Winner;
