import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-slate-100 p-4 font-mono">
        <h1 className="text-2xl font-bold">Novel Nest</h1>
        <div className="flex flex-row justify-center items-center">
          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col justify-center items-center gap-2 bg-white shadow-lg p-4 rounded"
              >
                {book.cover && (
                  <img
                    src={book.cover}
                    alt="img"
                    className="w-72 h-96 rounded"
                  />
                )}
                <h1 className="text-xl font-bold uppercase">{book.title}</h1>
                <p className="text-sm w-80 justify-center">{book.desc}</p>
                <p>Price:₹{book.price}</p>
                <div className="w-full flex flex-row justify-center items-center space-x-2">
                  <button
                    className="w-5/6 border-2 border-red-500 bg-red-200 text-red-900 p-2 rounded"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/update/${book.id}`}
                    className="w-5/6 border-2 border-orange-500 bg-orange-200 text-orange-800 p-2 rounded"
                  >
                    <button className="w-full flex justify-center">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
