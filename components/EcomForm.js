// components/BookForm.js
import React, { useState } from "react";

const EcomForm = ({ getProducts }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Pid:"",
    Price:"",
    Quantity:"",
    Pname:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setSubmitted(true);
    e.preventDefault();
    // Handle form submission logic here
    const res = await fetch("/api/ecom/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.status === 200) {
      alert("Product added successfully");
      getProducts();
    } else {
      alert("Product not added");
    }
    setSubmitted(false);
    // console.log(data);
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Product Information</h2>

      <form onSubmit={handleSubmit}>
        {/* Pname */}
        <div className="mb-4">
          <label
            htmlFor="Pname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Pname:
          </label>
          <input
            type="numeric"
            id="Pname"
            name="Pname"
            value={formData.Pname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Pname"
            required
          />
        </div>

        {/* Pid */}
        <div className="mb-4">
          <label
            htmlFor="Pid"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Pid:
          </label>
          <input
            type="text"
            id="Pid"
            name="Pid"
            value={formData.Pid}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Pid"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label
            htmlFor="Price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price:
          </label>
          <input
            type="text"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Price"
            required
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label
            htmlFor="Quantity"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Quantity:
          </label>
          <input
            type="text"
            id="Quantity"
            name="Quantity"
            value={formData.Quantity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-red-500"
            placeholder="Enter Quantity"
            required
          />
        </div>

       

        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          {submitted ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default EcomForm;
