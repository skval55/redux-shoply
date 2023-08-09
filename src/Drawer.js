import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import ProductCardCheckout from "./ProductCardCheckout";

const Drawer = () => {
  const store = useSelector((store) => store);
  const inventory = store.root.inventory;
  const [cart, setCart] = useState({});
  const [itemQty, setItemQty] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const dispatch = useDispatch();
  const addToCart = (item) => dispatch({ type: "ADD", item });
  const removeFromCart = (item) => dispatch({ type: "SUBTRACT", item });

  useEffect(() => {
    setCart(store.root.cart);
    let totalItems = 0;
    let price = 0;
    for (let item in cart) {
      totalItems += cart[item];
      price += store.root.inventory[item].price * cart[item];
      console.log(price);
    }
    setSubtotal(price);
    setItemQty(totalItems);
  }, [, store, cart]);

  return (
    <div className="drawer drawer-end h-fit">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side z-10  ">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full bg-base-200 text-base-content flex-row content-start h-fit min-h-screen gap-2">
          <h2 className="text-3xl font-light width-full border-b border-primary">
            Shopping Cart
          </h2>
          <div className="flex gap-3 ">
            <h2 className="text-xl block font-extralight  width-full">
              Subtotal: ${subtotal}
            </h2>
            <h2 className="text-xl block font-extralight  width-full">
              Items: {itemQty}
            </h2>
          </div>
          {Object.entries(cart).map((entry) => {
            return (
              <ProductCardCheckout
                key={entry[0]}
                entry={[entry[0], inventory[entry[0]]]}
                addToCart={addToCart}
                cart={cart}
                inventory={inventory}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
