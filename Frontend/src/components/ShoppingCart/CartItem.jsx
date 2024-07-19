import React from "react";
import { useCartItemListContext } from "../../hooks/useCartItemListContext";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";
export const CartItem = ({ item }) => {
  const { cartItemsList, dispatch } = useCartItemListContext();
  const removeItem = (cartItem) => {
    dispatch({ type: "REMOVE", payload: cartItem });
  };
  const decrementItem = (cartItem) => {
    dispatch({ type: "QUANTITY_DOWN", payload: cartItem });
  };
  const incrementItem = (cartItem) => {
    dispatch({ type: "QUANTITY_UP", payload: cartItem });
  };

  return (
    <div
      className="flex w-full text-black justify-between mb-4 
      items-center h-[120px] border-b"
    >
      {/* <div className="w-[110px] h-[110px] relative">
        <Image
          src={urlFor(item.images[0]).url()}
          fill
          priority
          sizes="(max-width: 110px) 110px,110px"
          className=" object-contain"
          alt=""
        />
      </div> */}
      <div className=" w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className=" flex items-center justify-between">
          <h5>{item.mobileName}</h5>
          <button onClick={() => removeItem(item)}>
            <FaX className=" text-sm" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item)}>
              <FaMinus className="text-[10px]" />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button onClick={() => incrementItem(item)}>
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            ${item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};
