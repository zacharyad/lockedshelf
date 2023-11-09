export const tutorial = {
  id: 3,
  snapshot: 2,
  hintsUsedCount: 0,
  name: '- Tutorial -',
  bookImage: '/assets/bookshelf.png',
  isSolved: false, // Do not change this ever
  href: '/tutorial',
  timeEnded: undefined,
  timeStarted: new Date().toUTCString(),
  amazonWebAddress: '/tutorial',
  isShowingHints: false, // Do not change this ever
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
      hint: ["You won't see this just roman' around", 'The anser is 1'],
      firstHintSeen: false,
      lastHintSeen: false,
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
      hint: [
        'This this were rolled what number would you get?',
        'The answer is 2, come on.',
      ],
      firstHintSeen: false,
      lastHintSeen: false,
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
      hint: [
        'I guess it would be easy to count if you knew the number before the 4.',
        'The answer is 3. You really did not see that coming?',
      ],
      firstHintSeen: false,
      lastHintSeen: false,
    },
  ],
};
