export const intialWITHBookData = {
  id: 0,
  snapshot: 9,
  name: 'Whispers in the Hollow \r\n (Coming Oct. 2024)',
  bookImage: '/assets/test.jpg',
  isSolved: false, // Do not change this ever
  href: '/withbook',
  timeEnded: undefined,
  timeStarted: new Date().toUTCString(),
  amazonWebAddress: 'https://www.amazon.com',
  puzzles: [
    {
      id: 0, // Do not change this ever
      name: 'Spine',
      imageSrc: '/assets/test.jpg',
      imageAlt: 'image that has the letters 1P1U2Z1L1E',
      isSolved: false, // Do not change this ever
      answers: ['mr. van tassel', 'van tassel', 'mr van tassel', '1'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0, // Do not change this ever
      hint: 'Use the numbers next to letters to give about of that letter found in final word. The letters sort of go in order.',
    },
    {
      id: 1, // Do not change this ever
      name: 'MHK Map',
      imageSrc: '/assets/test.jpg',
      imageAlt: 'image of an outlined shape',
      isSolved: false, // Do not change this ever
      answers: ['1233', '0'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0, // Do not change this ever
      hint: 'the places give you a number based on the map',
    },
    {
      id: 2, // Do not change this ever
      name: 'Math',
      imageSrc: '/assets/test.jpg',
      imageAlt:
        'Images has text that has a triangle with addition sign followed by a 4',
      isSolved: false, // Do not change this ever
      answers: ['00000'],
      timeSolved: undefined, // Do not change this ever,
      tryCount: 0, // Do not change this ever
      hint: 'the places give you a number based on the map',
    },
  ],
};
