'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { timeFromMsToHMS, findBookById, getBook } from '../utils';
import Confetti from 'react-dom-confetti';
function PuzzleAnswerCard({ puzzle, isHint, rerender, bookId }) {
  const [isError, setIsError] = useState(false);

  const [hasConfetti, setHasConfetti] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const {
    id,
    name,
    imageSrc,
    isSolved,
    answers,
    timeSolved,
    tryCount,
    hint,
    imageAlt,
    difficulty,
  } = puzzle;

  const onSubmit = (data) => {
    // Not allowing blank answers
    if (data.answer.trim() === '') return;

    let lsBooks = JSON.parse(localStorage.getItem('books'));
    let book = getBook(lsBooks, bookId);
    let currPuzzle = book.puzzles.filter((puzzle) => puzzle.id === id)[0];
    // increasing count for each try
    currPuzzle.tryCount = currPuzzle.tryCount + 1;

    if (answers.includes(data.answer.trim().toLowerCase())) {
      setHasConfetti(true);
      // write to localStorage to flip isSolved to true
      // timeSolved to be eual to new Date()
      const timeSince = new Date() - new Date(book.timeStarted);

      currPuzzle.timeSolved = timeFromMsToHMS(timeSince);
      currPuzzle.isSolved = true;
      currPuzzle.answers = [data.answer];

      // setTimeout(() => {
      //   setHasConfetti(false);
      // });
    } else {
      // or set animation to briefly red and shake animation
      setIsError(true);
      setTimeout(() => {
        //register((prev) => !prev);
        setIsError(false);
      }, 1000);
    }

    let newPuzzleArray = book.puzzles.map((puzzle) => {
      if (puzzle.id === id) {
        return currPuzzle;
      }
      return puzzle;
    });

    book.puzzles = newPuzzleArray;

    localStorage.setItem('books', JSON.stringify(lsBooks));

    reset();
    rerender((prev) => !prev);
  };

  return (
    <section
      className={`w-96 snap-top ${
        isError ? 'bg-red-500 wrong' : ''
      } flex flex-col border-2 rounded-md border-slate-500 p-2 hover:border-slate-500 `}
    >
      <div
        className={`${
          isSolved ? 'bg-green-600 border-2' : ''
        } p-2 rounded-md flex gap-4 flex-col items-center hover:opacity-80`}
      >
        {tryCount > 0 ? <p>Attempts: {tryCount}</p> : <p></p>}
        <div className="">
          <Image alt={imageAlt} width={300} height={300} src={imageSrc} />
        </div>
        <Confetti active={hasConfetti} />
        <div className={`self-center justify-self-center w-4/6`}>
          {isSolved ? (
            <div className={`flex flex-col`}>
              <p>Solved!</p>
              <div>
                Answer:<span> </span>
                {[...answers]}
              </div>
              <div>
                {errors.answer && <div>Error</div>}

                <p>Time To Solve: </p>
                <p>{timeSolved}</p>
              </div>
            </div>
          ) : (
            <form
              className="flex flex-col items-center my-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="input">Answer: </label>
              <input
                id="input"
                className={` text-black h-12 w-full text-center border-slate-600 border-2 rounded-md`}
                {...register('answer')}
                placeholder={isError ? 'WRONG' : '______________________'}
              />
              <input
                className={`w-4/6 my-2 text-black bg-slate-300 py-2 rounded-md hover:underline`}
                type="submit"
              />
              <div>
                <p>{errors.answer && <p>Error MSG</p>}</p>
                <p>
                  {tryCount > 5 && isHint && (
                    <p>
                      <span className="font-bold italic">Hint: </span>
                      {hint}
                    </p>
                  )}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default PuzzleAnswerCard;
