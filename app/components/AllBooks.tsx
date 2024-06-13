"use client";
import { useState } from "react";
import { Book } from "@/types/book";
import BookCard from "./BookCard";
import { AiOutlineClose } from "react-icons/ai";

interface AllBooksProps {
  books: Book[];
}

export const AllBooks = ({ books }: AllBooksProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 mx-auto py-8 px-4">
        {currentBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={handlePreviousPage}
          hidden={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-800 font-bold text-white rounded hover:bg-primary hover:text-black hover:text-bold cursor-pointer"
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          hidden={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-800 font-bold text-white rounded hover:bg-primary hover:text-black hover:text-bold cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
