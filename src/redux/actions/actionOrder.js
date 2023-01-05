export const addToCart = data => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      data,
    },
  };
};

export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      data: id,
    },
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};

export const updateItemQuantity = (id, quantity) => {
  return {
    type: 'UPDATE_ITEM_QUANTITY_CART',
    payload: {
      data: {
        id,
        quantity,
      },
    },
  };
};

export const setCart = data => {
  return {
    type: 'SET_CART',
    payload: {
      data,
    },
  };
};
