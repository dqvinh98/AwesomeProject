const numberReducer = (state = {number: 1}, action) => {
  switch (action.type) {
    case 'ADDNUMBER':
      return {number: state.number + 1};
    case 'SUBNUMBER':
      return {number: state.number - 1};
  }
  return state;
};

export default numberReducer;
