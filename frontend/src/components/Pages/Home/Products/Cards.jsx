/* eslint-disable react/prop-types */

const Cards = ({ product }) => {
  const { id, title, category, price, image, status } = product;

  return (
    <div className="card" key={id}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
        <p className="card-price">${price}</p>
        <p className="card-status">{status}</p>
      </div>
    </div>
  );
};

export default Cards;
