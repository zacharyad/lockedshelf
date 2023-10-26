export const intialWITHBookData = {
  id: 0,
  name: 'Whispers in the Hollow \r\n (Coming Oct. 2024)',
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
    },
  ],
};

export const intialHolidayBookData = {
  id: 1,
  name: 'A Carol of Clues',
  bookImage: '/assets/acarolofclues.png',
  isSolved: false,
  href: '/acarolofclues110123',
  imageAlt:
    'Image of a bearded Scrooge holding a key on the right side of the image and a door with wreaths all around it with people exiting the doow to a snowy scene',
  timeEnded: undefined,
  timeStarted: new Date().toUTCString(),
  amazonWebAddress: 'https://www.amazon.com',
  puzzles: [
    {
      id: 0,
      name: 'Birds',
      imageSrc: `/assets/acarolofclues/puzzleImage0.png`,
      imageAlt:
        'Long exposed of birds flying, showing you a line of birds streaking accross the sky in the image',
      isSolved: false,
      answers: [
        'may you always have time to enjoy the birds.',
        'may you always have time to enjoy the birds',
      ],
      timeSolved: undefined,
      tryCount: 0,
      hint: "This trail may be seen using binaculars but i won't squak if you dont use BsThermometer. what does it say in quotes?",
    },
    {
      id: 1,
      name: 'Binary',
      imageSrc: `/assets/acarolofclues/puzzleImage1.png`,
      imageAlt: "An image filled with 1's and 0's",
      isSolved: false,
      answers: ['800'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'You may need to take note of the length of those lines.',
    },
    {
      id: 2,
      name: 'MHK',
      imageSrc: `/assets/acarolofclues/puzzleImage2.png`,
      imageAlt: 'Image of the outline of Manhattan, Kansas',
      isSolved: false,
      answers: ['433722528637'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'Each place should be found in Manhattan... Should be easy if you are looking for the right numbers.',
    },
    {
      id: 3,
      name: 'Sculpture',
      imageSrc: `/assets/acarolofclues/puzzleImage3.png`,
      imageAlt: '"Nick Zack"',
      isSolved: false,
      answers: ['1969'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'This is the sculpture on a large are of learning. What year was this constructed?',
    },
    {
      id: 4,
      name: 'Holly Math',
      imageSrc: '/assets/acarolofclues/puzzleImage4.png',
      imageAlt: 'image of a holly branch with no berries on it, just leaves',
      isSolved: false,
      answers: ['644'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'The berries are your missing variable. It may all look a lot better from a new perspective.',
    },
    {
      id: 5,
      name: 'Spine',
      imageSrc: `/assets/acarolofclues/puzzleImage5.png`,
      imageAlt: 'P1U1Z2L1E1',
      isSolved: false,
      answers: ['crachit'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'The sentence "This sentence" has 2 t\'s and yet you know exactly what it says.',
    },
    {
      id: 6,
      name: 'Shape',
      imageSrc: `/assets/acarolofclues/puzzleImage6.png`,
      imageAlt: 'A Shape with 10 sides',
      isSolved: false,
      answers: ['&!#(+'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'These shapes have sides. These sides might be helpful in telling you the order of the symbols.',
    },
    {
      id: 7,
      name: 'Ruler',
      imageSrc: `/assets/acarolofclues/puzzleImage7.png`,
      imageAlt:
        'Ruler with the bottom left corner cut out with a circular shape. The ruler has tick marks labeled from 0-9',
      isSolved: false,
      answers: ['Ghost of Three', 'ghost of 3'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'Free the measuring device. Square it with the circles and let the number tell you the letter. Unscramble it to find your answer.',
    },
    {
      id: 8,
      name: 'Cut Squares',
      imageSrc: '/assets/acarolofclues/puzzleImage8.png',
      imageAlt:
        'Grid of squares, 4 by 4, some squares filled in with black. Filled in coordinates using [row, column] arrangement are: [1,1], [1,4], [3,4], and [4,2]',
      isSolved: false,
      answers: ['09090623', '9090623', '99623'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'You may need to see throug these in order to find the right numbers',
    },
    {
      id: 9,
      name: 'Welcome',
      imageSrc: `/assets/acarolofclues/puzzleImage9.png`,
      imageAlt:
        'Image of a black shape that looks like a horizontally stretched capital letter T',
      isSolved: false,
      answers: ['Manhattan Welcomes You'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'What does this sign say as you enter town?',
    },
    {
      id: 10,
      name: 'Constellations',
      imageSrc: `/assets/acarolofclues/puzzleImage10.png`,
      imageAlt: 'Image of constellations',
      isSolved: false,
      answers: ['SLATS'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'The stars make a pattern, of which the first letter of the name matters. Use the moon to give you the order of those letters',
    },
    {
      id: 11,
      name: 'Flood',
      imageSrc: `/assets/acarolofclues/puzzleImage11.png`,
      imageAlt: 'Image of a flooded area with a sign that says "Flood"',
      isSolved: false,
      answers: ['1844', '1903', '1951', '1993'],
      timeSolved: undefined,
      tryCount: 0,
      hint: 'Any year it can rain, but one happened to be an issue for the town of Manhattan, KS.',
    },
  ],
};

export const allBooks = [intialHolidayBookData];

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
