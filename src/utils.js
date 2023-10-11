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

export function handleResetPuzzles(rerender) {
  localStorage.removeItem('with-puzzle-data');
  localStorage.removeItem('books');
  rerender((prev) => !prev);
  window.location.reload();
}

export function findBookById(LsBooks, id) {
  for (let i = 0; i < LsBooks.length; i++) {
    if (LsBooks[i].id === id) {
      console.log('FOUND BOOK IN FINDBYID FUNC: ', LsBooks[i]);
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
