import React from "react";
import "./product.css";
const Product = (props) => {
  //   console.log(props.product);
  const { addToCart, product } = props;
  const { name, id, price, img, category, stock, seller, ratings } = product;
  return (
    <div className=" bg-gray-400 border  border-gray-300 rounded-sm px-3 py-3 product">
      <div className="">
        <img src={img} className="rounded-sm" alt="" />
      </div>
      {/* product details */}
      <div className="mt-2 ">
        <h3 className="text-medium font-bold text-gray-800 font-[Poppins]">
          {name}
        </h3>
        <h3 className="py-2 text-gray-800 font-[Poppins]">Price: ${price}</h3>
        <p className="py-2 text-gray-800 font-[Poppins]">
          Category: {category}
        </p>
        <p className="py-2 text-gray-800 font-[Poppins]">Seller: {seller}</p>
        <p className="py-2 text-gray-800 font-[Poppins]">
          Ratings: {ratings} star
        </p>
        <div className=" ">
          <button
            onClick={() => addToCart(product)}
            className="cart-btn bg-indigo-800 text-white font-[Poppins] py-2 text-center  rounded  hover:bg-indigo-600 duration-500  w-full"
          >
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
