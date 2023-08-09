import React from "react";
import data from "./data.json";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const store = useSelector((store) => store);

  const dispatch = useDispatch();
  const addToCart = (item) => dispatch({ type: "ADD", item });
  const removeFromCart = (item) => dispatch({ type: "SUBTRACT", item });
  console.log(data.products);
  return (
    <div className="flex flex-wrap content-center w-full justify-evenly gap-6 mb-6">
      {Object.entries(data.products).map((entry) => (
        <ProductCard
          key={entry[0]}
          entry={entry}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
