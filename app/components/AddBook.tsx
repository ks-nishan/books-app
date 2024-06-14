"use client";
import { BiBookAdd } from "react-icons/bi";
import AddBookModal from "./AddBookModal";
import { FormEventHandler, useState, ChangeEventHandler } from "react";
import { addBook } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

function AddBook() {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    price: "",
    status: "Available",
  });
  const [formErrors, setFormErrors] = useState({
    title: "",
    author: "",
    price: "",
  });

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      // append the price with '$' sign
      let formattedValue = value.startsWith("$") ? value : `$${value}`;
      // removing if there are any whitespaces
      formattedValue = formattedValue.replace(/\s+/g, "");
      setFormValues({ ...formValues, [name]: formattedValue });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  // set the form values to empty
  const setEmptyFields = () => {
    setFormValues({
      title: "",
      author: "",
      price: "",
      status: "Available",
    });
  };

  const handleSubmitNewBook: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const errors = {
      title: formValues.title ? "" : "This field is required",
      author: formValues.author ? "" : "This field is required",
      price: formValues.price ? "" : "This field is required",
    };
    // Additional validation for price
    if (formValues.price && /[^0-9$]/.test(formValues.price)) {
      errors.price = "This entry can only contain numbers";
    }
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.values(errors).some((error) => error)) {
      return; // Stop form submission if there are errors
    }

    const newBook = {
      id: uuidv4(),
      title: formValues.title,
      author: formValues.author,
      price: formValues.price,
      status: formValues.status,
    };
    await addBook(newBook);
    setEmptyFields();
    // closing the modal after submit
    setIsFormOpen(false);
    router.refresh();
  };

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new book
        <BiBookAdd className="ml-1" size={20} />
      </button>
      <AddBookModal isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}>
        <form onSubmit={handleSubmitNewBook}>
          <h3 className="font-bold text-lg">Add New Book</h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-2 mt-2">
            <div className="relative mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="title"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "block",
                }}
              >
                Book Title *
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-400 leading-tight"
                name="title"
                placeholder="Book Title"
                value={formValues.title}
                onChange={handleInputChange}
              />
              {formErrors.title && (
                <p className="text-red-500 text-s italic text-left">
                  {formErrors.title}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="author"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "block",
                }}
              >
                Author Name *
              </label>
              <input
                type="text"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight"
                name="author"
                placeholder="Author Name"
                value={formValues.author}
                onChange={handleInputChange}
              />
              {formErrors.author && (
                <p className="text-red-500 text-s italic text-left">
                  {formErrors.author}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="price"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "block",
                }}
              >
                Price in USD *
              </label>
              <input
                type="text"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight"
                name="price"
                placeholder="Price"
                value={formValues.price}
                onChange={handleInputChange}
              />
              {formErrors.price && (
                <p className="text-red-500 text-s italic text-left">
                  {formErrors.price}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="status"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "block",
                }}
              >
                Status
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight"
                name="status"
                id="status"
                value={formValues.status}
                onChange={handleInputChange}
              >
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn absolute bottom-6 right-28 bg-primary text-black hover:bg-primary"
          >
            Submit
          </button>
        </form>
      </AddBookModal>
    </>
  );
}

export default AddBook;
