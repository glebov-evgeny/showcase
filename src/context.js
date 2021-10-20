import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  items: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setItems = (data) => {
      dispatch({type: "GET_ITEMS", payload: data})
  }
  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.removeFromBasket = (mainId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: mainId } });
  };
  value.incQuantity = (mainId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: mainId } });
  };
  value.decQuantity = (mainId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: mainId } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: "BASKET_TOGGLE_SHOW" });
  };
  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALLERT" });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
