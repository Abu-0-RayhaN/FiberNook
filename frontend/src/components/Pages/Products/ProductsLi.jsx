import { useProductsListQuery } from "../../../services/shopApi";
import Cards from "./Cards";
const ProductLi = () => {
  const { data: products, error, isLoading } = useProductsListQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products.</p>;
  }

  return (
    <div>
      <h2>Product List</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {products.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductLi;
