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
    tryCount: 6,
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
    tryCount: 4,
    hint: 'the places give you a number based on the map',
    difficulty: 'hard',
  },
];

function WithMain() {
  const [LsPuzzleData, setPuzzleData] = useState(null);

  useEffect(() => {
    const localStoragePuzzleData = localStorage.getItem('puzzle-data');
    if (localStoragePuzzleData) {
      setPuzzleData(JSON.parse(localStoragePuzzleData));
    } else {
      localStorage.setItem('puzzle-data', JSON.stringify(puzzleData));
    }
  }, []);

  const [hintState, setHintState] = useState(false);

  const toggleHints = () => {
    setHintState(!hintState);
  };

  console.log('LS: ', LsPuzzleData);

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="hintToggle">Show Hints after 5 failures? </label>
      <input onChange={toggleHints} checked={hintState} type="checkbox" />
      <Spacer />
      {LsPuzzleData &&
        LsPuzzleData.map((puzzle) => {
          return (
            <div key={puzzle.id}>
              <PuzzleAnswerCard puzzle={puzzle} isHint={hintState} />
              <Spacer />
            </div>
          );
        })}
    </div>
  );
}

export default WithMain;
