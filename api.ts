import { Book } from "./types/book";

const baseURL = "http://localhost:3002";

// function to get all the books from the server
export const getAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${baseURL}/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // To avoid caching issues
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const books: Book[] = await response.json();
    return books;
  } catch (error) {
    throw error;
  }
};

// function to add new book to the list
export const addBook = async (book: Book): Promise<Book> => {
  try {
    const res = await fetch(`${baseURL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(book),
    });
    const newBook = await res.json();
    return newBook;
  } catch (error) {
    throw error;
  }
};
