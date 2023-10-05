'use client';
import PuzzleAnswerCard from '@/components/puzzleAnswerCard';
import React, { useEffect, useRef, useState } from 'react';
import Spacer from '@/components/spacer';

const puzzleData = [
  {
    id: 0,
    name: 'Spine',
    imageSrc: '/assets/test.jpg',
    imageAlt: 'image that has the letters 1P1U2Z1L1E',
    isSolved: false,
    answers: ['mr. van tassel', 'van tassel', 'mr van tassel'],
    timeSolved: undefined,
    tryCount: 0,
    hint: 'Use the numbers next to letters to give about of that letter found in final word. The letters sort of go in order.',
    difficulty: 'low',
  },
  {
    id: 1,
    name: 'MHK Map',
    imageSrc: '/assets/test.jpg',
    imageAlt: 'image of an outlined shape',
    isSolved: false,
    answers: ['1233'],
    timeSolved: undefined,
    tryCount: 0,
    hint: 'the places give you a number based on the map',
    difficulty: 'med',
  },
  {
    id: 2,
    name: 'Math',
    imageSrc: '/assets/test.jpg',
    imageAlt:
      'Images has text that has a triangle with addition sign followed by a 4',
    isSolved: false,
    answers: ['00000'],
    timeSolved: new Date(),
    tryCount: 0,
    hint: 'the places give you a number based on the map',
    difficulty: 'hard',
  },
];

function WithMain() {
  const dialogRef = useRef(null);
  const [LsPuzzleData, setPuzzleData] = useState(null);
  const [rerendered, rerender] = useState(false);
  let [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    const localStoragePuzzleData = JSON.parse(
      localStorage.getItem('puzzle-data')
    );

    if (localStoragePuzzleData) {
      setPuzzleData(localStoragePuzzleData);

      const winner = localStoragePuzzleData.reduce((acc, puzzle) => {
        if (puzzle.isSolved === false) acc = false;
        return acc;
      }, true);

      setIsWinner(winner);
    } else {
      localStorage.setItem('puzzle-data', JSON.stringify(puzzleData));
      localStorage.setItem('time-started', new Date().toUTCString());
    }
  }, [rerendered]);

  const [hintState, setHintState] = useState(false);

  const toggleHints = () => {
    setHintState(!hintState);
  };

  const handleResetPuzzles = () => {
    localStorage.removeItem('puzzle-data');
    console.log('DELETED');
    window.location.reload();
  };

  const handleDialogOpen = () => {
    const dialog = document.getElementById('resetDialog');
    if (dialog) {
    }
    dialog.showModal();
  };

  if (isWinner)
    return (
      <div>
        <p>Congrats you won.</p>
        <button onClick={handleResetPuzzles}>Reset</button>
      </div>
    );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-12 border-b-2 p-2">Whispers in the Hollow</h1>
      <label
        htmlFor="Toggle1"
        className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
      >
        <span>Hints After Five Puzzle Attempts</span>
        <span className="relative">
          <input
            id="Toggle1"
            type="checkbox"
            onChange={toggleHints}
            className="hidden peer"
          />
          <div className="w-20 h-12 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-green-400"></div>
          <div className="absolute inset-y-0  left-0 w-8 h-8 m-2 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
        </span>
      </label>

      <Spacer />

      {LsPuzzleData ? (
        LsPuzzleData.map((puzzle) => {
          return (
            <div key={puzzle.id}>
              <PuzzleAnswerCard
                puzzle={puzzle}
                rerender={rerender}
                isHint={hintState}
              />
              <Spacer />
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}

      <dialog id="resetDialog" className="p-4 rounded-md items-center">
        <p>Are you sure you want to reset all</p>
        <div className="flex gap-12 my-4">
          <button
            className="bg-red-600 text-white rounded-md py-2 px-4"
            onClick={handleResetPuzzles}
          >
            Reset All Puzzles
          </button>
          <button
            className="border-2 rounded-md py-2 px-4"
            onClick={() => document.getElementById('resetDialog').close()}
          >
            Close
          </button>
        </div>
      </dialog>

      {LsPuzzleData && (
        <button
          className="bg-orange-600 py-2 px-4 rounded-md relative bottom-0 left-auto right-auto"
          onClick={handleDialogOpen}
        >
          Reset All Answers
        </button>
      )}
    </div>
  );
}

export default WithMain;
