import { Book } from "./types/book";

const baseURL = 'http://localhost:3002';

// function to get all the books from the server
export const getAllBooks = async (): Promise<Book[]> => {
    try {
        const response = await fetch(`${baseURL}/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const books: Book[] = await response.json();
        console.log('Fetched books:', books);
        return books;
    } catch (error) {
        console.error('Failed to fetch books:', error);
        throw error;
    }
};