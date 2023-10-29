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
  mergeNewDataWithOldData,
} from '../../utils';
import { intialWITHBookData as bookData } from '../../books_data/withbook';

function WithMain() {
  const [LsPuzzleData, setPuzzleData] = useState(null);
  const [rerendered, rerender] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [_books, setBooks] = useState([]);
  const [hintState, setHintState] = useState(false);

  useEffect(() => {
    let lsBooks = JSON.parse(localStorage.getItem('books'));
    const book = getBook(lsBooks, 0);

    if (book) {
      let updatedBookData = mergeNewDataWithOldData(book, bookData);
      const newBookData = updatedBookData.puzzles;
      const winner = isBookSolved(newBookData);
      setPuzzleData(newBookData);

      if (winner && updatedBookData) {
        wonBook(lsBooks, updatedBookData);
      }

      setBooks(lsBooks);
      setIsWinner(winner);
      const newLsBooksArr = lsBooks.map((book) => {
        if (book.id === bookData.id) {
          return updatedBookData;
        } else return book;
      });

      localStorage.setItem('books', JSON.stringify(newLsBooksArr));
    } else {
      localStorage.setItem(
        'books',
        JSON.stringify(handleAddingBookToShelf(lsBooks, bookData))
      );

      // could try the rerender func here instead
      window.location.reload();
    }
  }, [rerendered]);

  const toggleHints = () => {
    setHintState(!hintState);
  };

  if (isWinner) {
    return (
      <Winner
        rerender={rerender}
        bookName={bookData.name}
        bookId={bookData.id}
      />
    );
  }

  return (
    <div className="flex flex-col items-center snap-y snap-proximity ">
      <h1 className="text-3xl mb-12 border-b-2 p-2">{bookData.name}</h1>

      <Spacer size={24} />

      {LsPuzzleData ? (
        LsPuzzleData.map((puzzle) => {
          return (
            <div key={puzzle.id}>
              <PuzzleAnswerCard
                puzzle={puzzle}
                rerender={rerender}
                isHint={hintState}
                bookId={bookData.id}
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
