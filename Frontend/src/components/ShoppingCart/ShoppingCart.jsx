import React, { useState } from "react";
import { CartItem } from "./CartItem";
import { useCartItemListContext } from "../../hooks/useCartItemListContext";
import { Button } from "flowbite-react";
export const ShoppingCart = () => {
  const { cartItemsList } = useCartItemListContext();
 
  return (
    <div className=" text-black">
      {cartItemsList &&
        cartItemsList.map((cartItem, index) => (
          <CartItem id={cartItem.id} item={cartItem} />
        ))}
    </div>
  );
};
