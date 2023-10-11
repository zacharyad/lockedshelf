# Locked Shelf Companion Web App.

This application is designed to offer a companion website where answers to puzzles from a physical book can be entered to ultimately "win." 

Highlight features:

- Completely client stored data
  - Using local storage keeps Database costs down, secured user data, negates need for user login, and additionally creates very quick user experience due to less network calls
- Dynamic homepage
  - The homepage has a book shelf that when clicked goes to the amazon page to purchase the physical book. This book has the webpage for entering puzzle answers. Once a browser is used to go to a books "puzzle page" the homepage changes to say "Your Book Shelf" instead of "The Locked Shelf". Additionaly this book on there "Locked Shelf" now links, when clicked, to the books puzzle page.
  - This increases ability to share out a link and let users get data, but not be confused by easily navigating to get to inputs for puzzles they can't solve beucase they havent purchased the physical book.
- Winner Page
  - A given books puzzles can be answered at any pace. When all puzzles for a given book are completed the user can then only see the "Winner" page which gives them their total time to solve all puzzles.
  - note** currently there are reset buttons that are used to easily test the website, but will not be part of the final expereince
- All assets are self generated
  - All images and styling have been created by Zach Droge.
  - The UI/UX are clean and simplified. 
  - Logos are additionally created by Zach Droge.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
