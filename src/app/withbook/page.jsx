'use client';
import PuzzleAnswerCard from '@/components/puzzleAnswerCard';
import React, { useEffect, useState } from 'react';
import Spacer from '@/components/spacer';
import Winner from '@/components/winner';
import {
  isBookSolved,
  getBook,
  handleAddingBookToShelf,
  wonBook,
} from '../../utils';
import { intialWITHBookData } from '../../data';

function WithMain() {
  const [LsPuzzleData, setPuzzleData] = useState(null);
  const [rerendered, rerender] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [_books, setBooks] = useState([]);
  const [hintState, setHintState] = useState(false);

  useEffect(() => {
    const lsBooks = JSON.parse(localStorage.getItem('books'));
    const book = getBook(lsBooks, 0);

    if (book) {
      const lsPuzzleData = book.puzzles;
      const winner = isBookSolved(lsPuzzleData);
      setPuzzleData(lsPuzzleData);

      if (winner && book) {
        wonBook(lsBooks, book);
      }

      setBooks(lsBooks);
      setIsWinner(winner);
    } else {
      localStorage.setItem(
        'books',
        JSON.stringify(handleAddingBookToShelf(lsBooks, intialWITHBookData))
      );

      window.location.reload();
    }
  }, [rerendered]);

  const toggleHints = () => {
    setHintState(!hintState);
  };

  const handleDialogOpen = () => {
    const dialog = document.getElementById('resetDialog');
    if (dialog) {
    }
    dialog.showModal();
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
      <h1 className="text-3xl mb-12 border-b-2 p-2">
        {intialWITHBookData.name}
      </h1>

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

      {LsPuzzleData && (
        <div className="flex flex-col gap-12">
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
