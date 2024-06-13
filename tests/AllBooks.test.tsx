// __tests__/AllBooks.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AllBooks from '../app/components/AllBooks';
import { Book } from '@/types/book';

const mockBooks: Book[] = [
  { id: '1', title: 'Book A', author: 'Author A', price: '$10', status: 'Available' },
  { id: '2', title: 'Book B', author: 'Author B', price: '$15', status: 'Available' },
  { id: '3', title: 'Book C', author: 'Author C', price: '$20', status: 'Available' },
  { id: '4', title: 'Book D', author: 'Author D', price: '$25', status: 'Available' },
  { id: '5', title: 'Book E', author: 'Author E', price: '$30', status: 'Available' },
  { id: '6', title: 'Book F', author: 'Author F', price: '$35', status: 'Available' },
  { id: '7', title: 'Book G', author: 'Author G', price: '$40', status: 'Available' },
  { id: '8', title: 'Book H', author: 'Author H', price: '$45', status: 'Available' },
  { id: '9', title: 'Book I', author: 'Author I', price: '$50', status: 'Available' },
];

describe('AllBooks Component', () => {
  it('renders the correct number of book cards per page', () => {
    render(<AllBooks books={mockBooks} />);
    const bookCards = screen.getAllByText(/Book [A-I]/);
    expect(bookCards.length).toBe(8); // Expect 8 books per page
  });

  it('displays the correct page number', () => {
    render(<AllBooks books={mockBooks} />);
    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
  });

  it('sorts the books by title in ascending order', () => {
    render(<AllBooks books={mockBooks} />);
    const bookCards = screen.getAllByText(/Book [A-I]/);
    expect(bookCards[0]).toHaveTextContent('Book A');
    expect(bookCards[1]).toHaveTextContent('Book B');
  });

  it('handles pagination correctly', () => {
    render(<AllBooks books={mockBooks} />);
    fireEvent.click(screen.getByText('Next'));

    // Check the current page number
    expect(screen.getByText('Page 2 of 2')).toBeInTheDocument();

    // Check the books displayed on the second page
    const bookCards = screen.getAllByText(/Book [A-I]/);
    expect(bookCards[0]).toHaveTextContent('Book I');
    expect(bookCards.length).toBe(1); // Only one book on the second page

    // Click on the Previous button
    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
  });
});
