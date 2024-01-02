import { FaFilter } from "react-icons/fa";
import { products as initialProducts } from "../../../constants";
import Cards from "./Cards";
import { useMemo, useState } from "react";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all products");
  const [sortingOption, setSortingOption] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  //   functionality for sorting filtering searching
  useMemo(() => {
    let categoryFiltered = initialProducts;

    if (selectedCategory !== "all products") {
      categoryFiltered = initialProducts.filter(
        (item) => item.category === selectedCategory
      );
    }

    const searchFiltered = categoryFiltered.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    switch (sortingOption) {
      case "A-Z":
        setFilteredProducts(
          searchFiltered.sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "Z-A":
        setFilteredProducts(
          searchFiltered.sort((a, b) => b.title.localeCompare(a.title))
        );
        break;
      case "low-to-high":
        setFilteredProducts(searchFiltered.sort((a, b) => a.price - b.price));
        break;
      case "high-to-low":
        setFilteredProducts(searchFiltered.sort((a, b) => b.price - a.price));
        break;
      default:
        setFilteredProducts(searchFiltered);
    }
  }, [selectedCategory, sortingOption, searchInput]);

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const setSortOption = (option) => {
    setSortingOption(option);
  };

  return (
    <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
      {/* Search Bar Div at the Top */}
      <div className="mb-8 text-center md:text-start">
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border bg-gray-100 border-gray-300 px-2 py-1 rounded-sm font-sans text-gray-700 md:w-[30%] focus:outline-gray-400"
        />
      </div>

      {/* Category List  */}
      <div className="flex md:flex-row flex-col justify-between mt-12 gap-5 md:gap-0 items-center">
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          <button onClick={() => setCategory("all products")}>
            All products
          </button>
          <button onClick={() => setCategory("clothing")}>Clothing</button>
          <button onClick={() => setCategory("hoodies")}>Hoodies</button>
          <button onClick={() => setCategory("bags")}>Bags</button>
        </div>

        {/* Sorting Option */}
        <div className="bg-black text-white py-2 px-3 rounded-sm">
          <div className="flex gap-2 justify-around">
            <FaFilter className="text-white h-4 w-4 mt-1" />
            <select
              className="bg-black text-white px-2 py-1 rounded-sm focus:outline-none"
              value={sortingOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="all">All</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredProducts.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center my-10">
          No products found for your search criteria.
        </div>
      )}
    </div>
  );
};

export default ProductList;
