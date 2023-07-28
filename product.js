const { createStore, combineReducers } = require("redux");

// Products Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
// Cart Constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// Products State
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};
// Cart State
const initialCartState = {
  cart: ["sugar"],
  numberOfProducts: 1,
};

// Products Action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
// Cart Action
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};

// Product Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};
// Cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const rootReducter = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});
// crete store
const store = createStore(rootReducter);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCart());
store.dispatch(addCart("pen"));
store.dispatch(addProducts("milk"));
