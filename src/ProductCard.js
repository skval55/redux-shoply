import React from "react";
import Modal from "./Modal";

const ProductCard = ({ entry, addToCart, removeFromCart }) => {
  const [itemId, item] = entry;

  const openModal = () => {
    window[itemId].showModal();
  };

  return (
    <>
      <Modal
        itemId={itemId}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <div className="card w-96 bg-transparent rounded-none">
        <figure className="bg-white p-2">
          <img
            onClick={() => openModal()}
            className="max-h-56 hover:scale-105"
            src={item.image_url}
            alt={item.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold capitalize text-xl">{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => addToCart(itemId)}
              className="btn btn-ghost m-auto text-primary mt-0"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
