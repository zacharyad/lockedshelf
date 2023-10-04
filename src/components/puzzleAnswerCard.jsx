'use client';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

function PuzzleAnswerCard({ puzzle, isHint }) {
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
    // write to local storage to increase tryCount
    let oldData = JSON.parse(localStorage.getItem('puzzle-data'));
    let currPuzzle = oldData.filter((puzzle) => puzzle.id === id)[0];

    currPuzzle.tryCount = currPuzzle.tryCount + 1;

    if (answers.includes(data.answer.toLowerCase())) {
      // write to localStorage to flip isSolved to true
      // timeSolved to be eual to new Date()
      let oldData = localStorage.getItem('puzzle-data');
      alert('winner');
    }
    setError('answer', {
      type: 'custom',
      message: 'Incorrect Answer',
    });

    let newData = oldData.map((puzzle) => {
      if (puzzle.id === id) {
        return currPuzzle;
      }
      return puzzle;
    });

    localStorage.setItem('puzzle-data', JSON.stringify(newData));

    reset();
  };

  return (
    <div
      className={`${
        isSolved ? 'border-green-600 border-2' : ''
      } p-2 rounded-md flex gap-4`}
    >
      <div className="">
        <Image alt={imageAlt} width={200} height={200} src={imageSrc} />
      </div>
      <div className="self-center justify-self-center">
        {isSolved ? (
          <div>
            Solved!
            <div>answer: {answers[0]}</div>{' '}
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="text-black" {...register('answer')} />
            <input type="submit" />
          </form>
        )}
        {errors.answer && <div>Error</div>}
        {tryCount > 5 && isHint && <div>{hint}</div>}
        {tryCount}
      </div>
    </div>
  );
}

export default PuzzleAnswerCard;
