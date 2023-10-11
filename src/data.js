export const with_puzzle_data = [
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
    difficulty: 'Low',
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
    difficulty: 'Medium',
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
    difficulty: 'Hard',
  },
];

export const intialWITHBookData = {
  id: 0,
  name: 'Whispers in the Hollow',
  bookImage: '/assets/test.jpg',
  isSolved: false,
  href: '/withbook',
  timeEnded: undefined,
  timeStarted: new Date().toUTCString(),
};