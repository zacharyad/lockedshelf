import BookAnswersPage from '../../components/bookAnswersPage';
// Change this var for book specific data, keeping the alias of bookData the same
import { initialWithBookData as bookData } from '../../books_data/withbook';

function ACarolOfClues() {
  return <BookAnswersPage bookData={bookData} />;
}

export default ACarolOfClues;
