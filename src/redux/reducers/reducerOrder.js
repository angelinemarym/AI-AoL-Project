const initialState = {
  cart: [],
};

export default reducerOrder = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload.data],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id != action.payload.data),
      };
    case 'UPDATE_ITEM_QUANTITY_CART':
      const newCart = state.cart.map(item =>
        item.id == action.payload.data.id
          ? {...item, quantity: action.payload.data.quantity}
          : item,
      );
      return {
        ...state,
        cart: newCart,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'SET_CART':
      return {
        ...state,
        cart: [...action.payload.data],
      };
    default:
      return {
        ...state,
      };
  }
};
