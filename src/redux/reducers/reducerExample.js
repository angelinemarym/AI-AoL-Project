const initialState = {
  example: 'This is a reducer example.',
};

export default reducerExample = (state = initialState, action) => {
  switch (action.type) {
    case 'MODIFY_EXAMPLE':
      return {
        ...state,
        example: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
};
