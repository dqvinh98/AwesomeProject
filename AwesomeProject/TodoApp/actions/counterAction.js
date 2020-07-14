// Action
export const addCounter = num => {
  return {
    type: 'ADDNUMBER',
    value: num,
  };
};

export const subCounter = num => {
  return {
    type: 'SUBNUMBER',
    value: num,
  };
};
