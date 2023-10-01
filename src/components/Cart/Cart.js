import React from "react";

const Cart = (props) => {
  const { carts } = props;
  //   console.log(carts);
  let total = 0;
  let quantity = 0;
  for (const product of carts) {
    // console.log(product.price);
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
  }
  const tax = total * 0.1;
  const taxTk = parseFloat(tax.toFixed(2));
  const grand = total + taxTk;
  const grandTotal = grand.toFixed(2);

  return (
    <div className="order-summary px-4">
      <p className="text-medium font-bold py-1 text-gray-800 font-[Poppins]">
        Selected Item: <span>{quantity}</span>
      </p>
      <p className="text-medium  py-1 font-bold text-gray-800 font-[Poppins]">
        Total: <span className="">${total}</span>
      </p>
      <p className="text-medium  py-1 font-bold text-gray-800 font-[Poppins]">
        Tax: ${taxTk}{" "}
        <span className="text-red-600 px-2"> 10% vat applicable</span>
      </p>
      <p className="text-medium text-xl py-1 font-bold text-gray-800 font-[Poppins]">
        Grand Total: <span className="">${grandTotal}</span>
      </p>
    </div>
  );
};

export default Cart;
