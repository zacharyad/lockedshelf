import BookAnswersPage from '../../components/bookAnswersPage';
// Change this var for book specific data, keeping the alias of bookData the same
import { tutorial as bookData } from '../../books_data/tutorial';

function ACarolOfClues() {
  return (
    <div>
      <BookAnswersPage bookData={bookData} />;
    </div>
  );
}

export default ACarolOfClues;
