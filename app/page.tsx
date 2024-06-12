import { getAllBooks } from "@/api";
import AddBook from "./components/AddBook";
import AllBooks from "./components/AllBooks";

export default async function Home() {
  const books = await getAllBooks();

  return (
    <main className="max-w-[1240px] md:max-w-4xl sm:max-w-2xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Books Application</h2>
        <AddBook />
      </div>
      <AllBooks books={books}/>
    </main>
  );
}
