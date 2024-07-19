import { createContext, useReducer } from "react";

export const CartItemsListContext = createContext();

const CartItemsListReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      var ChangedList = [];
      var newTot = state.TotalQuantity;
      state.cartItemsList.forEach((cartItem) => {
        if (cartItem._id === action.payload._id) {
          ChangedList.push({
            mobileName: cartItem.mobileName,
            _id: cartItem._id,
            quantity: cartItem.quantity + 1,
            price: cartItem.price,
          });
          newTot += 1;
        } else {
          ChangedList.push(cartItem);
        }
      });
      if (ChangedList.length === 0) {
        ChangedList.push(action.payload);
        newTot += 1;
      }
      return {
        cartItemsList: ChangedList,
        TotalQuantity: newTot,
      };
    case "REMOVE":
      var newTot = state.TotalQuantity;
      newTot -= state.cartItemsList.filter(
        (item) => item._id === action.payload._id
      )[0].quantity;
      return {
        cartItemsList: state.cartItemsList.filter(
          (item) => item._id !== action.payload._id
        ),
        TotalQuantity: newTot,
      };
    case "QUANTITY_UP":
      var ChangedList = [];
      var newTot = state.TotalQuantity;
      state.cartItemsList.forEach((cartItem) => {
        if (cartItem._id === action.payload._id) {
          ChangedList.push({
            mobileName: cartItem.mobileName,
            _id: cartItem._id,
            quantity: cartItem.quantity + 1,
            price: cartItem.price,
          });
          newTot += 1;
        } else {
          ChangedList.push(cartItem);
        }
      });
      return {
        cartItemsList: ChangedList,
        TotalQuantity: newTot,
      };
    case "QUANTITY_DOWN":
      var ChangedList = [];
      var newTot = state.TotalQuantity;
      state.cartItemsList.forEach((cartItem) => {
        if (
          cartItem._id === action.payload._id &&
          action.payload.quantity > 0
        ) {
          ChangedList.push({
            mobileName: cartItem.mobileName,
            _id: cartItem._id,
            quantity: cartItem.quantity - 1,
            price: cartItem.price,
          });
          newTot -= 1;
        } else {
          ChangedList.push(cartItem);
        }
      });
      return {
        cartItemsList: ChangedList,
        TotalQuantity: newTot,
      };
    case "CLEAR":
      return {
        cartItemsList: [],
        TotalQuantity: 0,
      };

    default:
      return state;
  }
};

export const CartItemsListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartItemsListReducer, {
    cartItemsList: [],
    TotalQuantity: 0,
  });
  console.log("Cart Items List Context: ", state);
  return (
    <CartItemsListContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartItemsListContext.Provider>
  );
};
