import { Book } from "./types/book";

const baseURL = 'http://localhost:3002';

export const getAllBooks = async (): Promise<Book[]> => {
    const responce = await fetch(`${baseURL}/books`);
    const books = await responce.json();
    return books;
}