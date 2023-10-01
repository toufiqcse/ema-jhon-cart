import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //load data from local storage by the fake Db
  useEffect(() => {
    const StoredCart = getShoppingCart();
    // console.log(StoredCart);
    const savedCart = [];
    for (const id in StoredCart) {
      // console.log(id);
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = StoredCart[id];
        addedProduct.quantity = quantity;
        // console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    }
    setCarts(savedCart);
  }, [products]);

  //   add to Cart
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = carts.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectedProduct.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCarts(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop grid  grid-cols-3 max-sm:grid-cols-2 duration-500  ">
      {/* product */}
      <div className=" product sm:z-10 grid gap-4  mt-1 ml-4 mr-2 grid-cols-3 max-md:grid-cols-2 col-span-2 max-sm:grid-cols-1 max-sm:col-span-1 ">
        {/* Show product to the UI */}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      {/* Order */}
      <div className="   bg-gray-400  mt-1">
        <p className="text-xl text-center font-[Poppins] mt-4 bg-gray-800 text-white font-bold py-2">
          Cart Summary
        </p>
        <div className="order-content cartItem ">
          <Cart carts={carts}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
