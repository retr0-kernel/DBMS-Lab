// Import React and other necessary modules
"use client" 
import React from 'react';
import BookForm from '../components/BookForm';
import EcomForm from '../components/EcomForm';
import EcomGet from '../components/EcomGet';
import BookGet from '../components/BookGet';

export default function Home() {
  const [page, setPage] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch('/api/library/get', { cache: 'no-store' });
      const data = await response.json();

      if (response.ok) {
        setBooks(data.data);
      } else {
        console.error('Error fetching books:', data.message);
      }
    } catch (error) {
      console.error('Error fetching books:');
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch('/api/ecom/get', { cache: 'no-store' });
      const data = await response.json();

      if (response.ok) {
        setProducts(data.data);
      } else {
        console.error('Error fetching products:', data.message);
      }
    } catch (error) {
      console.error('Error fetching products:');
    }
  };

  React.useEffect(() => {
    getBooks();
    getProducts();
  }, []);

  return (
    <main className="container mx-auto my-8 p-4 relative">
      <h1 className="text-3xl font-bold text-center mb-8 relative z-10 ">
        <span className="flowing-background">DBMS Website Assignment</span>
      </h1>
      <div className="flex justify-around mb-8">
        <button
          className={`px-4 py-2 rounded-full transition duration-300 ease-in-out ${page === 'book' ? 'bg-red-500 text-white' : 'bg-blue-300 hover:bg-red-300 hover:text-red'}`}
          onClick={() => setPage('book')}
        >
          Book
        </button>
        <button
          className={`px-4 py-2 rounded-full transition duration-300 ease-in-out ${page === 'ecom' ? 'bg-red-500 text-white' : 'bg-blue-300 hover:bg-red-300 hover:text-red'}`}
          onClick={() => setPage('ecom')}
        >
          Ecom
        </button>
      </div>

      {page === 'book' ? (
        <div>
          <BookForm getBooks={getBooks} />
          <BookGet books={books} />
        </div>
      ) : null}

      {page === 'ecom' ? (
        <div>
          <EcomForm getProducts={getProducts} />
          <EcomGet products={products} />
        </div>
      ) : null}
    </main>
  );
}
