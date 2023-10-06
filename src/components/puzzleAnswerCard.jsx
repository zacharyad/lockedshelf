'use client';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

function PuzzleAnswerCard({ puzzle, isHint, rerender }) {
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

  function timeFromMsToHMS(ms) {
    const seconds = Number(ms / 1000);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
    var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
    var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }

  const onSubmit = (data) => {
    // write to local storage to increase tryCount
    let oldData = JSON.parse(localStorage.getItem('puzzle-data'));
    let currPuzzle = oldData.filter((puzzle) => puzzle.id === id)[0];

    currPuzzle.tryCount = currPuzzle.tryCount + 1;

    if (answers.includes(data.answer.toLowerCase())) {
      // write to localStorage to flip isSolved to true
      // timeSolved to be eual to new Date()
      const timeSince =
        new Date() - new Date(localStorage.getItem('time-started'));

      currPuzzle.timeSolved = timeFromMsToHMS(timeSince);
      currPuzzle.isSolved = true;
    } else {
      // or set animation to briefly red and shake animation
      setError('answer', {
        type: 'custom',
        message: 'Incorrect Answer',
      });
    }

    let newData = oldData.map((puzzle) => {
      if (puzzle.id === id) {
        return currPuzzle;
      }
      return puzzle;
    });

    localStorage.setItem('puzzle-data', JSON.stringify(newData));

    reset();
    rerender((prev) => !prev);
  };

  return (
    <section className="w-64 flex flex-col border-2 rounded-md border-slate-50 p-2 hover:border-slate-500 ">
      <div
        className={`${
          isSolved ? 'bg-green-600 border-2' : ''
        } p-2 rounded-md flex gap-4 flex-col items-center hover:-translate-y-1`}
      >
        {tryCount > 0 ? <p>Attempts: {tryCount}</p> : <p></p>}
        <div className="">
          <Image alt={imageAlt} width={200} height={200} src={imageSrc} />
        </div>
        <div className="self-center justify-self-center">
          {isSolved ? (
            <div className="flex flex-col">
              <p>Solved!</p>
              <div>Answer: {answers[0]}</div>
              <div>
                {errors.answer && <div>Error</div>}

                <p>Time To Solve: </p>
                <p>{timeSolved}</p>
              </div>
            </div>
          ) : (
            <form
              className="flex flex-col items-center my-4 border-b-2 border-slate-50"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="text-black h-12 text-center"
                {...register('answer')}
              />
              <input
                className="bg-slate-50 w-full my-2 text-black"
                type="submit"
              />
              <div>
                <p>{errors.answer && <p>Error MSG</p>}</p>
                <p>Difficulty: {difficulty}</p>
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
