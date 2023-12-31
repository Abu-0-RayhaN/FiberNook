import { FaFilter } from "react-icons/fa";
import { products as initialProducts } from "../../../../constants";
import Cards from "./Cards";
import { useState } from "react";
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all products");

  // Derive filtered products based on the selected category
  const filteredProducts =
    selectedCategory === "all products"
      ? initialProducts
      : initialProducts.filter((item) => item.category === selectedCategory);

  // Function to update the selected category
  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
      <h2 className="title">Or Subscribe to the newsletter</h2>

      {/* Category List  */}
      <div className="flex md:flex-row flex-col justify-between mt-12 gap-5 md:gap-0 items-center">
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          <button onClick={() => setCategory("all products")}>
            All products
          </button>
          <button onClick={() => setCategory("clothing")}>Clothing</button>
          <button onClick={() => setCategory("hoodies")}>Hodies</button>
          <button onClick={() => setCategory("bags")}>Bags</button>
        </div>

        {/* Sorting Option  */}
        <div className="bg-black text-white py-2 px-3 rounded-sm">
          <div className="flex gap-2 justify-around">
            <FaFilter className="text-white h-4 w-4 mt-1 " />
            <select className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="filter">Filter</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {filteredProducts.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
