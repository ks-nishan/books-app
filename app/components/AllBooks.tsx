function AllBooks() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mx-auto py-8 px-4 ">
      <div className="card w-76 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">
            Book title <div className="badge badge-secondary">Availibility</div>
          </h2>
          <h4>Author : Steephan</h4>
          <h4>Price : 300$</h4>
          <div className="card-actions justify-end">
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
