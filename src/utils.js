export function timeFromMsToHMS(ms) {
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

export const isAlreadyABookInLs = (bookName, books) => {
  if (!books) return false;

  for (let i = 0; i < books.length; i++) {
    if (books[i].name === bookName) {
      // Already has this book.
      return true;
    }
  }
  return false;
};

export function handleResetPuzzles(rerender, bookId) {
  const lsBooks = JSON.parse(localStorage.getItem('books'));
  let newLsBooks = lsBooks.filter((book) => book.id !== bookId);
  localStorage.setItem('books', newLsBooks);

  rerender((prev) => !prev);
  window.location.reload();
}

export function findBookById(LsBooks, id) {
  for (let i = 0; i < LsBooks.length; i++) {
    if (LsBooks[i].id === id) {
      return LsBooks[i];
    }
  }
}

export function getTimeSolved(book) {
  const timeStarted = new Date(book.timeStarted);
  const timeEnded = new Date(book.timeEnded);
  const totalTimeSpendSolvingString = timeFromMsToHMS(timeEnded - timeStarted);

  return totalTimeSpendSolvingString;
}

export function handleAddingBookToShelf(books, newBook) {
  if (!books) return [newBook];

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === newBook.id) return books;
  }

  books.push(newBook);
  return books;
}

export function getBook(books, bookId) {
  if (!books) return null;
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === bookId) return books[i];
  }

  return null;
}

export function isBookSolved(book) {
  return book.reduce((acc, puzzle) => {
    if (puzzle.isSolved === false) acc = false;
    return acc;
  }, true);
}

export function wonBook(books, book) {
  book.isSolved = true;

  if (book.timeEnded === undefined) {
    book.timeEnded = new Date().toUTCString();
  }

  localStorage.setItem('books', JSON.stringify(books));

  return book;
}

export function getUsersTime() {
  return new Date().toUTCString();
}

export function booksUserDoesNotHave(usersBooks, allBooks) {
  if (!usersBooks) return allBooks;
  let retArr = [];
  let usersIds = usersBooks.map((book) => book.id);

  for (let i = 0; i < allBooks.length; i++) {
    if (!usersIds.includes(allBooks[i].id)) retArr.push(allBooks[i]);
  }

  return retArr;
}

export function mergeNewDataWithOldData(oldData, newData) {
  if (oldData.snapshot === newData.snapshot) return oldData;
  else {
    newData.timeStarted = oldData.timeStarted;

    newData.puzzles.forEach((puzzle, index) => {
      if (oldData.puzzles[index].isSolved) {
        puzzle.isSolved = true;
        puzzle.timeSolved = oldData.puzzles[index].timeSolved;
        puzzle.answers = oldData.puzzles[index].answers;
        puzzle.imagegSrc = oldData.puzzles[index].imageSrc;
        puzzle.imageAlt = oldData.puzzles[index].imageAlt;
      }

      puzzle.tryCount = oldData.puzzles[index].tryCount;
    });

    return newData;
  }
}
