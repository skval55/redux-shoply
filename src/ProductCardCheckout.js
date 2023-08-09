import React from "react";

const ProductCardCheckout = ({ entry, addToCart, removeFromCart, cart }) => {
  const [itemId, item] = entry;
  const qty = cart[itemId];

  return (
    <div className="card w-full bg-transparent rounded-none">
      <figure className="">
        <div className="card card-side bg-transparent rounded-none">
          <figure className="bg-white">
            <img
              className="w-full scale-100 bg-white"
              src={item.image_url}
              alt={item.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize">{item.name}</h2>
            <p>${item.price}</p>
          </div>
        </div>
      </figure>
      <div className="card-body p-3">
        <p>total price: ${qty * item.price}</p>
        <div className="card-actions justify-center ">
          <button
            onClick={() => removeFromCart(itemId)}
            className="btn btn-circle btn-outline text-3xl  pb-1"
          >
            -
          </button>
          <div>
            <p>Quantity</p>
            <p>{qty}</p>
          </div>
          <button
            onClick={() => addToCart(itemId)}
            className="btn btn-circle btn-outline text-3xl pb-1"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCheckout;
