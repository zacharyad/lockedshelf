'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { timeFromMsToHMS, getBook } from '../utils';
import Confetti from 'react-dom-confetti';

function PuzzleAnswerCard({
  puzzle,
  isHint,
  rerender,
  bookId,
  hintsUsedCount,
}) {
  const [isError, setIsError] = useState(false);
  const [hasConfetti, setHasConfetti] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    id,
    imageSrc,
    isSolved,
    answers,
    timeSolved,
    tryCount,
    hint,
    imageAlt,
    firstHintSeen,
    lastHintSeen,
  } = puzzle;

  const engageFirstHint = () => {
    let books = JSON.parse(localStorage.getItem('books'));
    const book = getBook(books, bookId);
    const puzzle = book.puzzles[id];
    book.hintsUsedCount++;
    puzzle.firstHintSeen = true;
    localStorage.setItem('books', JSON.stringify(books));
    rerender((prev) => !prev);
  };

  const engageLastHint = () => {
    let books = JSON.parse(localStorage.getItem('books'));
    const book = getBook(books, bookId);
    const puzzle = book.puzzles[id];
    book.hintsUsedCount++;

    puzzle.lastHintSeen = true;

    localStorage.setItem('books', JSON.stringify(books));
    rerender((prev) => !prev);
  };

  const onSubmit = (data) => {
    // Not allowing blank answers
    if (data.answer.trim() === '') return;

    let lsBooks = JSON.parse(localStorage.getItem('books'));
    let book = getBook(lsBooks, bookId);
    let currPuzzle = book.puzzles.filter((puzzle) => puzzle.id === id)[0];
    // increasing count for each try
    currPuzzle.tryCount = currPuzzle.tryCount + 1;

    // is correct answer check
    if (answers.includes(data.answer.trim().toLowerCase())) {
      // write to localStorage to flip isSolved to true
      // timeSolved to be equal to new Date()
      const timeSince = new Date() - new Date(book.timeStarted);

      currPuzzle.timeSolved = timeFromMsToHMS(timeSince);
      currPuzzle.isSolved = true;
      currPuzzle.answers = [data.answer];
      setHasConfetti(true);
    } else {
      setIsError(true);
      setTimeout(() => {
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
      className={`w-96 h[400px] snap-top ${
        isError ? 'bg-red-500 wrong' : ''
      } flex flex-col border-2 rounded-md border-slate-500 p-2 hover:border-slate-500`}
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
              <p>
                Solved!
                {firstHintSeen ? (
                  <p>
                    {firstHintSeen + lastHintSeen} hint{lastHintSeen && 's'}
                    used.
                  </p>
                ) : (
                  <p>No hints used!</p>
                )}
              </p>
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

                {isHint && (
                  <div className="">
                    {!firstHintSeen && (
                      <button
                        className="py-2 px-4 rounded-md bg-orange-300"
                        onClick={() => engageFirstHint()}
                      >
                        Use First Hint for this puzzle
                      </button>
                    )}
                    {firstHintSeen && (
                      <p>
                        <span className="font-bold italic">First Hint: </span>
                        {hint[0]}
                      </p>
                    )}
                  </div>
                )}

                {isHint && firstHintSeen && tryCount > 5 && (
                  <div>
                    {!lastHintSeen && (
                      <button
                        className="py-2 px-4 rounded-md bg-red-300"
                        type="button"
                        onClick={() => engageLastHint(true)}
                      >
                        Do you want to use your last hint?
                      </button>
                    )}
                    {lastHintSeen && (
                      <p>
                        <span className="font-bold italic">Second Hint: </span>
                        {hint[1]}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default PuzzleAnswerCard;
