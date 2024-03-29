/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  const { id, title, price, image, sizes } = product;
  return (
    <Link to={`/shop/${id}`}>
      <div
        className="m-1 w-full hover:scale-105 transition-all duration-200"
        key={id}
      >
        <img
          src={image}
          alt={title}
          className="card-image w-[312px] h-[350px]"
        />
        <div className="mx-2 mt-4 mb-2">
          <h3 className="text-lg text-black">{title}</h3>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <p className="text-gray-900 text-lg">${price}</p>
            <div className="flex items-center ">
              <div className="flex gap-1">{renderSizes(sizes)}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const renderSizes = (sizes) => {
  return sizes.map((sizeId) => (
    <span key={sizeId} className="text-white bg-black rounded-sm px-2">
      {getSizeName(sizeId)}
    </span>
  ));
};

const getSizeName = (sizeId) => {
  const sizeNames = {
    1: "L",
    2: "XL",
    3: "XXL",
    4: "M",
    5: "3XL",
    6: "4XL",
    7: "ALL",
  };

  return sizeNames[sizeId] || "Unknown Size";
};

export default Cards;
