import { useProductsListQuery } from "../../../services/shopApi";

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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <img src={product.image} alt={product.title} />
            <p>{product.is_active ? "Active" : "Inactive"}</p>
            <p>Stock: {product.stock}</p>
            <p className="p-3 mx-5">Sizes: {renderSizes(product.sizes)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderSizes = (sizes) => {
  return sizes.map((sizeId) => (
    <span key={sizeId} className="px-3">
      {getSizeName(sizeId)}
    </span>
  ));
};

const getSizeName = (sizeId) => {
  const sizeNames = {
    1: "S",
    2: "M",
    3: "L",
    4: "XL",
    5: "XXL",
  };

  return sizeNames[sizeId] || "Unknown Size";
};
export default ProductLi;
