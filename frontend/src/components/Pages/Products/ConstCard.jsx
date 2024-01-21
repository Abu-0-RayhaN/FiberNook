/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ConstCard = ({ product }) => {
  const { id, title, category, price, image } = product;
  return (
    <Link to={`/shop/${id}`}>
      <div
        className="m-1 w-full hover:scale-105 transition-all duration-200"
        key={id}
      >
        <img src={image} alt={title} className="card-image" />
        <div className="mx-2 mt-4 mb-2">
          <h3 className="text-lg text-black">{title}</h3>
          <div className="flex justify-between  mt-2">
            <p className="text-gray-600">{category}</p>
            <p className="text-gray-900 text-lg">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ConstCard;
