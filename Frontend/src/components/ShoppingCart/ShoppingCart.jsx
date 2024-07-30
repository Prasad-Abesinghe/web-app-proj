import React, { useState } from "react";
import { CartItem } from "./CartItem";
import { useCartItemListContext } from "../../hooks/useCartItemListContext";
export const ShoppingCart = () => {
  const { cartItemsList } = useCartItemListContext();
 
  return (
    <div className="">
      {cartItemsList &&
        cartItemsList.map((cartItem, index) => (
          <CartItem id={cartItem.id} item={cartItem} />
        ))}
    </div>
  );
};
