import { FaFilter } from "react-icons/fa";
// import { products as initialProducts } from "../../../constants";
import Cards from "./Cards";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../features/titleSlice";
import { useProductsListQuery } from "../../../services/shopApi";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all products");
  const [sortingOption, setSortingOption] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const { data: products, error, isLoading } = useProductsListQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  dispatch(setTitle("FiberNook | Shop"));

  // functionality for sorting filtering searching
  useMemo(() => {
    let categoryFiltered = products || [];

    if (selectedCategory !== "all products") {
      categoryFiltered = products.filter(
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
  }, [selectedCategory, sortingOption, searchInput, products]);

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const setSortOption = (option) => {
    setSortingOption(option);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen-2xl container pb-32 py-12 xl:px-12 px-4">
      {/* Search Bar Div at the Top */}
      <Link to={`/`} className="text-gray-800 font-Roboto">
        Home/
      </Link>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border bg-gray-100 border-gray-300 px-2 py-2 w-full rounded-sm font-sans text-gray-700 md:w-[50%] focus:outline-gray-400"
        />
      </div>

      {/* Category List  */}
      <div className="flex md:flex-row flex-col justify-between mt-12 gap-5 md:gap-0 items-center">
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          <button onClick={() => setCategory("all products")}>
            All products
          </button>
          {/* Assuming categories are available in the data */}
          {Array.from(
            new Set((products || []).map((item) => item.category))
          ).map((category) => (
            <button key={category} onClick={() => setCategory(category)}>
              {getCatName(category)}
            </button>
          ))}
        </div>

        {/* Sorting Option */}
        <div className="bg-gray-950 text-white py-2 px-3 rounded-sm">
          <div className="flex gap-2 justify-around">
            <FaFilter className="text-white h-4 w-4 mt-1" />
            <select
              className="bg-gray-950 text-white px-2 py-1 rounded-sm focus:outline-none"
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

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : filteredProducts.length > 0 ? (
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
const getCatName = (sizeId) => {
  const sizeNames = {
    1: "Jewelry & Accessories",
    2: "Clothing & Shoes",
    3: "Wedding & Party",
    4: "Home & Living",
    5: "Toy & Entertainment",
    6: "Art & Collectibles",
  };

  return sizeNames[sizeId] || "Unknown Size";
};
