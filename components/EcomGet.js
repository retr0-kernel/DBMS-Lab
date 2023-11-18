// components/productTable.js
import React from "react";

const EcomGet = ({ products }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Products Added</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Product Name</th>
            <th className="py-2 px-4 border">Product ID</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.pid} className="border">
              <td className="py-2 px-4 border">{product.pname}</td>
              <td className="py-2 px-4 border">{product.pid}</td>
              <td className="py-2 px-4 border">{product.price}</td>
              <td className="py-2 px-4 border">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EcomGet;
