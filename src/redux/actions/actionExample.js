export const modifyExample = data => {
  return {
    type: 'MODIFY_EXAMPLE',
    payload: {
      data,
    },
  };
};
