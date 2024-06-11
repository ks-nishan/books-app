import AddBook from "./components/AddBook";
import AllBooks from "./components/AllBooks";

export default function Home() {
  return (
    <main className="md:max-3w-xl sm:max-w-2xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Books Application</h2>
        <AddBook />
      </div>
      <AllBooks />
    </main>
  );
}
