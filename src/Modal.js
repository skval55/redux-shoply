import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Modal = ({ itemId, item, addToCart, removeFromCart }) => {
  const store = useSelector((store) => store);
  const cart = store.root.cart;
  const qty = cart[itemId] || 0;

  return (
    <dialog id={itemId} className="modal">
      <form method="dialog" className="modal-box">
        <figure className="bg-white p-2">
          <img
            className="max-h-80  m-auto"
            src={item.image_url}
            alt={item.name}
          />
        </figure>
        <h3 className="font-bold text-2xl capitalize mt-2">{item.name}</h3>
        <p className="font-light pt-2">${item.price}</p>
        <p className="pb-4">{item.description}</p>
        <p className="mb-2">total price: ${qty * item.price}</p>
        <div className="card-actions justify-center ">
          <span
            onClick={() => removeFromCart(itemId)}
            className="btn btn-circle btn-outline text-3xl  pb-1"
          >
            -
          </span>
          <div>
            <p>Quantity</p>
            <p>{qty}</p>
          </div>
          <span
            onClick={() => addToCart(itemId)}
            className="btn btn-circle btn-outline text-3xl pb-1"
          >
            +
          </span>
        </div>
        <div className="modal-action">
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
