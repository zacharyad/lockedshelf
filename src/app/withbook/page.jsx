'use client';
import PuzzleAnswerCard from '@/components/puzzleAnswerCard';
import React, { useEffect, useState } from 'react';
import Spacer from '@/components/spacer';
import Winner from '@/components/winner';
import {
  isAlreadyABookInLs,
  handleResetPuzzles,
  findBookById,
} from '../../utils';
import { with_puzzle_data, intialWITHBookData } from '../../data';

function WithMain() {
  const [LsPuzzleData, setPuzzleData] = useState(null);
  const [rerendered, rerender] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const localStoragePuzzleData = JSON.parse(
      localStorage.getItem('with-puzzle-data')
    );
    const LsBooks = JSON.parse(localStorage.getItem('books'));

    if (LsBooks) {
      setBooks(LsBooks);
    } else {
      handleAddingBookToShelf();
    }

    if (localStoragePuzzleData) {
      setPuzzleData(localStoragePuzzleData);

      const winner = localStoragePuzzleData.reduce((acc, puzzle) => {
        if (puzzle.isSolved === false) acc = false;
        return acc;
      }, true);

      if (winner) {
        let book = findBookById(LsBooks, 0);

        if (book) {
          book.isSolved = true;
          if (book.timeEnded === undefined) {
            book.timeEnded = new Date().toUTCString();
          }
        }

        localStorage.setItem('books', JSON.stringify(LsBooks));

        // if (!localStorage.getItem('with-end-time')) {
        //   localStorage.setItem('with-end-time', new Date().toUTCString());
        // }
      }

      setIsWinner(winner);
    } else {
      localStorage.setItem(
        'with-puzzle-data',
        JSON.stringify(with_puzzle_data)
      );

      window.location.reload();
    }
  }, [rerendered]);

  const [hintState, setHintState] = useState(false);

  const toggleHints = () => {
    setHintState(!hintState);
  };

  const handleDialogOpen = () => {
    const dialog = document.getElementById('resetDialog');
    if (dialog) {
    }
    dialog.showModal();
  };

  const handleAddingBookToShelf = () => {
    const LsBooks = JSON.parse(localStorage.getItem('books'));

    if (!LsBooks) {
      localStorage.setItem('books', JSON.stringify([intialWITHBookData]));
    } else {
      if (isAlreadyABookInLs('Whispers in the Hollow', books)) return;

      LsBooks.push(withBookData);
      localStorage.setItem('books', JSON.stringify(LsBooks));
    }
  };

  if (isWinner) {
    return (
      <Winner
        rerender={rerender}
        bookName="Whispers in the Hollow"
        bookId={0}
      />
    );
  }

  return (
    <div className="flex flex-col items-center snap-y snap-proximity ">
      <h1 className="text-3xl mb-12 border-b-2 p-2">Whispers in the Hollow</h1>

      <Spacer size={24} />

      {LsPuzzleData ? (
        LsPuzzleData.map((puzzle) => {
          return (
            <div key={puzzle.id}>
              <PuzzleAnswerCard
                puzzle={puzzle}
                rerender={rerender}
                isHint={hintState}
                bookId={intialWITHBookData.id}
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
            onClick={() => handleResetPuzzles(rerender)}
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
        <div className="flex flex-col gap-12">
          <button
            className="bg-orange-600 py-2 px-4 rounded-md relative bottom-0 left-auto right-auto"
            onClick={handleDialogOpen}
          >
            Reset All Answers
          </button>
          <label
            htmlFor="Toggle1"
            className="inline-flex items-center space-x-4 cursor-pointer"
          >
            <span>Hints After Five Puzzle Attempts:</span>
            <span className="relative">
              <input
                id="Toggle1"
                type="checkbox"
                onChange={toggleHints}
                className="hidden peer"
              />
              <div className="w-8 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-green-400"></div>
              <div className="absolute inset-y-0 bg-slate-100 peer-checked:bg-slate-900 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto"></div>
            </span>
          </label>
        </div>
      )}
    </div>
  );
}

export default WithMain;
