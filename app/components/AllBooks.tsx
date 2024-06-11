import { Book } from "@/types/book";

interface AllBooksProps {
  books: Book[];
}

export const AllBooks = ({ books }: AllBooksProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mx-auto py-8 px-4 ">
      {books.map((book) => (
        <div key={book.id} className="card w-76 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              {book.title}{" "}
              <div className="badge badge-secondary">{book.status}</div>
            </h2>
            <h4>Author : {book.author}</h4>
            <h4>Price : {book.price}</h4>
            <div className="card-actions justify-end">
              <button className="btn">Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBooks;
