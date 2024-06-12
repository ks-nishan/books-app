import { Book } from "@/types/book";
import BookCard from "./BookCard";

interface AllBooksProps {
  books: Book[];
}

export const AllBooks = ({ books }: AllBooksProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mx-auto py-8 px-4 ">
      {books.map((book) => (
        <BookCard key={book.id} book={book}/>
      ))}
    </div>
  );
};

export default AllBooks;
