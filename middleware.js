// middleware: Redux logger

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Products Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// Products State
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
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

// crete store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProducts("milk"));
