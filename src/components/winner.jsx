'use client';
import React, { useEffect, useState } from 'react';
import Spacer from './spacer';
import { getBook, getTimeSolved } from '../utils';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

function Winner({ rerender, bookName, bookId }) {
  const [totalTimeToSolve, setTimeToSolve] = useState(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const LsBooks = JSON.parse(localStorage.getItem('books'));

    if (LsBooks) {
      const totalTimeSpendSolvingString = getTimeSolved(
        getBook(LsBooks, bookId)
      );
      setTimeToSolve(totalTimeSpendSolvingString);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex flex-col items-center pt-12 text-center text-xl h-screen w-screen">
      <Confetti width={width} height={height} />
      <p className="text-5xl text-green-600 p-4 animate-pulse font-extrabold">
        You won!
      </p>
      <Spacer size={24} />
      <p>
        <span className="font-bold text-2xl">
          Your Time to Solve
          <br />
          <span className="font-extrabold animate-pulse delay-75">
            {bookName}:
          </span>
        </span>
        <br />
        <span className="animate-pulse">{totalTimeToSolve}</span>
      </p>
    </div>
  );
}

export default Winner;
