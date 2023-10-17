// export const with_puzzle_data = [
//   {
//     id: 0,
//     name: 'Spine',
//     imageSrc: '/assets/test.jpg',
//     imageAlt: 'image that has the letters 1P1U2Z1L1E',
//     isSolved: false,
//     answers: ['mr. van tassel', 'van tassel', 'mr van tassel'],
//     timeSolved: undefined,
//     tryCount: 0,
//     hint: 'Use the numbers next to letters to give about of that letter found in final word. The letters sort of go in order.',
//     difficulty: 'Low',
//   },
//   {
//     id: 1,
//     name: 'MHK Map',
//     imageSrc: '/assets/test.jpg',
//     imageAlt: 'image of an outlined shape',
//     isSolved: false,
//     answers: ['1233'],
//     timeSolved: undefined,
//     tryCount: 0,
//     hint: 'the places give you a number based on the map',
//     difficulty: 'Medium',
//   },
//   {
//     id: 2,
//     name: 'Math',
//     imageSrc: '/assets/test.jpg',
//     imageAlt:
//       'Images has text that has a triangle with addition sign followed by a 4',
//     isSolved: false,
//     answers: ['00000'],
//     timeSolved: new Date(),
//     tryCount: 0,
//     hint: 'the places give you a number based on the map',
//     difficulty: 'Hard',
//   },
// ];

export const intialWITHBookData = {
  id: 0,
  name: 'Whispers in the Hollow',
  bookImage: '/assets/test.jpg',
  isSolved: false,
  href: '/withbook',
  timeEnded: undefined,
  timeStarted: new Date().toUTCString(),
  amazonWebAddress: 'https://www.amazon.com',
  puzzles: [
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
  ],
};

export const intialHolidayBookData = {
  id: 1,
  name: 'A Carol of Clues',
  bookImage: '/assets/test.jpg',
  isSolved: false,
  href: '/acarolofclues110123',
  timeEnded: undefined,
  timeStarted: new Date().toUTCString(),
  amazonWebAddress: 'https://www.google.com',
  puzzles: [
    {
      id: 0,
      name: 'Spine',
      imageSrc: '/assets/test.jpg',
      imageAlt: 'image that has the letters 1P1U2Z1L1E',
      isSolved: false,
      answers: ['1'],
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
      answers: ['2'],
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
      answers: ['3'],
      timeSolved: new Date(),
      tryCount: 0,
      hint: 'the places give you a number based on the map',
      difficulty: 'Hard',
    },
    {
      id: 3,
      name: 'Math',
      imageSrc: '/assets/test.jpg',
      imageAlt:
        'Images has text that has a triangle with addition sign followed by a 4',
      isSolved: false,
      answers: ['4'],
      timeSolved: new Date(),
      tryCount: 0,
      hint: 'the places give you a number based on the map',
      difficulty: 'Hard',
    },
  ],
};

export const allBooks = [intialHolidayBookData];
// \'
export const faqs = [
  {
    question:
      "How can I access the book's answer entry page, and what is the prerequisite for gaining access to this page?",
    answer:
      "You can access the book's answer entry page by using the special website link provided in the book you've bought. This page is only accessible to those who have purchased the book and used the link from the book. This ensures that only the book's rightful owners can join the interactive puzzle experience on the website.",
  },
  {
    question:
      "Where can I access the book's answer entry page on the Locked Shelf website, and how are subsequent books handled?",
    answer:
      "After you've used the link in the book to access the answer entry page, that book will be shown on the homepage for easy access back to the answer entry page. You can easily find your owned books' answer entry pages directly on the homepage of LockedShelf.com. Books you haven't bought will appear as links on the homepage, allowing you to conveniently buy them directly from the website",
  },
  {
    question:
      'How are my answers stored and managed on the browser to ensure data privacy?',
    answer:
      "Your answers are stored securely in your browser's memory, ensuring your data remains private and accessible only to you on your device.",
  },
  {
    question: 'Will I be timed on how fast I solve a book?',
    answer:
      'The time taken to solve each individual puzzle is calculated from the moment you open the book\'s “Answer entry page” to when you solve it. The total "solved time" for the whole book is the sum of the times taken to solve each puzzle.',
  },
  {
    question: 'Can I compete with friends and/or family?',
    answer:
      "You can compete with your friends based on the number of tries it takes to solve each puzzle and the total time taken to complete the entire book. Real-time competition might be possible by comparing each person's progress and results.",
  },
  {
    question: 'Is there a way to get hints?',
    answer:
      "Yes, there's a \"hint toggle\" button on the book's answer entry page. It reveals additional clues for puzzles that you've attempted more than 5 times. If you find a puzzle too difficult, you can use the hints. We don't keep track of the hint button's use, so it's on the honor system if you're competing with friends or family.",
  },
];
