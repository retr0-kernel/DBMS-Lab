// components/BookForm.js
import React, { useState } from "react";

const BookForm = ({ getBooks }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Bookid: "",
    Title: "",
    Author: "",
    Isbn: "",
    Genre: "",
    Publicationyear: "",
    Copiesavailable: "",
    Totalcopies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setSubmitted(true);
    e.preventDefault();
    // Handle form submission logic here
    const res = await fetch("/api/library/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.status === 200) {
      alert("Book added successfully");
      getBooks();
    } else {
      alert("Book not added");
    }
    setSubmitted(false);
    // console.log(data);
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Book Information</h2>

      <form onSubmit={handleSubmit}>
        {/* BookID */}
        <div className="mb-4">
          <label
            htmlFor="Bookid"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            BookID:
          </label>
          <input
            type="numeric"
            id="Bookid"
            name="Bookid"
            value={formData.Bookid}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter BookID"
            required
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="Title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="Title"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Title"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label
            htmlFor="Author"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author:
          </label>
          <input
            type="text"
            id="Author"
            name="Author"
            value={formData.Author}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Author"
            required
          />
        </div>

        {/* ISBN */}
        <div className="mb-4">
          <label
            htmlFor="Isbn"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ISBN:
          </label>
          <input
            type="text"
            id="Isbn"
            name="Isbn"
            value={formData.Isbn}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter ISBN"
            required
          />
        </div>

        {/* Genre */}
        <div className="mb-4">
          <label
            htmlFor="Genre"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Genre:
          </label>
          <input
            type="text"
            id="Genre"
            name="Genre"
            value={formData.Genre}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Genre"
            required
          />
        </div>

        {/* Publication Year */}
        <div className="mb-4">
          <label
            htmlFor="Publicationyear"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Publication Year:
          </label>
          <input
            type="numeric"
            id="Publicationyear"
            name="Publicationyear"
            value={formData.Publicationyear}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Publication Year"
            required
          />
        </div>

        {/* Copies Available */}
        <div className="mb-4">
          <label
            htmlFor="Copiesavailable"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Copies Available:
          </label>
          <input
            type="numeric"
            id="Copiesavailable"
            name="Copiesavailable"
            value={formData.Copiesavailable}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Copies Available"
            required
          />
        </div>

        {/* Total Copies */}
        <div className="mb-4">
          <label
            htmlFor="Totalcopies"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Total Copies:
          </label>
          <input
            type="numeric"
            id="Totalcopies"
            name="Totalcopies"
            value={formData.Totalcopies}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Total Copies"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          {submitted ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
