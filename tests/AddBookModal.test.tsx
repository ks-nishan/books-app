import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AddBookModal from "@/app/components/AddBookModal";
import { describe, it } from "node:test";

describe("AddBookModal", () => {
  it("renders a heading", () => {
    const setIsFormOpen = jest.fn();
    render(
      <AddBookModal isFormOpen={true} setIsFormOpen={setIsFormOpen}>
        <p>Modal Content</p>
      </AddBookModal>
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(screen.getByRole("dialog")).toHaveClass("modal-open");
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  test("does not render the modal when isFormOpen is false", () => {
    const setIsFormOpen = jest.fn();

    render(
      <AddBookModal isFormOpen={false} setIsFormOpen={setIsFormOpen}>
        <p>Modal Content</p>
      </AddBookModal>
    );

    // Check if the modal is closed
    expect(screen.queryByRole("dialog")).not.toHaveClass("modal-open");
  });

  test("calls setIsFormOpen(false) when close button is clicked", () => {
    const setIsFormOpen = jest.fn();

    render(
      <AddBookModal isFormOpen={true} setIsFormOpen={setIsFormOpen}>
        <p>Modal Content</p>
      </AddBookModal>
    );

    // Simulate a click on the close button
    fireEvent.click(screen.getByText("Close"));

    // Check if setIsFormOpen(false) was called
    expect(setIsFormOpen).toHaveBeenCalledWith(false);
  });
});
