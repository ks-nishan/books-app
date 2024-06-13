import { Book } from "@/types/book";
import { useState } from "react";
import CustomToast from "./CustomToast";

interface BookCardProps {
  book: Book;
}
const BookCard = ({ book }: BookCardProps) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

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
            onClick={() => showToastMessage()}
            disabled={book.status === "Not Available"}
            className="btn hover:text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
      {showToast ? (
        <CustomToast title="Book added to the cart."/>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookCard;
