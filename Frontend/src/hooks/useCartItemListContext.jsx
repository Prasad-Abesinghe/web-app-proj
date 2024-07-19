import { CartItemsListContext } from "../context/CartContext";
import { useContext } from "react";
export const useCartItemListContext = () => {
  const context = useContext(CartItemsListContext);
  if (!context) {
    throw Error(
      "useCartItemListContext should be used inside of a child element of CartItemsListProvider"
    );
  }
  return context;
};
