import  {products}  from "../data"; // <- adjust 
import { useState } from "react";
import { Star } from "lucide-react";

export default function Home() {
    const [category ,  setCategory] = useState("All");
  return (
    <div className="container mx-auto px-6 py-10">
     <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to Our Product Store
      </h1>

      {/* 🔹 Filter Buttons */}
      <div className="flex gap-4 mb-8">
        <button
         className={`px-4 py-2 rounded-lg border`}
        //   onClick={() => setSelectedType("All")}
        //   className={`px-4 py-2 rounded-lg border ${
        //     selectedType === "All"
        //       ? "bg-blue-600 text-white"
        //       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        //   }`}
        >
          All
        </button>

        <button
        //   onClick={() => setSelectedType("Product")}
        //   className={`px-4 py-2 rounded-lg border ${
        //     selectedType === "Product"
        //       ? "bg-blue-600 text-white"
        //       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        //   }`}
        >
          Products
        </button>

        <button
        //   onClick={() => setSelectedType("Service")}
        //   className={`px-4 py-2 rounded-lg border ${
        //     selectedType === "Service"
        //       ? "bg-blue-600 text-white"
        //       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        //   }`}
        >
          Services
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.map((product) => (
         <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Product Info */}
            <div className="flex-1 mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {product.description}
              </p>
            </div>

            {/* Price + Rating */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-blue-600">
                ${product.price}
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="mt-2">
              {product.inStock ? (
                <span className="text-green-600 text-sm font-medium">
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 text-sm font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={!product.inStock}
              className={`mt-4 w-full rounded-lg px-4 py-2 text-sm font-medium transition ${
                product.inStock
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {product.inStock ? "Add to Cart" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
