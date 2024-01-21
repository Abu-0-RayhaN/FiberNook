import { FaFilter } from "react-icons/fa";
import { products as initialProducts } from "../../../constants";
import { useMemo, useState } from "react";
import ConstCard from "./ConstCard";
const HomeProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all products");
  const [sortingOption, setSortingOption] = useState("filter");

  const filteredProducts = useMemo(() => {
    const categoryFiltered =
      selectedCategory === "all products"
        ? initialProducts
        : initialProducts.filter((item) => item.category === selectedCategory);

    switch (sortingOption) {
      case "A-Z":
        return categoryFiltered.sort((a, b) => a.title.localeCompare(b.title));
      case "Z-A":
        return categoryFiltered.sort((a, b) => b.title.localeCompare(a.title));
      case "low-to-high":
        return categoryFiltered.sort((a, b) => a.price - b.price);
      case "high-to-low":
        return categoryFiltered.sort((a, b) => b.price - a.price);
      default:
        return categoryFiltered;
    }
  }, [selectedCategory, sortingOption]);

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const setSortOption = (option) => {
    setSortingOption(option);
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
          <button onClick={() => setCategory("hoodies")}>Hoodies</button>
          <button onClick={() => setCategory("bags")}>Bags</button>
        </div>

        {/* Sorting Option  */}
        <div className="bg-black text-white py-2 px-3 rounded-sm">
          <div className="flex gap-2 justify-around">
            <FaFilter className="text-white h-4 w-4 mt-1 " />
            <select
              className="bg-black text-white px-2 py-1 rounded-sm"
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {filteredProducts.slice(0, 8).map((product) => (
          <ConstCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
