import BookAnswersPage from '../../components/bookAnswersPage';
// Change this var for book specific data, keeping the alias of bookData the same
import { initialACarolOfCluesBookData as bookData } from '../../books_data/acarolofclues';

function ACarolOfClues() {
  return <BookAnswersPage bookData={bookData} />;
}

export default ACarolOfClues;
