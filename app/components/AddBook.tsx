"use client";
import { BiBookAdd } from "react-icons/bi";
import AddBookForm from "./AddBookForm";
import { useState } from "react";

function AddBook() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new book
        <BiBookAdd className="ml-1" size={20} />
      </button>
      <AddBookForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}>
        <form>
          <h3 className="font-bold text-lg">Add New Book</h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-2 mt-2">
            <div className="relative mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="exampleInput90"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "block",
                }}
              >
                Book Title
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                name="title"
                placeholder="Book Title"
              />
            </div>
            <div className="relative mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="exampleInput90"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "block",
                }}
              >
                Author Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                name="author"
                placeholder="Author Name"
              />
            </div>
            <div className="relative mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="exampleInput90"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "block",
                }}
              >
                Price
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="relative mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="statusSelect"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "block",
                }}
              >
                Status
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                name="status"
                id="statusSelect"
                defaultValue="available"
              >
                <option value="available">Available</option>
                <option value="outOfStock">Out of Stock</option>
              </select>
            </div>
          </div>
        </form>
      </AddBookForm>
    </>
  );
}

export default AddBook;
