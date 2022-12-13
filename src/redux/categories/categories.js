/* eslint-disable */
const STATUS = 'status';
const categoriesArray = [];


const statusReducer = (state = categoriesArray, action) => {
  if (action.type === STATUS) {
    return 'Under construction';
  }
  return state;
};

export const completeStatus = () => ({
  type: STATUS,
});

export default statusReducer;
