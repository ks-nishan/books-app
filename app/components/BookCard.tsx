import { Book } from "@/types/book";

interface BookCardProps  {
    book: Book
}
const BookCard = ({ book }: BookCardProps) => {
  return (
    <div key={book.id} className="card w-76 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">
          {book.title}{" "}
          <div className="badge badge-secondary">{book.status}</div>
        </h2>
        <h4>Author : {book.author}</h4>
        <h4>Price : {book.price}</h4>
        <div className="card-actions justify-end">
          <button
           disabled={book.status === 'Not Available'}
           className="btn hover:text-white">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
