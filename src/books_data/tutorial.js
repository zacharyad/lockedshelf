export const tutorial = {
  id: 3,
  snapshot: 2,
  name: '- Tutorial -',
  bookImage: '/assets/bookshelf.png',
  isSolved: false, // Do not change this ever
  href: '/tutorial',
  timeEnded: undefined,
  timeStarted: new Date().toUTCString(),
  amazonWebAddress: '/tutorial',
  puzzles: [
    {
      id: 0, // Do not change this ever
      name: 'Spine',
      imageSrc: '/assets/tutorial/tut_1.png',
      imageAlt: 'A thick capitol "I"',
      isSolved: false, // Do not change this ever
      answers: ['1'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0, // Do not change this ever
      hint: "You won't see this just roman' around",
    },
    {
      id: 1, // Do not change this ever
      name: 'MHK Map',
      imageSrc: '/assets/tutorial/tut_2.png',
      imageAlt: 'Two dots that are diagonal to each other',
      isSolved: false, // Do not change this ever
      answers: ['2'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0, // Do not change this ever
      hint: 'This this were rolled what number would you get?',
    },
    {
      id: 2, // Do not change this ever
      name: 'Math',
      imageSrc: '/assets/tutorial/tut_3.png',
      imageAlt:
        'Images has text that has a triangle with addition sign followed by a 4',
      isSolved: false, // Do not change this ever
      answers: ['3'],
      timeSolved: undefined, // Do not change this ever,
      tryCount: 0, // Do not change this ever
      hint: 'I guess it would be easy to count if you knew the number before the 4.',
    },
  ],
};
