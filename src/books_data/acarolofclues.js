export const initialACarolOfCluesBookData = {
  id: 1,
  snapshot: 3,
  hintsUsedCount: 0,
  name: 'A Carol of Clues',
  bookImage: '/assets/acarolofclues.png',
  isSolved: false, // Do not change this ever
  href: '/acarolofclues110123',
  imageAlt:
    'Image of a bearded Scrooge holding a key on the right side of the image and a door with wreaths all around it with people exiting the doow to a snowy scene',
  timeEnded: undefined,
  timeStarted: new Date().toUTCString(),
  amazonWebAddress: 'https://www.amazon.com',
  isShowingHints: false, // Do not change this ever
  puzzles: [
    {
      id: 0, // Do not change this ever
      name: 'Birds',
      imageSrc: `/assets/acarolofclues/puzzleImage0.png`,
      imageAlt:
        'Long exposed of birds flying, showing you a line of birds streaking accross the sky in the image',
      isSolved: false, // Do not change this ever
      answers: [
        'may you always have time to enjoy the birds.',
        'may you always have time to enjoy the birds',
        'you always have time to enjoy the birds',
        'you always have time to enjoy the birds.',
      ],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'What would that quote say on that sign if you were standing in front of it?',
        "This puzzle has to do with a trail. I won't squak if you don't know it. If you are around Manhattan, you may be Best to talk to Cecil",
      ],
    },
    {
      id: 1, // Do not change this ever
      name: 'Binary',
      imageSrc: `/assets/acarolofclues/puzzleImage1.png`,
      imageAlt: "An image filled with 1's and 0's",
      isSolved: false, // Do not change this ever
      answers: ['800'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'One of these pages is not like the others. There is a quote that may give you more info than lines on the page.',
        'You may need to take note of the length of those lines on the N01es page. B. I. Nary would always turn to his home at... Base 10',
      ],
    },
    {
      id: 2, // Do not change this ever
      name: 'MHK',
      imageSrc: `/assets/acarolofclues/puzzleImage2.png`,
      imageAlt: 'Image of the outline of Manhattan, Kansas',
      isSolved: false, // Do not change this ever
      answers: ['433722528637'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'Each place should be found in Manhattan... Should be easy if you are looking for the right numbers in the outline.',
        'There are images in order. Find the locations in real life; in return this may help you find them on a map. Your answer should be all sorts of numbers',
      ],
    },
    {
      id: 3, // Do not change this ever
      name: 'Sculpture',
      imageSrc: `/assets/acarolofclues/puzzleImage3.png`,
      imageAlt: '"Nick Zack"',
      isSolved: false, // Do not change this ever
      answers: ['1969'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'The above name is actually the artist of the drawing within those pages. You may find this artwork where purple clothing can be found most often from September to May.',
        'A large word seen on the opposite book page may help you with the answer to when this was installed?',
      ],
    },
    {
      id: 4, // Do not change this ever
      name: 'Holly Math',
      imageSrc: '/assets/acarolofclues/puzzleImage4.png',
      imageAlt: 'image of a holly branch with no berries on it, just leaves',
      isSolved: false, // Do not change this ever
      answers: ['-122'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        "The berries are your missing variable, can't you SEE",
        'It may all look a lot better from a new perspective that we will need to see through. Solve this new perspective to get you negative answer.',
      ],
    },
    {
      id: 5, // Do not change this ever
      name: 'Spine',
      imageSrc: `/assets/acarolofclues/puzzleImage5.png`,
      imageAlt: 'P1U1Z2L1E1',
      isSolved: false, // Do not change this ever
      answers: ['cratchit'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'The word "Letter" has two letter "t"\'s in it.',
        'This is a person in the book. Count those letters and figure it out!',
      ],
    },
    {
      id: 6, // Do not change this ever
      name: 'Shape',
      imageSrc: `/assets/acarolofclues/puzzleImage6.png`,
      imageAlt: 'A Shape with 10 sides',
      isSolved: false, // Do not change this ever
      answers: ['&!#(+'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'The above shape has sides. What could a bunch of sides have to do with makeing this larger shape?',
        'These sides might be helpful in telling you the order of the symbols you found.',
      ],
    },
    {
      id: 7, // Do not change this ever
      name: 'Ruler',
      imageSrc: `/assets/acarolofclues/puzzleImage7.png`,
      imageAlt:
        'Ruler with the bottom left corner cut out with a circular shape. The ruler has tick marks labeled from 0-9',
      isSolved: false, // Do not change this ever
      answers: ['ghost of three', 'ghostofthree'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'Free the measuring device and hunt down those circles!',
        'Square it with the circles and let the number tell you the letter you need. Collect all 12 letters. Unscramble to find your answer three word answer.',
      ],
    },
    {
      id: 8, // Do not change this ever
      name: 'Cut Squares',
      imageSrc: '/assets/acarolofclues/puzzleImage8.png',
      imageAlt:
        'Grid of squares, 4 by 4, some squares filled in with black. Filled in coordinates using [row, column] arrangement are: [1,1], [1,4], [3,4], and [4,2]',
      isSolved: false, // Do not change this ever
      answers: ['09090623', '9090623', '99623'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        "I can see right through this puzzle, can't you?",
        'Find the grid of numbers and letter each square show you the answer.',
      ],
    },
    {
      id: 9, // Do not change this ever
      name: 'Welcome',
      imageSrc: `/assets/acarolofclues/puzzleImage9.png`,
      imageAlt:
        'Image of a black shape that looks like a horizontally stretched capital letter T',
      isSolved: false, // Do not change this ever
      answers: ['manhattan welcomes you'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'This sign says something..I just can\t tell what it might say. I bet you would welcome any help you could get.',
        'What does this welcome sign say as you enter Manhattan, KS from the east?',
      ],
    },
    {
      id: 10, // Do not change this ever
      name: 'Constellations',
      imageSrc: `/assets/acarolofclues/puzzleImage10.png`,
      imageAlt: 'Image of constellations',
      isSolved: false, // Do not change this ever
      answers: ['slats'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,
      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'Zodiac constellations are all spelled with a first letter, obviously... But what could the order be? Would Buzz Aldrin know that bit of info?',
        'Stars make a pattern, of which the first letter of its zodiac name matters. Use the moon phases to give you the order of those letters',
      ],
    },
    {
      id: 11, // Do not change this ever
      name: 'Flood',
      imageSrc: `/assets/acarolofclues/puzzleImage11.png`,
      imageAlt: 'Image of a flooded area with a sign that says "Flood"',
      isSolved: false, // Do not change this ever
      answers: ['1844'],
      timeSolved: undefined, // Do not change this ever
      tryCount: 0,

      firstHintSeen: false,
      lastHintSeen: false,
      hint: [
        'Cut the page so that images become whole. Read the sentence to get to your goal.',
        'One year happened to be an issue for the town of Manhattan, KS. What was the year of this',
      ],
    },
  ],
};
